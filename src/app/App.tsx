import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/homePage";
import ShopPage from "./screens/shopPage";
import AboutPage from "./screens/aboutPage";
import ContactsPage from "./screens/contactsPage";
import JournalPage from "./screens/journalPage";
import UserPage from "./screens/userPage";
import Footer from "./components/footer";
import Header from "./components/header";

import "../css/header.css";
import "../css/footer.css";
import "../css/common.css";
import useCard from "./hooks/useCard";
import OrdersPage from "./screens/ordersPage";
import { useGlobals } from "./hooks/useGlobals";

export default function App() {
  const { authMember } = useGlobals();
  const { addToCard } = useCard();
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage addToCard={addToCard} />} />
        <Route path="/shop/*" element={<ShopPage addToCard={addToCard} />} />
        <Route path="/orders" element={authMember ? <OrdersPage /> : null} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/journal/*" element={<JournalPage />} />
        <Route path="/user/*" element={<UserPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
