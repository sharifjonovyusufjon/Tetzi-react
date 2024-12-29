import OtherFooter from "../../components/footer/otherFooter";
import BestSeller from "./bestSeller";
import BrandWe from "./brandWe";
import Navbar from "./navbar";
import SaleShop from "./saleShop";
import ShopCategories from "./shopCategories";
import "../../../css/home.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setBestSeller, setJournal } from "./slice";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import JournalService from "../../services/JournalService";
import { Journal } from "../../../lib/types/journal";
import Journals from "./journal";

const actionDispatch = (dispatch: Dispatch) => ({
  setBestSeller: (data: Product[]) => dispatch(setBestSeller(data)),
  setJournal: (data: Journal[]) => dispatch(setJournal(data)),
});

export default function HomePage() {
  const { setBestSeller, setJournal } = actionDispatch(useDispatch());

  useEffect(() => {
    const productService = new ProductService();
    const journalService = new JournalService();
    productService
      .getBestSeller({ page: 1, limit: 4 })
      .then((data) => {
        setBestSeller(data);
      })
      .catch((err) => console.log("Err, getBestSeller", err));

    journalService
      .getJournals({ page: 1, limit: 4, search: {} })
      .then((data) => {
        setJournal(data);
      })
      .catch((err) => console.log("Err, getJournals", err));
  }, []);

  return (
    <div className={"homepage"}>
      <Navbar />
      <ShopCategories />
      <BestSeller />
      <SaleShop />
      <BrandWe />
      <Journals />
      <OtherFooter />
    </div>
  );
}
