import { Button, Container, Stack } from "@mui/material";
import { useState } from "react";

interface Member {
  memberFirstName: string;
  memberLastName: string;
  memberEmail: string;
  memberPhone: string;
  memberImage: string;
  memberAddress: string[];
  memberCity: string;
  memberCountry: string;
  memberState: string;
  memberPostCode: number;
}
const member: Member = {
  memberFirstName: "Harry",
  memberLastName: "Robert",
  memberEmail: "Yusufjon6727@gmail.com",
  memberPhone: "01082566727",
  memberImage: "/img/baby.jpg",
  memberAddress: ["Anyangro 346-89", "busan will 09-8"],
  memberCity: "Anyang",
  memberCountry: "KOREA",
  memberState: "SEOUL",
  memberPostCode: 50034,
};

export default function Account() {
  return (
    <div className="user-page">
      <Container className="container">
        <Stack className="title-box">
          <strong>MY ACCOUNT</strong>
          <span>User / Account</span>
        </Stack>
        <Stack className="account">
          <Stack className="menu-box">
            <Stack className="box">
              <span className="detail">Account details</span>
            </Stack>
            <Stack className="box">
              <span>Logout</span>
            </Stack>
          </Stack>
          <Stack className="deatil-box">
            <Stack className="signup-input">
              <Stack className="boxes">
                <label htmlFor="file-in" className="file">
                  Upload
                  <input type="file" id="file-in" />
                </label>
                <img src={member.memberImage} alt="" />
              </Stack>
              <Stack className="box">
                <span className="stext">Personal Details</span>
                <Stack className="inputs">
                  <Stack className="input">
                    <span className="text">First Name</span>
                    <input type="text" placeholder={member.memberFirstName} />
                  </Stack>
                  <Stack className="input">
                    <span className="text">Last Name</span>
                    <input type="text" placeholder={member.memberLastName} />
                  </Stack>
                </Stack>
                <Stack className="inputs">
                  <Stack className="input">
                    <span className="text">Email address</span>
                    <input type="text" placeholder={member.memberEmail} />
                  </Stack>
                  <Stack className="input">
                    <span className="text">Telephone</span>
                    <input type="text" placeholder={member.memberPhone} />
                  </Stack>
                </Stack>
              </Stack>
              <Stack className="box">
                <span className="stext">Address</span>
                <Stack className="inputs">
                  <Stack className="input">
                    <span className="text">Address 1</span>
                    <input type="text" placeholder={member.memberAddress[0]} />
                  </Stack>
                  <Stack className="input">
                    <span className="text">Address 2</span>
                    <input type="text" placeholder={member.memberAddress[1]} />
                  </Stack>
                </Stack>
                <Stack className="inputs">
                  <Stack className="input">
                    <span className="text">City</span>
                    <input type="text" placeholder={member.memberCity} />
                  </Stack>
                  <Stack className="input">
                    <span className="text">Post Code</span>
                    <input
                      type="text"
                      placeholder={`${member.memberPostCode}`}
                    />
                  </Stack>
                </Stack>
                <Stack className="inputs">
                  <Stack className="input">
                    <span className="text">Country</span>
                    <select name="" id="">
                      <option value="">{member.memberCountry}</option>
                    </select>
                  </Stack>
                  <Stack className="input">
                    <span className="text">Region/State</span>
                    <select name="" id="">
                      <option value="">{member.memberState}</option>
                    </select>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack className="button-box">
              <Stack className="sign-button">
                <Button className="sign">Save</Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
