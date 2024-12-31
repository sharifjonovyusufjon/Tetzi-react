import { Box, Button, Container, Stack } from "@mui/material";
import OtherShop from "../../components/header/otherShop";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { setChosenProduct } from "./slice";
import { Product } from "../../../lib/types/product";
import { Dispatch } from "@reduxjs/toolkit";
import { retrieveChosenProduct } from "./selector";
import { createSelector } from "reselect";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { serverApi } from "../../../lib/config";
import ProductService from "../../services/ProductService";
import { BasketInput } from "../../../lib/types/basket";
import { useGlobals } from "../../hooks/useGlobals";

const actionDispatch = (dispatch: Dispatch) => ({
  setChosenProduct: (data: Product) => dispatch(setChosenProduct(data)),
});

const chosenProductRetrieve = createSelector(
  retrieveChosenProduct,
  (chosenProduct) => ({
    chosenProduct,
  })
);

interface ChosenProductProps {
  addToCard: () => void;
}
export default function ChosenProduct(props: ChosenProductProps) {
  const { addToCard } = props;
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addBasket, setAddBasket } = useGlobals();
  const { setChosenProduct } = actionDispatch(useDispatch());
  const { chosenProduct } = useSelector(chosenProductRetrieve);

  const [desc, setDesc] = useState<boolean>(true);
  const descToggle = () => {
    setDesc((pre) => !pre);
  };

  const descT = () => {
    if (desc === true) {
      return <span>FEATURES & DETAILS</span>;
    }
    if (desc === false) {
      return <p>{chosenProduct?.productDesc}</p>;
    }
  };

  const bc = () => {
    if (chosenProduct?.productColor === "RED") {
      return "rgb(255, 134, 134)";
    }
    if (chosenProduct?.productColor === "BLUE") {
      return "BLUE";
    }
    if (chosenProduct?.productColor === "GREEN") {
      return "GREEN";
    }
    if (chosenProduct?.productColor === "YELLOW") {
      return "YELLOW";
    }
    if (chosenProduct?.productColor === "BLACK") {
      return "BLACK";
    }
    if (chosenProduct?.productColor === "WHITE") {
      return "WHITE";
    }
    if (chosenProduct?.productColor === "GRAY") {
      return "GRAY";
    }
    if (chosenProduct?.productColor === "BROWN") {
      return "BROWN";
    }
    if (chosenProduct?.productColor === "PINK") {
      return "PINK";
    }
    if (chosenProduct?.productColor === "ORANGE") {
      return "ORANGE";
    }
  };

  const handleAddCard = async (input: BasketInput) => {
    setAddBasket({ ...input });
    addToCard();
    console.log("add", addBasket);
  };

  const handleViewCard = () => {
    navigate("/user/card");
  };

  useEffect(() => {
    const productService = new ProductService();
    const id = String(productId);
    productService
      .getProduct(id)
      .then((data) => setChosenProduct(data))
      .catch((err) => console.log(err));
  }, []);
  if (!chosenProduct) return null;
  return (
    <div className="chosen-product-page">
      <OtherShop />
      <Container className="container">
        <Stack className="product-box">
          <img src={`${serverApi}/${chosenProduct?.productImages[0]}`}></img>
          <Stack className="product-data">
            <Box className={"title"}>Product</Box>
            <Box className={"price"}>
              <p>
                $
                {chosenProduct?.productPrice
                  ? chosenProduct?.productPrice
                  : 0 * 2}
                .00
              </p>
              <span>${chosenProduct?.productPrice}.00</span>
            </Box>
            <div className="divider"></div>
            <Box className={"color"}>
              <span className="name">COLOR:</span>
              <div style={{ background: bc() }}></div>
            </Box>
            <Box className={"size"}>
              <span className="name">SIZE:</span>
              <div>{chosenProduct?.productSize}</div>
            </Box>
            <Box className={"quantity"}>
              <span className="name">QUANTITY:</span>
              <div>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </Box>
            <div className="divider"></div>
            <Box className={"button-box"}>
              <Button className="btn1" onClick={handleViewCard}>
                View Card
              </Button>
              <Button
                className="btn2"
                onClick={() =>
                  handleAddCard({
                    productId: chosenProduct._id,
                    basketQuantity: 1,
                  })
                }
              >
                Add to Card
              </Button>
            </Box>
            <div className="divider"></div>
            <Box className={"desc"}>
              {descT()}
              <div onClick={descToggle}>+</div>
            </Box>
            <div className="divider"></div>
          </Stack>
        </Stack>
        <Stack className="rewiev-box">
          <Box className={"title"}>Comments</Box>
          <Stack className="boxes">
            {chosenProduct?.productData ? (
              chosenProduct?.productData.map((comment, index) => {
                return (
                  <Box key={index} className={"comm"}>
                    <span>John Ford</span>
                    <p>Commnet Text</p>
                  </Box>
                );
              })
            ) : (
              <Box className={"comm"}>
                <span>Tetzi</span>
                <p>No Commet</p>
              </Box>
            )}
          </Stack>
          <Stack className="review">
            <span>Your commet</span>
            <input type="text" placeholder="Your product discussion ...?" />
            <button>Post</button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
