import { useState } from "react";
import Login from "./login";
import Signup from "./signup";
import { useGlobals } from "../../hooks/useGlobals";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [showAuth, setShowAuth] = useState<boolean>(true);
  const { authMember } = useGlobals();

  const handleAuth = () => {
    setShowAuth(!showAuth);
  };

  if (authMember) return null;
  return (
    <div>
      {showAuth ? (
        <Login handleAuth={handleAuth} />
      ) : (
        <Signup handleAuth={handleAuth} />
      )}
      ;
    </div>
  );
}
