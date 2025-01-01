import { createSlice } from "@reduxjs/toolkit";
import { JournalPageState } from "../../../lib/types/screen";

const initialState: JournalPageState = {
  getJournals: [],
  chosenJournal: null,
};

const journalPageSlice = createSlice({
  name: "journalPage",
  initialState,
  reducers: {
    setGetJournals: (state, action) => {
      state.getJournals = action.payload;
    },
    setChosenJournal: (state, action) => {
      state.chosenJournal = action.payload;
    },
  },
});

export const { setChosenJournal, setGetJournals } = journalPageSlice.actions;
const JournalPageReducer = journalPageSlice.reducer;
export default JournalPageReducer;
