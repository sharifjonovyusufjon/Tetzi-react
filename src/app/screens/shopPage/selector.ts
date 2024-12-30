import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

const selectShopPage = (state: AppRootState) => state.shopPage;

export const retrieveGetProducts = createSelector(
  selectShopPage,
  (shopPage) => shopPage.getProducts
);

export const retrieveChosenProduct = createSelector(
  selectShopPage,
  (shopPage) => shopPage.chosenProduct
);
export const retrieveAdmin = createSelector(
  selectShopPage,
  (shopPage) => shopPage.admin
);
