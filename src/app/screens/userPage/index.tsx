import { Routes, Route, useNavigate } from "react-router-dom";
import Account from "./account";
import Card from "./card";
import Checkout from "./checkout";
import { useEffect } from "react";
import Auth from "./auth";
import "../../../css/user.css";
import { useGlobals } from "../../hooks/useGlobals";

export default function UserPage() {
  const { authMember } = useGlobals();

  const navigate = useNavigate();

  useEffect(() => {
    if (!authMember) {
      navigate("/user/auth");
    }
  }, [authMember, navigate]);

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
