import OtherFooter from "../../components/footer/otherFooter";
import BestSeller from "./bestSeller";
import BrandWe from "./brandWe";
import Journal from "./journal";
import Navbar from "./navbar";
import SaleShop from "./saleShop";
import ShopCategories from "./shopCategories";
import "../../../css/home.css";
import { useEffect } from "react";

export default function HomePage() {
  // Seletor: Store => DATA
  useEffect(() => {
    // Baskend Data => DATA
    // Slice: DATA => Store
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
