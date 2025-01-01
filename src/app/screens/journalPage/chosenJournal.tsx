import { Box, Button, Container, Stack } from "@mui/material";
import OtherJournal from "../../components/header/otherJournal";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import JournalService from "../../services/JournalService";
import { T } from "../../../lib/types/common";
import { useNavigate, useParams } from "react-router-dom";
import { setChosenJournal } from "./slice";
import { Journal } from "../../../lib/types/journal";
import { retrieveChosenJournal } from "./select";
import { Messages, serverApi } from "../../../lib/config";
import { useGlobals } from "../../hooks/useGlobals";
import {
  sweetErrorHandlingAuth,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { CommentGroup } from "../../../lib/enums/comment.enum";
import { CommentInput } from "../../../lib/types/comment";
import CommitService from "../../services/CommitService";

const actionDispatch = (dispatch: Dispatch) => ({
  setChosenJournal: (data: Journal) => dispatch(setChosenJournal(data)),
});

const chosenJournalRetrieve = createSelector(
  retrieveChosenJournal,
  (chosenJournal) => ({
    chosenJournal,
  })
);

export default function ChosenJournal() {
  const { setChosenJournal } = actionDispatch(useDispatch());
  const { chosenJournal } = useSelector(chosenJournalRetrieve);
  const [newCommit, setNewCommit] = useState<string>("");
  const [commitRef, setCommitRef] = useState<boolean>(false);
  const { authMember } = useGlobals();
  const { journalId } = useParams();

  const handleCommit = async () => {
    try {
      const commentService = new CommitService();
      if (newCommit === "") {
        throw new Error(Messages.error3);
      }
      const id: string = journalId as string;
      const input: CommentInput = {
        commentContext: newCommit,
        commentGroup: CommentGroup.JOURNAL,
        commentRefId: id,
        memberId: "",
      };
      const result = await commentService.createCommit(input);
      await sweetTopSmallSuccessAlert("Comment successfully!", 700);
      setNewCommit("");
      setCommitRef(!commitRef);
    } catch (err) {
      console.log(err);
      sweetErrorHandlingAuth("Please write comment!").then();
    }
  };

  useEffect(() => {
    const journalService = new JournalService();
    const id = String(journalId);
    journalService
      .getJournal(id)
      .then((data) => setChosenJournal(data))
      .catch((err) => console.log(err));
  }, [commitRef]);

  const handleNewCommit = (e: T) => {
    setNewCommit(e.target.value);
  };

  const handleAuth = () => {
    sweetErrorHandlingAuth("Please login first!");
  };
  const imagePath = `${serverApi}/${chosenJournal?.journalImage}`;
  if (!chosenJournal) return null;
  return (
    <div className="journal-chosen-page">
      <OtherJournal />
      <Container className="container">
        <Stack className="menu-box">
          <img src={imagePath} alt="" />
          <span>{chosenJournal?.journalTitle}</span>
          <p>{chosenJournal?.journalContext}</p>
        </Stack>
        <Stack className="comment-box">
          <Stack className="rewiev-box">
            <Box className={"title"}>Comments</Box>
            <Stack className="boxes">
              {chosenJournal?.journalData ? (
                chosenJournal.journalData.map((comment: any) => {
                  return (
                    <Box key={comment._id} className={"comm"}>
                      <span>{comment.memberData.memberFirstName}</span>
                      <p>{comment.commentContext}</p>
                    </Box>
                  );
                })
              ) : (
                <Box className={"comm"}>
                  <span>Tetzi</span>
                  <p>No Commet</p>
                </Box>
              )}
            </Stack>
            <Stack className="review">
              <span>Your commet</span>
              <input
                type="text"
                value={newCommit}
                placeholder={"Your product discussion ...?"}
                onChange={handleNewCommit}
              />
              <Button onClick={authMember ? handleCommit : handleAuth}>
                Post
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
