import { useState } from "react";
import Login from "./login";
import Signup from "./signup";

export default function Auth() {
  const [showAuth, setShowAuth] = useState<boolean>(true);

  const handleAuth = () => {
    setShowAuth(!showAuth);
  };
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
