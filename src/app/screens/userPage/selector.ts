import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectUserPage = (state: AppRootState) => state.userPage;

export const retrieveGetOrders = createSelector(
  selectUserPage,
  (userPage) => userPage.getOrders
);

export const retrieveGetBaskets = createSelector(
  selectUserPage,
  (userPage) => userPage.getBaskets
);
