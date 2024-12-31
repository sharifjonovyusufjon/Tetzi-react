import { createSlice } from "@reduxjs/toolkit";
import { UserPageState } from "../../../lib/types/screen";

const initialState: UserPageState = {
  getOrders: [],
  getBaskets: [],
};

const userPageSlice = createSlice({
  name: "userPage",
  initialState,
  reducers: {
    setGetOrders: (state, action) => {
      state.getOrders = action.payload;
    },
    setGetBaskets: (state, action) => {
      state.getBaskets = action.payload;
    },
  },
});

export const { setGetOrders, setGetBaskets } = userPageSlice.actions;
const UserPageReducer = userPageSlice.reducer;
export default UserPageReducer;
