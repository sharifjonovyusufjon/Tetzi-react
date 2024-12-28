import { Box, Container, Stack } from "@mui/material";
import OtherShop from "../../components/header/otherShop";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function ChosenProduct() {
  const { productId } = useParams();

  const [comments, setComments] = useState<string[]>([
    "bur yaxshi",
    "this best",
    "best jbvjw jjbu jwgfuwqb ufgwbqub be4ub jbufbe",
    "jebfjh jbfuwb ubfub bf2ubw jhbfu",
  ]);

  const [desc, setDesc] = useState<boolean>(true);
  const descToggle = () => {
    setDesc((pre) => !pre);
  };

  const descT = () => {
    if (desc === true) {
      return <span>FEATURES & DETAILS</span>;
    }
    if (desc === false) {
      return <p>{product.productDesc}</p>;
    }
  };

  interface Product {
    imagePath: string;
    productPrice: number;
    productColor: string;
    productSize: string;
    productDesc: string;
  }

  const product: Product = {
    imagePath: "/img/baby.jpg",
    productPrice: 44,
    productColor: "RED",
    productSize: "M",
    productDesc: "lorem jrgubjr jrgujqb jbugqbj bjbq bqfbubu",
  };

  const bc = () => {
    if (product.productColor === "RED") {
      return "rgb(255, 134, 134)";
    }
  };

  return (
    <div className="chosen-product-page">
      <OtherShop />
      <Container className="container">
        <Stack className="product-box">
          <img src={product.imagePath}></img>
          <Stack className="product-data">
            <Box className={"title"}>Product</Box>
            <Box className={"price"}>
              <p>${product.productPrice * 2}.00</p>
              <span>${product.productPrice}.00</span>
            </Box>
            <div className="divider"></div>
            <Box className={"color"}>
              <span className="name">COLOR:</span>
              <div style={{ background: bc() }}></div>
            </Box>
            <Box className={"size"}>
              <span className="name">SIZE:</span>
              <div>{product.productSize}</div>
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
              <button className="btn1">View Card</button>
              <button className="btn2">Add to Card</button>
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
            {comments.map((comment, index) => {
              return (
                <Box key={index} className={"comm"}>
                  <span>John Ford</span>
                  <p>{comment}</p>
                </Box>
              );
            })}
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
