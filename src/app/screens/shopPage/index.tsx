import { Route, Routes } from "react-router-dom";
import ChosenProduct from "./chosenProduct";
import Products from "./products";
import "../../../css/shop.css";
import { BasketInput } from "../../../lib/types/basket";

interface ShopProps {
  addToCard: () => void;
}
export default function ShopPage(props: ShopProps) {
  const { addToCard } = props;
  return (
    <div>
      <Routes>
        <Route
          path="/:productId"
          element={<ChosenProduct addToCard={addToCard} />}
        />
        <Route path="/" element={<Products addToCard={addToCard} />} />
      </Routes>
    </div>
  );
}
