import OtherFooter from "../../components/footer/otherFooter";
import BestSeller from "./bestSeller";
import BrandWe from "./brandWe";
import Journal from "./journal";
import Navbar from "./navbar";
import SaleShop from "./saleShop";
import ShopCategories from "./shopCategories";
import "../../../css/home.css";

export default function HomePage() {
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
