import axios from "axios";
import { serverApi } from "../../lib/config";
import { Journal, JournalInQuiry } from "../../lib/types/journal";

class JournalService {
  private readonly path: string;
  constructor() {
    this.path = serverApi;
  }

  public async getJournals(input: JournalInQuiry): Promise<Journal[]> {
    try {
      const { page, limit, search } = input;

      let url = `${serverApi}/journal/all?page=${page}&limit=${limit}&search`;
      if (search) url += `=${search}`;

      const result = await axios.get(url);
      return result.data;
    } catch (err) {
      console.log("Err, getJournals", err);
      throw err;
    }
  }

  public async getJournal(input: string): Promise<Journal> {
    try {
      let url = `${serverApi}/journal/${input}`;
      console.log("in", input);

      const result = await axios.get(url, { withCredentials: true });
      return result.data.product;
    } catch (err) {
      console.log("Err, getJournal", err);
      throw err;
    }
  }
}

export default JournalService;
