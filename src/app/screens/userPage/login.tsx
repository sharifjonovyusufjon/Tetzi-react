import { Button, Container, Stack } from "@mui/material";
import { useState } from "react";
import { T } from "../../../lib/types/common";
import { Messages } from "../../../lib/config";
import MemberSevice from "../../services/MemberService";
import { LoginInput, Member } from "../../../lib/types/member";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { useGlobals } from "../../hooks/useGlobals";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  handleAuth: () => void;
}

export default function Login(props: LoginProps) {
  const { handleAuth } = props;
  const { setAuthMember } = useGlobals();
  const navigate = useNavigate();

  const [memberEmail, setMemberEmail] = useState<string>("");
  const [memberPassword, setMemberPassword] = useState<string>("");

  const handleEmail = (e: T) => {
    setMemberEmail(e.target.value);
  };

  const handlePassword = (e: T) => {
    setMemberPassword(e.target.value);
  };

  const handleKeyDown = (e: T) => {
    if (e.key === "Enter") {
      handleLoginRequest().then();
    }
  };

  const handleLoginRequest = async () => {
    try {
      const isFullfill = memberEmail !== "" && memberPassword !== "";
      if (!isFullfill) throw new Error(Messages.error3);

      const loginInput: LoginInput = {
        memberEmail: memberEmail,
        memberPassword: memberPassword,
      };
      const memberService = new MemberSevice();
      const result: Member | null = await memberService.login(loginInput);

      setAuthMember(result);
      await sweetTopSmallSuccessAlert("Log in successfully!", 700);
      navigate("/user");
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };
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
                <input
                  type="email"
                  placeholder="company@gmail.com"
                  onChange={handleEmail}
                />
              </Stack>
              <Stack className="input">
                <span>Password</span>
                <input
                  type="password"
                  placeholder=". . . . . . . . . . ."
                  onChange={handlePassword}
                  onKeyDown={handleKeyDown}
                />
              </Stack>
            </Stack>
            <Button className="btnl" onClick={handleLoginRequest}>
              Log in
            </Button>
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
