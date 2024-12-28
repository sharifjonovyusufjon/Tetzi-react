import { Button, Container, Stack } from "@mui/material";

interface LoginProps {
  handleAuth: () => void;
}

export default function Login(props: LoginProps) {
  const { handleAuth } = props;
  return (
    <div className="user-page">
      <Container className="container">
        <Stack className="title-box">
          <strong>LOGIN</strong>
          <span>User / Login</span>
        </Stack>
        <Stack className="login">
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </span>
          <Stack className="login-box">
            <strong>Returning Customer</strong>
            <Stack className="login-input">
              <Stack className="input">
                <span>Email address</span>
                <input type="email" placeholder="company@gmail.com" />
              </Stack>
              <Stack className="input">
                <span>Password</span>
                <input type="password" placeholder=". . . . . . . . . . ." />
              </Stack>
            </Stack>
            <Button className="btnl">Log in</Button>
          </Stack>
          <Stack className="login-box">
            <strong>New Customer</strong>
            <Stack className="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the.
            </Stack>
            <Button onClick={handleAuth} className="btns">
              Continue
            </Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
