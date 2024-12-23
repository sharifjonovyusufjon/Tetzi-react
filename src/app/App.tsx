import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./screens/homePage";
import ShopPage from "./screens/shopPage";

export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/shop">ShopPage</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}
