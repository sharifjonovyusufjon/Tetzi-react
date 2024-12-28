import { Button, Container, Stack } from "@mui/material";

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
        <Stack className="signup">
          <span className="sn">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </span>
          <Stack className="signup-input"></Stack>
          <Stack className="button-box">
            <Stack className="sign-button">
              <div className="duvs">
                <input type="checkbox" />
                <span>I have read and agree to the Privacy Policy</span>
              </div>
              <Button className="sign">Sign up</Button>
            </Stack>
            <Stack className="continue">
              <span>You have to created account</span>
              <Button onClick={handleAuth} className="conn">
                Continue
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
