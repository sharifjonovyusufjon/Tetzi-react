import { Button, Container, Stack } from "@mui/material";
import { useState } from "react";
import { T } from "../../../lib/types/common";
import { Messages } from "../../../lib/config";
import { MemberInput } from "../../../lib/types/member";
import { MemberCountry, MemberState } from "../../../lib/enums/member.enum";
import MemberSevice from "../../services/MemberService";

interface SignupProps {
  handleAuth: () => void;
}
export default function Signup(props: SignupProps) {
  const { handleAuth } = props;

  const [memberFirstName, setMemberFirstName] = useState<string>("");
  const [memberLastName, setMemberLastName] = useState<string>("");
  const [memberEmail, setMemberEmail] = useState<string>("");
  const [memberPhone, setMemberPhone] = useState<string>("");
  const [memberPassword, setMemberPassword] = useState<string>("");
  const [repaidPassword, setRepaidPassword] = useState<string>("");
  const [memberAddress, setMemberAddress] = useState<string[]>([]);
  const [memberCity, setMemberCity] = useState<string>("");
  const [memberPostCode, setMemberPostCode] = useState<number>(0);
  const [memberCountry, setMemberCountry] = useState<string>("KOREA");
  const [memberState, setMemberState] = useState<string>("");

  const handleFirstName = (e: T) => {
    setMemberFirstName(e.target.value);
  };

  const handleLastName = (e: T) => {
    setMemberLastName(e.target.value);
  };

  const handleEmail = (e: T) => {
    setMemberEmail(e.target.value);
  };

  const handlePhone = (e: T) => {
    setMemberPhone(e.target.value);
  };

  const handlePassword = (e: T) => {
    setMemberPassword(e.target.value);
  };

  const handleRepaid = (e: T) => {
    setRepaidPassword(e.target.value);
  };

  const handleAddress = (e: T) => {
    const newAddress = e.target.value;
    setMemberAddress((prevAddress) => [...prevAddress, newAddress]);
  };

  const handleCity = (e: T) => {
    setMemberCity(e.target.value);
  };

  const handlePostCode = (e: T) => {
    setMemberPostCode(e.target.value);
  };

  const handleCounrty = (e: T) => {
    setMemberCountry(e.target.value);
  };

  const handleMemberState = (e: T) => {
    setMemberState(e.target.value);
  };

  const handleSignupRequest = async () => {
    try {
      console.log("state", memberState);
      const isFulfill =
        memberFirstName !== "" &&
        memberLastName !== "" &&
        memberEmail !== "" &&
        memberAddress.length !== 0 &&
        memberPhone !== "" &&
        memberCity !== "" &&
        memberPassword !== "" &&
        memberCountry !== "" &&
        memberPostCode !== 0 &&
        repaidPassword !== "" &&
        memberState !== "";

      console.log(
        memberFirstName,
        memberLastName,
        memberEmail,
        memberAddress,
        memberPhone,
        memberCity,
        memberPassword,
        memberCountry,
        memberPostCode,
        repaidPassword,
        memberState
      );
      if (!isFulfill) throw new Error(Messages.error3);
      if (memberPassword !== repaidPassword) throw new Error(Messages.error6);

      const signupInput: MemberInput = {
        memberFirstName: memberFirstName,
        memberLastName: memberLastName,
        memberEmail: memberEmail,
        memberPhone: memberPhone,
        memberPassword: memberPassword,
        memberAddress: memberAddress,
        memberCity: memberCity,
        memberCountry: MemberCountry.KOREA,
        memberState: memberState,
        memberPostCode: memberPostCode,
      };

      const memberService = new MemberSevice();
      const result = await memberService.signup(signupInput);
      console.log("result", result);
    } catch (err) {
      console.log(err);
    }
  };

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
                  <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleFirstName}
                  />
                </Stack>
                <Stack className="input">
                  <span className="text">Last Name</span>
                  <input
                    type="text"
                    placeholder="Last Name"
                    onChange={handleLastName}
                  />
                </Stack>
              </Stack>
              <Stack className="inputs">
                <Stack className="input">
                  <span className="text">Email address</span>
                  <input
                    type="text"
                    placeholder="company@gmail.com"
                    onChange={handleEmail}
                  />
                </Stack>
                <Stack className="input">
                  <span className="text">Telephone</span>
                  <input
                    type="text"
                    placeholder="Your phone number"
                    onChange={handlePhone}
                  />
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
                    onChange={handleAddress}
                  />
                </Stack>
                <Stack className="input">
                  <span className="text">Address 2</span>
                  <input
                    type="text"
                    placeholder="----"
                    onChange={handleAddress}
                  />
                </Stack>
              </Stack>
              <Stack className="inputs">
                <Stack className="input">
                  <span className="text">City</span>
                  <input
                    type="text"
                    placeholder="Your city"
                    onChange={handleCity}
                  />
                </Stack>
                <Stack className="input">
                  <span className="text">Post Code</span>
                  <input
                    type="text"
                    placeholder="06228"
                    onChange={handlePostCode}
                  />
                </Stack>
              </Stack>
              <Stack className="inputs">
                <Stack className="input">
                  <span className="text">Country</span>
                  <select
                    name=""
                    id=""
                    value={"KOREA"}
                    onChange={handleCounrty}
                  >
                    <option value="">KOREA</option>
                  </select>
                </Stack>
                <Stack className="input">
                  <span className="text">Region/State</span>
                  <select name="" id="" onChange={handleMemberState}>
                    <option value="SEOUL">SEOUL</option>
                    <option value="BUSAN">BUSAN</option>
                    <option value="DAEGU">DAEGU</option>
                    <option value="INCHEON">INCHEON</option>
                    <option value="GWANGJU">GWANGJU</option>
                    <option value="DAEJON">DAEJON</option>
                    <option value="ULSAN">ULSAN</option>
                    <option value="SEJONG">SEJONG</option>
                  </select>
                </Stack>
              </Stack>
            </Stack>
            <Stack className="box">
              <span className="stext">Your Password</span>
              <Stack className="inputs">
                <Stack className="input">
                  <span className="text">Password</span>
                  <input
                    type="text"
                    placeholder="Password"
                    onChange={handlePassword}
                  />
                </Stack>
                <Stack className="input">
                  <span className="text">Repeat Password</span>
                  <input
                    type="text"
                    placeholder="Repeat password"
                    onChange={handleRepaid}
                  />
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
              <Button className="sign" onClick={handleSignupRequest}>
                Sign up
              </Button>
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
