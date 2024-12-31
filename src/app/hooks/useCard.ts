import { useEffect } from "react";
import { sweetTopSmallSuccessAlert } from "../../lib/sweetAlert";
import BasketService from "../services/BasketService";
import { useGlobals } from "./useGlobals";

const useCard = () => {
  const { addBasket } = useGlobals();
  //   useEffect(() => {
  //     const basketService = new BasketService();
  //     console.log("addBasket", addBasket);
  //     basketService
  //       .createBasket(addBasket)
  //       .then((data) => {
  //         sweetTopSmallSuccessAlert("Add successfully!", 700);
  //       })
  //       .catch((err) => console.log(err));
  //   }, [addBasket]);

  const addToCard = async () => {
    try {
      const basketService = new BasketService();
      console.log("addBasket", addBasket);
      await basketService.createBasket(addBasket);
      sweetTopSmallSuccessAlert("Add successfully!", 700);
    } catch (err) {
      console.log(err);
    }
  };

  return { addToCard };
};

export default useCard;
