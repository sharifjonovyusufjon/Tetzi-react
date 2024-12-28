import { Routes, Route, useNavigate } from "react-router-dom";
import Account from "./account";
import Card from "./card";
import Checkout from "./checkout";
import { useEffect } from "react";
import Auth from "./auth";

export default function UserPage() {
  const setAuthMember: boolean = false;
  const navigate = useNavigate();

  useEffect(() => {
    if (!setAuthMember) {
      navigate("/user/auth");
    }
  }, [setAuthMember, navigate]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Account />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/card" element={<Card />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}
