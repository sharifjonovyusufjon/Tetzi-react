import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomePageReducer from "./screens/homePage/slice";
import reduxLogger from "redux-logger";
import ShopPageReducer from "./screens/shopPage/slice";
import UserPageReducer from "./screens/userPage/slice";
import JournalPageReducer from "./screens/journalPage/slice";
import OrdersPageReducer from "./screens/ordersPage/slice";

export const store = configureStore({
  //
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    homePage: HomePageReducer,
    shopPage: ShopPageReducer,
    userPage: UserPageReducer,
    journalPage: JournalPageReducer,
    ordersPage: OrdersPageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
