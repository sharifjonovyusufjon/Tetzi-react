import { Box, Button, Container, Stack } from "@mui/material";
import OtherJournal from "../../components/header/otherJournal";
import {
  JournalCategory,
  JournalStatus,
} from "../../../lib/enums/journal.enum";
import { serverApi } from "../../../lib/config";
import { Journal, JournalInQuiry } from "../../../lib/types/journal";
import { setGetJournals } from "./slice";
import { retrieveGetJournals } from "./select";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import JournalService from "../../services/JournalService";
import { T } from "../../../lib/types/common";
import { useNavigate } from "react-router-dom";

const actionDispatch = (dispatch: Dispatch) => ({
  setGetJournals: (data: Journal[]) => dispatch(setGetJournals(data)),
});

const getJournalsRetrieve = createSelector(
  retrieveGetJournals,
  (getJournals) => ({
    getJournals,
  })
);

export default function Journals() {
  const navigate = useNavigate();
  const { setGetJournals } = actionDispatch(useDispatch());
  const { getJournals } = useSelector(getJournalsRetrieve);

  const [journalInput, setJournalInput] = useState<JournalInQuiry>({
    page: 1,
    limit: 9,
    search: "",
  });

  useEffect(() => {
    const journalService = new JournalService();

    journalService
      .getJournals(journalInput)
      .then((data) => setGetJournals(data))
      .catch((err) => console.log("Err, getProducts", err));
  }, [journalInput]);

  const handleSearch = (e: T) => {
    journalInput.search = e.target.value;
    setJournalInput({ ...journalInput });
  };

  const handlePage = (input: number) => {
    journalInput.page = input;
    setJournalInput({ ...journalInput });
  };

  const handleJournal = (id: string) => {
    navigate(`/journal/${id}`);
  };

  return (
    <div className="journal-page">
      <OtherJournal />
      <Container className="container">
        <Stack className="search-box">
          <input
            onChange={handleSearch}
            type="search"
            className="search"
            placeholder="Type to search"
          />
        </Stack>
        <Stack className="journal-boxes">
          {getJournals.length !== 0 ? (
            getJournals.map((ele) => {
              const imagePath = `${serverApi}/${ele.journalImage}`;
              return (
                <Stack
                  onClick={() => handleJournal(ele._id)}
                  className="journal-box"
                  sx={{ cursor: "pointer" }}
                  key={ele._id}
                >
                  <Box
                    className={"card-img"}
                    sx={{
                      backgroundImage: `url(${imagePath})`,
                    }}
                  ></Box>
                  <Stack className={"card-text"}>
                    <Box className={"journal-category"}>
                      {ele.journalCategory}
                    </Box>
                    <Box className={"journal-title"}>{ele.journalTitle}</Box>
                    <Box className={"journal-text"}>{ele.journalContext}</Box>
                  </Stack>
                </Stack>
              );
            })
          ) : (
            <Box className={"not-vaible"}>Not Avaible</Box>
          )}
        </Stack>
        <Stack className="pagination-box">
          <Stack className="best-pagination">
            <Stack className={"pagination"}>
              {[1, 2, 3, 4, 5].map((ele, index) => {
                const activeBacgroundColor = "rgb(255, 216, 129)";
                const activeColor = "rgb(255, 255, 255)";
                return (
                  <Button
                    className="page"
                    key={index}
                    onClick={() => handlePage(ele)}
                  >
                    {ele}
                  </Button>
                );
              })}
            </Stack>
            <Box className={"pag-text"}>Products from 1 to 12 of 80</Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
