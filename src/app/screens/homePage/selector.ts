import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrieveBestSeller = createSelector(
  selectHomePage,
  (homePage) => homePage.bestSeller
);

export const retrieveJournal = createSelector(
  selectHomePage,
  (homePage) => homePage.journal
);
