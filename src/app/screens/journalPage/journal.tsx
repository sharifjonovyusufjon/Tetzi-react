import { Container } from "@mui/material";
import OtherJournal from "../../components/header/otherJournal";

export default function Journal() {
  return (
    <div className="journal-page">
      <OtherJournal />
      <Container className="container">Journal</Container>
    </div>
  );
}
