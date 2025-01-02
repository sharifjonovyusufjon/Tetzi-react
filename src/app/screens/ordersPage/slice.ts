import { createSlice } from "@reduxjs/toolkit";
import { OrdersPageState } from "../../../lib/types/screen";

const initialState: OrdersPageState = {
  pausedOrders: [],
  processOrders: [],
  finishOrders: [],
};

const ordersPageSlice = createSlice({
  name: "ordersPage",
  initialState,
  reducers: {
    setPausedOrders: (state, action) => {
      state.pausedOrders = action.payload;
    },
    setProcessOrders: (state, action) => {
      state.processOrders = action.payload;
    },
    setFinishOrders: (state, action) => {
      state.finishOrders = action.payload;
    },
  },
});

export const { setFinishOrders, setPausedOrders, setProcessOrders } =
  ordersPageSlice.actions;
const OrdersPageReducer = ordersPageSlice.reducer;
export default OrdersPageReducer;
