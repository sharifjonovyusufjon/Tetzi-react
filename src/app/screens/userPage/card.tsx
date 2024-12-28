import { Container, Stack } from "@mui/material";

export default function Card() {
  return (
    <div className="user-page">
      <Container className="container">
        <Stack className="title-box">
          <strong>CARD</strong>
          <span>User / Card</span>
        </Stack>
        <Stack className="card"></Stack>
      </Container>
    </div>
  );
}
