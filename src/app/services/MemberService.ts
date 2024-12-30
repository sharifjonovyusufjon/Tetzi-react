import axios from "axios";
import { serverApi } from "../../lib/config";
import {
  LoginInput,
  Member,
  MemberInput,
  UpdateMemberInput,
} from "../../lib/types/member";

class MemberSevice {
  private readonly path: string;
  constructor() {
    this.path = serverApi;
  }

  public async signup(input: MemberInput): Promise<Member | null> {
    try {
      const url = this.path + "/member/signup";
      const result = await axios.post(url, input, { withCredentials: true });
      const member: Member = result.data.member;
      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (err) {
      console.log("Err, signup", err);
      throw err;
    }
  }

  public async login(input: LoginInput): Promise<Member | null> {
    try {
      const url = this.path + "/member/login";
      const result = await axios.post(url, input, { withCredentials: true });
      const member: Member = result.data.member;
      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (err) {
      console.log("Err, login", err);
      throw err;
    }
  }

  public async logout(): Promise<boolean | undefined> {
    try {
      const url = this.path + "/member/logout";
      const result = await axios.get(url, { withCredentials: true });
      localStorage.removeItem("memberData");
      return true;
    } catch (err) {
      console.log("Err, logout", err);
    }
  }

  public async updateMember(input: UpdateMemberInput): Promise<Member | null> {
    try {
      const formData = new FormData();
      formData.append("memberFirstName", input.memberFirstName || "");
      formData.append("memberLastName", input.memberLastName || "");
      formData.append("memberEmail", input.memberEmail || "");
      formData.append("memberPhone", input.memberPhone || "");
      formData.append(
        "memberAddress",
        input.memberAddress ? JSON.stringify(input.memberAddress) : "[]"
      );
      formData.append("memberCity", input.memberCity || "");
      formData.append("memberCountry", input.memberCountry || "");
      formData.append("memberState", input.memberState || "");
      formData.append(
        "memberPostCode",
        input.memberPostCode ? String(input.memberPostCode) : "00000"
      );

      formData.append("memberImage", input.memberImage || "");
      const result = await axios(`${serverApi}/member/update`, {
        method: "POST",
        data: formData,
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const member: Member = result.data.member;
      localStorage.setItem("memberData", JSON.stringify(member));
      return member;
    } catch (err) {
      console.log("Err, updateMember", err);
      throw err;
    }
  }
}

export default MemberSevice;
