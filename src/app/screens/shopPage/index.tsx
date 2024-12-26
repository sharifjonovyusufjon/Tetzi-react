import { Route, Routes } from "react-router-dom";
import ChosenProduct from "./chosenProduct";
import Products from "./products";
import "../../../css/shop.css";

export default function ShopPage() {
  return (
    <div>
      <Routes>
        <Route path="/:productId" element={<ChosenProduct />} />
        <Route path="/" element={<Products />} />
      </Routes>
    </div>
  );
}
