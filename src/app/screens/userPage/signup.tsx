import { Container, Stack } from "@mui/material";

interface SignupProps {
  handleAuth: () => void;
}
export default function Signup(props: SignupProps) {
  const { handleAuth } = props;
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
