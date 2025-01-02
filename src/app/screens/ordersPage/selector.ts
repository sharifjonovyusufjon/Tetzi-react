import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectOrdersPage = (state: AppRootState) => state.ordersPage;

export const retrievePausedOrders = createSelector(
  selectOrdersPage,
  (ordersPage) => ordersPage.pausedOrders
);

export const retrieveProcessOrders = createSelector(
  selectOrdersPage,
  (ordersPage) => ordersPage.processOrders
);

export const retrieveFinishOrders = createSelector(
  selectOrdersPage,
  (ordersPage) => ordersPage.finishOrders
);
