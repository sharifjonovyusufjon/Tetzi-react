import { Container } from "@mui/material";
import OtherJournal from "../../components/header/otherJournal";

export default function ChosenJournal() {
  return (
    <div className="journal-chosen-page">
      <OtherJournal />
      <Container className="container">Chosen Journal</Container>
    </div>
  );
}
