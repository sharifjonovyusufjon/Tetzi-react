import { Button, Container, Stack } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useGlobals } from "../../hooks/useGlobals";
import { useNavigate } from "react-router-dom";
import { setGetBaskets, setGetOrders } from "./slice";
import { Order } from "../../../lib/types/order";
import { retrieveGetBaskets, retrieveGetOrders } from "./selector";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { useDispatch, useSelector } from "react-redux";
import { serverApi } from "../../../lib/config";
import {
  Basket,
  BasketInput,
  UpdateBasketInput,
} from "../../../lib/types/basket";
import { Product } from "../../../lib/types/product";
import { useEffect, useState } from "react";
import BasketService from "../../services/BasketService";
import { sweetTopSmallSuccessAlert } from "../../../lib/sweetAlert";

const actionDispatch = (dispatch: Dispatch) => ({
  setGetOrders: (data: Order[]) => dispatch(setGetOrders(data)),
  setGetBaskets: (data: Basket[]) => dispatch(setGetBaskets(data)),
});

const getOrdersRetrieve = createSelector(retrieveGetOrders, (getOrders) => ({
  getOrders,
}));

const getBasketRetrieve = createSelector(retrieveGetBaskets, (getBaskets) => ({
  getBaskets,
}));

export default function Card() {
  const { authMember } = useGlobals();
  const navigate = useNavigate();
  const { setGetOrders, setGetBaskets } = actionDispatch(useDispatch());
  const { getOrders } = useSelector(getOrdersRetrieve);
  const { getBaskets } = useSelector(getBasketRetrieve);
  const subTota = getBaskets.reduce((acc, item) => {
    return acc + item.basketTotal;
  }, 0);

  const [addBasket, setAddBasket] = useState<BasketInput>({
    productId: "",
    basketQuantity: 0,
  });
  const [removeBasket, setRemoveBasket] = useState<UpdateBasketInput>();

  useEffect(() => {
    handleBasketAdd();
    const basketService = new BasketService();
    basketService
      .getAllBasket()
      .then((data) => setGetBaskets(data))
      .catch((err) => console.log(err));
  }, [addBasket, removeBasket]);

  const handleBasketAdd = async () => {
    try {
      const basketService = new BasketService();
      const result = await basketService.createBasket(addBasket);
      await sweetTopSmallSuccessAlert("Add successfully!", 700);
    } catch (err) {
      console.log(err);
    }
  };
  const handleBasketRemove = async (removeBasket: UpdateBasketInput) => {
    try {
      setRemoveBasket({ ...removeBasket });
      const basketService = new BasketService();
      const result = await basketService.updateBasket(removeBasket);
      await sweetTopSmallSuccessAlert("Subtract successfully!", 700);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddState = (input: BasketInput) => {
    setAddBasket({ ...input });
  };

  if (!authMember) {
    navigate("/user/auth");
  }
  return (
    <div className="user-page">
      <Container className="container">
        <Stack className="title-box">
          <strong>CARD</strong>
          <span>User / Card</span>
        </Stack>
        <Stack className="card">
          <Stack className="card-item">
            <Stack className="card-title">
              <span className="title-text">Product</span>
              <span className="title-text">Price</span>
              <span className="title-text">Quantity</span>
              <span className="title-text">Total</span>
            </Stack>
            <Stack className="card-map">
              {getBaskets.map((item: Basket) => {
                const product: Product = item.productData;
                const imagePath = `${serverApi}/${product.productImages[0]}`;
                return (
                  <Stack className="item" key={item._id}>
                    <Stack className="iproduct">
                      <Button
                        className="ibtn"
                        onClick={() =>
                          handleBasketRemove({
                            _id: item._id,
                            count: item.basketQuantity,
                          })
                        }
                      >
                        <ClearIcon sx={{ width: "10px", height: "10px" }} />
                      </Button>
                      <img
                        src={imagePath}
                        alt=""
                        width={"100px"}
                        height={"100px"}
                      />
                      <span className="itext">{product.productName}</span>
                    </Stack>
                    <Stack className="iprice">
                      <span className="ptext">${product.productPrice}.00</span>
                    </Stack>
                    <Stack className="iquantity">
                      <Stack className="quan">
                        <Button
                          className="quan-button"
                          onClick={() =>
                            handleAddState({
                              productId: product._id,
                              basketQuantity: 1,
                            })
                          }
                        >
                          +
                        </Button>
                        <span className="quan-text">{item.basketQuantity}</span>
                        <Button
                          className="quan-button"
                          onClick={() =>
                            handleBasketRemove({ _id: item._id, count: 1 })
                          }
                        >
                          -
                        </Button>
                      </Stack>
                    </Stack>
                    <Stack className="itotal">
                      <span className="ptext">${item.basketTotal}.00</span>
                    </Stack>
                  </Stack>
                );
              })}
            </Stack>
          </Stack>
          <Stack className="card-total">
            <span className="total-text">Cart totals</span>
            <Stack className="total-box">
              <span className="tt">Subtotal</span>
              <p className="pp">${`${subTota}`}.00 $</p>
            </Stack>
            <Button className="total-button">Proceed to Checkout</Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
