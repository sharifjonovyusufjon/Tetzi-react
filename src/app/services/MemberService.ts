import axios from "axios";
import { serverApi } from "../../lib/config";
import { LoginInput, Member, MemberInput } from "../../lib/types/member";

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
}

export default MemberSevice;
