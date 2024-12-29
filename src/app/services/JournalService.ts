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
      const { text, journalCategory } = search;

      let url = `${serverApi}/journal/all?page=${page}&limit=${limit}&search`;

      const result = await axios.get(url);
      return result.data;
    } catch (err) {
      console.log("Err, getJournals", err);
      throw err;
    }
  }
}

export default JournalService;
