import { createContext, useContext } from "react";
import { Member } from "../../lib/types/member";
import { BasketInput } from "../../lib/types/basket";

interface GlobalInterface {
  authMember: Member | null;
  setAuthMember: (member: Member | null) => void;
  addBasket: BasketInput;
  setAddBasket: (card: BasketInput) => void;
}

export const GlobalContext = createContext<GlobalInterface | undefined>(
  undefined
);

export const useGlobals = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) throw new Error("useGlobals withit Provider");
  return context;
};
