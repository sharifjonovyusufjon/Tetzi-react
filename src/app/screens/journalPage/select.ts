import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectJournalPage = (state: AppRootState) => state.journalPage;

export const retrieveGetJournals = createSelector(
  selectJournalPage,
  (journalPage) => journalPage.getJournals
);

export const retrieveChosenJournal = createSelector(
  selectJournalPage,
  (journalPage) => journalPage.chosenJournal
);
