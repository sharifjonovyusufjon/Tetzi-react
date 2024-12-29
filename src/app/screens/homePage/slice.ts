import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/types/screen";

const initialState: HomePageState = {
  bestSeller: [],
  journal: [],
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setBestSeller: (state, action) => {
      state.bestSeller = action.payload;
    },
    setJournal: (state, action) => {
      state.journal = action.payload;
    },
  },
});

export const { setBestSeller, setJournal } = homePageSlice.actions;
const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;
