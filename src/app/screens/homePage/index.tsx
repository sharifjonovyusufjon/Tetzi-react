import OtherFooter from "../../components/footer/otherFooter";
import BestSeller from "./bestSeller";
import BrandWe from "./brandWe";
import Journal from "./journal";
import Navbar from "./navbar";
import SaleShop from "./saleShop";
import ShopCategories from "./shopCategories";
import "../../../css/home.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setBestSeller, setJournal } from "./slice";
import { Product } from "../../../lib/types/product";

const actionDispatch = (dispatch: Dispatch) => ({
  setBestSeller: (data: Product[]) => dispatch(setBestSeller(data)),
  setJournal: (data: Product[]) => dispatch(setJournal(data)),
});

export default function HomePage() {
  const { setBestSeller, setJournal } = actionDispatch(useDispatch());

  useEffect(() => {
    // Baskend Data => DATA
    // Slice: DATA => Store
    // setBestSeller();
  }, []);

  return (
    <div className={"homepage"}>
      <Navbar />
      <ShopCategories />
      <BestSeller />
      <SaleShop />
      <BrandWe />
      <Journal />
      <OtherFooter />
    </div>
  );
}
