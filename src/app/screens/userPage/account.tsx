import { Button, Container, Stack } from "@mui/material";
import { useState } from "react";
import { useGlobals } from "../../hooks/useGlobals";
import { Messages, serverApi } from "../../../lib/config";
import MemberSevice from "../../services/MemberService";
import {
  sweetErrorHandling,
  sweetErrorHandlingImg,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import { UpdateMemberInput } from "../../../lib/types/member";
import { MemberCountry, MemberState } from "../../../lib/enums/member.enum";
import { T } from "../../../lib/types/common";

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
  const { authMember, setAuthMember } = useGlobals();
  const [image, setImage] = useState<string>(
    authMember?.memberImage
      ? `${serverApi}/${authMember.memberImage}`
      : "/img/baby.jpg"
  );

  const [memberUpdateInput, setMemberUpdateInput] = useState<UpdateMemberInput>(
    {
      memberFirstName: authMember?.memberFirstName,
      memberLastName: authMember?.memberLastName,
      memberEmail: authMember?.memberEmail,
      memberPhone: authMember?.memberPhone,
      memberImage: authMember?.memberImage,
      memberAddress: authMember?.memberAddress,
      memberCity: authMember?.memberCity,
      memberCountry: authMember?.memberCountry ?? MemberCountry.KOREA,
      memberState: authMember?.memberState as MemberState,
      memberPostCode: authMember?.memberPostCode,
    }
  );

  const handleFirstName = (e: T) => {
    memberUpdateInput.memberFirstName = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };

  const handleLastName = (e: T) => {
    memberUpdateInput.memberLastName = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };

  const handleEmail = (e: T) => {
    memberUpdateInput.memberEmail = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };

  const handlePhone = (e: T) => {
    memberUpdateInput.memberPhone = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };

  const handleAddress = (e: T, index: number) => {
    const updatedAddress = [...(memberUpdateInput.memberAddress || [])];
    updatedAddress[index] = e.target.value;
    setMemberUpdateInput({
      ...memberUpdateInput,
      memberAddress: updatedAddress,
    });
  };

  const handleCity = (e: T) => {
    memberUpdateInput.memberCity = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };

  const handlePostCode = (e: T) => {
    memberUpdateInput.memberPostCode = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };

  const handleCounrty = (e: T) => {
    memberUpdateInput.memberCountry = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };

  const handleState = (e: T) => {
    memberUpdateInput.memberState = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };

  const handleSubmitUpdate = async () => {
    try {
      if (!authMember) throw new Error(Messages.error2);
      if (
        memberUpdateInput.memberFirstName === "" ||
        memberUpdateInput.memberLastName === "" ||
        memberUpdateInput.memberEmail === "" ||
        memberUpdateInput.memberPhone === "" ||
        memberUpdateInput.memberAddress?.length === 0 ||
        memberUpdateInput.memberCity === "" ||
        memberUpdateInput.memberCountry === undefined ||
        "" ||
        memberUpdateInput.memberState === undefined ||
        "" ||
        String(memberUpdateInput.memberPostCode).split("").length !== 5
      ) {
        throw new Error(Messages.error3);
      }
      const memberService = new MemberSevice();
      const result = await memberService.updateMember(memberUpdateInput);
      setAuthMember(result);
      await sweetTopSmallSuccessAlert("Modified successfully!", 700);
    } catch (err) {
      console.log(err);
      sweetErrorHandling(Messages.error1).then();
    }
  };

  const handleLogoutRequest = async () => {
    try {
      const memberService = new MemberSevice();
      const result = await memberService.logout();
      await sweetTopSmallSuccessAlert("success", 700);
      setAuthMember(null);
    } catch (err) {
      console.log(err);
      sweetErrorHandling(Messages.error1);
    }
  };

  const handleImgViewer = (e: T) => {
    const file = e.target.files[0];
    const fileType = file.type;
    const validateImageTypes = ["image/jpg", "image/png", "image/jpeg"];
    if (!validateImageTypes.includes(fileType)) {
      console.log(Messages.error5);
      sweetErrorHandlingImg(Messages.error5).then();
    } else {
      if (file) {
        memberUpdateInput.memberImage = file;
        setMemberUpdateInput({ ...memberUpdateInput });
        setImage(URL.createObjectURL(file));
      }
    }
  };
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
              <span onClick={handleLogoutRequest}>Logout</span>
            </Stack>
          </Stack>
          <Stack className="deatil-box">
            <Stack className="signup-input">
              <Stack className="boxes">
                <label
                  htmlFor="file-in"
                  className="file"
                  onChange={handleImgViewer}
                >
                  Upload
                  <input type="file" id="file-in" />
                </label>
                <img src={image} alt="" />
              </Stack>
              <Stack className="box">
                <span className="stext">Personal Details</span>
                <Stack className="inputs">
                  <Stack className="input">
                    <span className="text">First Name</span>
                    <input
                      type="text"
                      value={memberUpdateInput.memberFirstName}
                      placeholder={authMember?.memberFirstName}
                      onChange={handleFirstName}
                    />
                  </Stack>
                  <Stack className="input">
                    <span className="text">Last Name</span>
                    <input
                      type="text"
                      value={memberUpdateInput.memberLastName}
                      placeholder={authMember?.memberLastName}
                      onChange={handleLastName}
                    />
                  </Stack>
                </Stack>
                <Stack className="inputs">
                  <Stack className="input">
                    <span className="text">Email address</span>
                    <input
                      type="text"
                      placeholder={authMember?.memberEmail}
                      value={memberUpdateInput.memberEmail}
                      onChange={handleEmail}
                    />
                  </Stack>
                  <Stack className="input">
                    <span className="text">Telephone</span>
                    <input
                      type="text"
                      placeholder={authMember?.memberPhone}
                      value={memberUpdateInput.memberPhone}
                      onChange={handlePhone}
                    />
                  </Stack>
                </Stack>
              </Stack>
              <Stack className="box">
                <span className="stext">Address</span>
                <Stack className="inputs">
                  <Stack className="input">
                    <span className="text">Address 1</span>
                    <input
                      type="text"
                      value={memberUpdateInput.memberAddress?.[0] ?? ""}
                      placeholder={authMember?.memberAddress[0]}
                      onChange={(e) => handleAddress(e, 0)}
                    />
                  </Stack>
                  <Stack className="input">
                    <span className="text">Address 2</span>
                    <input
                      type="text"
                      value={memberUpdateInput.memberAddress?.[1] ?? ""}
                      placeholder={authMember?.memberAddress[1]}
                      onChange={(e) => handleAddress(e, 1)}
                    />
                  </Stack>
                </Stack>
                <Stack className="inputs">
                  <Stack className="input">
                    <span className="text">City</span>
                    <input
                      type="text"
                      placeholder={authMember?.memberCity}
                      value={memberUpdateInput.memberCity}
                      onChange={handleCity}
                    />
                  </Stack>
                  <Stack className="input">
                    <span className="text">Post Code</span>
                    <input
                      type="text"
                      value={memberUpdateInput.memberPostCode}
                      placeholder={`${authMember?.memberPostCode}`}
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
                      value={memberUpdateInput.memberCountry}
                      onChange={handleCounrty}
                    >
                      <option value={memberUpdateInput.memberCountry}>
                        {authMember?.memberCountry}
                      </option>
                    </select>
                  </Stack>
                  <Stack className="input">
                    <span className="text">Region/State</span>
                    <select name="" id="" onChange={handleState}>
                      <option value={memberUpdateInput.memberState}>
                        {authMember?.memberState}
                      </option>
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
            </Stack>
            <Stack className="button-box">
              <Stack className="sign-button">
                <Button className="sign" onClick={handleSubmitUpdate}>
                  Save
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
