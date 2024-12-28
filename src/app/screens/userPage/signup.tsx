import { Container, Stack } from "@mui/material";

export default function Signup() {
  return (
    <div className="user-page">
      <Container className="container">
        <Stack className="title-box">
          <strong>SIGNUP</strong>
          <span>User / Signup</span>
        </Stack>
        <Stack className="signup"></Stack>
      </Container>
    </div>
  );
}
