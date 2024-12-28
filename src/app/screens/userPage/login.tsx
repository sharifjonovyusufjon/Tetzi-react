import { Container, Stack } from "@mui/material";

export default function Login() {
  return (
    <div className="user-page">
      <Container className="container">
        <Stack className="title-box">
          <strong>LOGIN</strong>
          <span>User / Login</span>
        </Stack>
        <Stack className="login"></Stack>
      </Container>
    </div>
  );
}
