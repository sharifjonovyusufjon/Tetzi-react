import { Box, Button, Container, Stack } from "@mui/material";
import OtherJournal from "../../components/header/otherJournal";

export default function ChosenJournal() {
  const t = [7];
  return (
    <div className="journal-chosen-page">
      <OtherJournal />
      <Container className="container">
        <Stack className="menu-box">
          <img src="/img/baby.jpg" alt="" />
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          <p>
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided. But in certain circumstances
            and owing to the claims of duty or the obligations of business it
            will frequently occur that pleasures have to be repudiated and
            annoyances accepted. The wise man therefore always holds in these
            matters to this principle of selection: he rejects pleasures to
            secure other greater pleasures, or else he endures pains to avoid
            worse pains.
          </p>
        </Stack>
        <Stack className="comment-box">
          <Stack className="rewiev-box">
            <Box className={"title"}>Comments</Box>
            <Stack className="boxes">
              {t ? (
                [1, 2].map((comment: any) => {
                  return (
                    <Box key={1} className={"comm"}>
                      <span>{"name"}</span>
                      <p>{"matn"}</p>
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
                // value={newCommit}
                placeholder={"Your product discussion ...?"}
                // onChange={handleNewCommit}
              />
              <Button>Post</Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
