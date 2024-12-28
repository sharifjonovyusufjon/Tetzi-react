import { Container, Stack } from "@mui/material";

export default function Account() {
  return (
    <div className="user-page">
      <Container className="container">
        <Stack className="title-box">
          <strong>MY ACCOUNT</strong>
          <span>User / Account</span>
        </Stack>
        <Stack className="account"></Stack>
      </Container>
    </div>
  );
}
