import { Box, Container, Stack } from "@mui/material";
import { retrieveJournal } from "./selector";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { serverApi } from "../../../lib/config";
import { useNavigate } from "react-router-dom";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";

const journalRetrieve = createSelector(retrieveJournal, (journal) => ({
  journal,
}));

export default function Journals() {
  const navigate = useNavigate();
  const { journal } = useSelector(journalRetrieve);

  const handleJournal = (id: string) => {
    navigate(`/journal/${id}`);
  };
  return (
    <div className="journal">
      <Container className="journal-container">
        <Stack className="journal-boxs">
          <Box className="journal-title">Journal</Box>
          <Stack className="journal-card">
            {journal.length !== 0 ? (
              journal.map((ele) => {
                const imagePath = `${serverApi}/${ele.journalImage}`;
                return (
                  <Stack
                    className="journal-box"
                    sx={{ cursor: "pointer" }}
                    key={ele._id}
                    onClick={() => handleJournal(ele._id)}
                  >
                    <Box
                      className={"card-img"}
                      sx={{
                        backgroundImage: `url(${imagePath})`,
                      }}
                    >
                      <Stack className="comment-view">
                        <Stack className="cv" color={"white"}>
                          <MarkUnreadChatAltIcon
                            sx={{ color: "rgb(134, 212, 245)" }}
                          />
                          {ele.journalComments}
                        </Stack>
                        <Stack className="cv" color={"white"}>
                          <VisibilityIcon sx={{ color: "#FFB8CC" }} />
                          {ele.journalViews}
                        </Stack>
                      </Stack>
                    </Box>
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
        </Stack>
      </Container>
    </div>
  );
}
