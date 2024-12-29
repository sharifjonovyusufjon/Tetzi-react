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
          <Stack className="signup-input">
            <Stack className="box">
              <span className="stext">Your Personal Details</span>
              <Stack className="inputs">
                <Stack className="input">
                  <span className="text">First Name</span>
                  <input type="text" placeholder="First Name" />
                </Stack>
                <Stack className="input">
                  <span className="text">Last Name</span>
                  <input type="text" placeholder="Last Name" />
                </Stack>
              </Stack>
              <Stack className="inputs">
                <Stack className="input">
                  <span className="text">Email address</span>
                  <input type="text" placeholder="company@gmail.com" />
                </Stack>
                <Stack className="input">
                  <span className="text">Telephone</span>
                  <input type="text" placeholder="Your phone number" />
                </Stack>
              </Stack>
            </Stack>
            <Stack className="box">
              <span className="stext">New Customer</span>
              <Stack className="inputs">
                <Stack className="input">
                  <span className="text">Address 1</span>
                  <input
                    type="text"
                    placeholder="4279 2boncak Port Suite 6212"
                  />
                </Stack>
                <Stack className="input">
                  <span className="text">Address 2</span>
                  <input type="text" placeholder="----" />
                </Stack>
              </Stack>
              <Stack className="inputs">
                <Stack className="input">
                  <span className="text">City</span>
                  <input type="text" placeholder="Your city" />
                </Stack>
                <Stack className="input">
                  <span className="text">Post Code</span>
                  <input type="text" placeholder="06228" />
                </Stack>
              </Stack>
              <Stack className="inputs">
                <Stack className="input">
                  <span className="text">Country</span>
                  <select name="" id="">
                    <option value="">KOREA</option>
                  </select>
                </Stack>
                <Stack className="input">
                  <span className="text">Region/State</span>
                  <select name="" id="">
                    <option value="">SEOUL</option>
                  </select>
                </Stack>
              </Stack>
            </Stack>
            <Stack className="box">
              <span className="stext">Your Password</span>
              <Stack className="inputs">
                <Stack className="input">
                  <span className="text">Password</span>
                  <input type="text" placeholder="Password" />
                </Stack>
                <Stack className="input">
                  <span className="text">Repeat Password</span>
                  <input type="text" placeholder="Repeat password" />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
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
