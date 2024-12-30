import { createSlice } from "@reduxjs/toolkit";
import { ShopPageState } from "../../../lib/types/screen";

const initialState: ShopPageState = {
  getProducts: [],
  chosenProduct: null,
  admin: null,
};

const shopPageSlice = createSlice({
  name: "shopPage",
  initialState,
  reducers: {
    setGetProducts: (state, action) => {
      state.getProducts = action.payload;
    },
    setChosenProduct: (state, action) => {
      state.chosenProduct = action.payload;
    },
    setAdmin: (state, action) => {
      state.admin = action.payload;
    },
  },
});

export const { setGetProducts, setChosenProduct, setAdmin } =
  shopPageSlice.actions;
const ShopPageReducer = shopPageSlice.reducer;
export default ShopPageReducer;
