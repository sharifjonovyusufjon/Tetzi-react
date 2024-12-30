import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomePageReducer from "./screens/homePage/slice";
import reduxLogger from "redux-logger";
import ShopPageReducer from "./screens/shopPage/slice";

export const store = configureStore({
  //
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reduxLogger),
  reducer: {
    homePage: HomePageReducer,
    shopPage: ShopPageReducer,
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
