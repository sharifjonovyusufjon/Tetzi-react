import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./screens/homePage";
import ShopPage from "./screens/shopPage";
import AboutPage from "./screens/aboutPage";
import ContactsPage from "./screens/contactsPage";
import JournalPage from "./screens/journalPage";
import UserPage from "./screens/userPage";

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
          <li>
            <Link to="/about">AboutPage</Link>
          </li>
          <li>
            <Link to="/contacts">ContactsPage</Link>
          </li>
          <li>
            <Link to="/journal">JournalPage</Link>
          </li>
          <li>
            <Link to="/user">UserPage</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </div>
  );
}
