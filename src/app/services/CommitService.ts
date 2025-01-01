import axios from "axios";
import { serverApi } from "../../lib/config";
import { CommentInput, Comment } from "../../lib/types/comment";

class CommitService {
  private readonly path: string;
  constructor() {
    this.path = serverApi;
  }

  public async createCommit(input: CommentInput): Promise<any> {
    try {
      const url = `${serverApi}/comment/create`;
      const result = await axios.post(url, input, { withCredentials: true });
      return result;
    } catch (err) {
      console.log("Err, createCommit", err);
      throw err;
    }
  }
}

export default CommitService;
