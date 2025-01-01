import { Box, Button, Container, Stack } from "@mui/material";
import OtherJournal from "../../components/header/otherJournal";
import {
  JournalCategory,
  JournalStatus,
} from "../../../lib/enums/journal.enum";
import { serverApi } from "../../../lib/config";

export default function Journal() {
  const journal = [
    {
      _id: "",
      journalImage: "/img/baby.jpg",
      journalCategory: JournalCategory.PAMPERS,
      journalComments: 1,
      journalContext: "content",
      journalLikes: 2,
      journalTitle: "title",
      journalStatus: JournalStatus.PAUSE,
    },
    {
      _id: "",
      journalImage: "/img/baby.jpg",
      journalCategory: JournalCategory.PAMPERS,
      journalComments: 1,
      journalContext: "content",
      journalLikes: 2,
      journalTitle: "title",
      journalStatus: JournalStatus.PAUSE,
    },
    {
      _id: "",
      journalImage: "/img/baby.jpg",
      journalCategory: JournalCategory.PAMPERS,
      journalComments: 1,
      journalContext: "content",
      journalLikes: 2,
      journalTitle: "title",
      journalStatus: JournalStatus.PAUSE,
    },
    {
      _id: "",
      journalImage: "/img/baby.jpg",
      journalCategory: JournalCategory.PAMPERS,
      journalComments: 1,
      journalContext: "content",
      journalLikes: 2,
      journalTitle: "title",
      journalStatus: JournalStatus.PAUSE,
    },
    {
      _id: "",
      journalImage: "/img/baby.jpg",
      journalCategory: JournalCategory.PAMPERS,
      journalComments: 1,
      journalContext: "content",
      journalLikes: 2,
      journalTitle: "title",
      journalStatus: JournalStatus.PAUSE,
    },
    {
      _id: "",
      journalImage: "/img/baby.jpg",
      journalCategory: JournalCategory.PAMPERS,
      journalComments: 1,
      journalContext: "content",
      journalLikes: 2,
      journalTitle: "title",
      journalStatus: JournalStatus.PAUSE,
    },
    {
      _id: "",
      journalImage: "/img/baby.jpg",
      journalCategory: JournalCategory.PAMPERS,
      journalComments: 1,
      journalContext: "content",
      journalLikes: 2,
      journalTitle: "title",
      journalStatus: JournalStatus.PAUSE,
    },
    {
      _id: "",
      journalImage: "/img/baby.jpg",
      journalCategory: JournalCategory.PAMPERS,
      journalComments: 1,
      journalContext: "content",
      journalLikes: 2,
      journalTitle: "title",
      journalStatus: JournalStatus.PAUSE,
    },
    {
      _id: "",
      journalImage: "/img/baby.jpg",
      journalCategory: JournalCategory.PAMPERS,
      journalComments: 1,
      journalContext: "content",
      journalLikes: 2,
      journalTitle: "title",
      journalStatus: JournalStatus.PAUSE,
    },
  ];
  return (
    <div className="journal-page">
      <OtherJournal />
      <Container className="container">
        <Stack className="search-box">
          <input
            type="search"
            className="search"
            placeholder="Type to search"
          />
        </Stack>
        <Stack className="journal-boxes">
          {journal.length !== 0 ? (
            journal.map((ele) => {
              const imagePath = `${ele.journalImage}`;
              return (
                <Stack
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
                  <Button className="page" key={index}>
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
