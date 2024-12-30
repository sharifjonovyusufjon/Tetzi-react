import { Box, Button, Container, Stack } from "@mui/material";
import OtherShop from "../../components/header/otherShop";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import { setGetProducts } from "./slice";
import { Product, ProductInQuery } from "../../../lib/types/product";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { retrieveGetProducts } from "./selector";
import { serverApi } from "../../../lib/config";
import { useEffect, useState } from "react";
import ProductService from "../../services/ProductService";
import {
  Direction,
  ProductBrand,
  ProductCategory,
  ProductColor,
} from "../../../lib/enums/product.enum";
import { T } from "../../../lib/types/common";

const actionDispatch = (dispatch: Dispatch) => ({
  setGetProducts: (data: Product[]) => dispatch(setGetProducts(data)),
});

const getProductsRetrieve = createSelector(
  retrieveGetProducts,
  (getProducts) => ({
    getProducts,
  })
);

export default function Products() {
  const { setGetProducts } = actionDispatch(useDispatch());
  const { getProducts } = useSelector(getProductsRetrieve);
  const [productInput, setProductInput] = useState<ProductInQuery>({
    page: 1,
    limit: 6,
    direction: Direction.ASC,
    sort: "createdAt",
  });
  useEffect(() => {
    const productService = new ProductService();

    productService
      .getProducts(productInput)
      .then((data) => setGetProducts(data))
      .catch((err) => console.log("Err, getProducts", err));
  }, [productInput]);

  /* Handlers */

  const handlerDirection = (e: T) => {
    const direction = e.target.value;
    if (direction === "asc") {
      productInput.direction = Direction.ASC;
      setProductInput({ ...productInput });
    } else {
      productInput.direction = Direction.DESC;
      setProductInput({ ...productInput });
    }
  };

  const handlerBrand = (e: T) => {
    const brand = e.target.value;
    productInput.productBrand = brand;
    setProductInput({ ...productInput });
  };

  const handlerCategory = (category: ProductCategory) => {
    productInput.productCategory = category;
    setProductInput({ ...productInput });
  };

  const handlerColor = (e: T) => {
    const color = e.target.value;
    productInput.productColor = color;
    setProductInput({ ...productInput });
  };

  return (
    <div className="product-page">
      <OtherShop />
      <Container className="product-container">
        <Stack className="product-menu">
          <Stack className="menu-box">
            <Box className={"title"}>Shop by Category</Box>
            <Stack
              sx={{
                width: "100%",
                height: "340px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <div
                className="box"
                onClick={() => handlerCategory(ProductCategory.CLOTHES)}
              >
                {ProductCategory.CLOTHES}
              </div>
              <div
                className="box"
                onClick={() => handlerCategory(ProductCategory.TOYS)}
              >
                {ProductCategory.TOYS}
              </div>
              <div
                className="box"
                onClick={() => handlerCategory(ProductCategory.PAMPERS)}
              >
                {ProductCategory.PAMPERS}
              </div>
              <div
                className="box"
                onClick={() => handlerCategory(ProductCategory.CLOTHES)}
              >
                {ProductCategory.CLOTHES}
              </div>
              <div
                className="box"
                onClick={() => handlerCategory(ProductCategory.STROLLER)}
              >
                {ProductCategory.STROLLER}
              </div>
            </Stack>
          </Stack>
          <Stack className="menu-box">
            <Box className={"title"}>Shop by Color</Box>
            <Stack
              sx={{
                width: "100%",
                height: "340px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <div className="box-color" onClick={handlerColor}>
                <div className="green"></div> {ProductColor.GREEN}
              </div>
              <div className="box-color" onClick={handlerColor}>
                <div className="red"></div> {ProductColor.BROWN}
              </div>
              <div className="box-color" onClick={handlerColor}>
                <div className="orange"></div> {ProductColor.ORANGE}
              </div>
              <div className="box-color" onClick={handlerColor}>
                <div className="pink"></div> {ProductColor.BLUE}
              </div>
              <div className="box-color" onClick={handlerColor}>
                <div className="blue"></div> {ProductColor.GRAY}
              </div>
            </Stack>
          </Stack>
          <Stack className="menu-box">
            <Box className={"title"}>Shop by Brand</Box>
            <Stack
              sx={{
                width: "100%",
                height: "340px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <div className="box" onClick={handlerBrand}>
                {ProductBrand.UPPABABY}
              </div>
              <div className="box" onClick={handlerBrand}>
                {ProductBrand.ZARA}
              </div>
              <div className="box" onClick={handlerBrand}>
                {ProductBrand.TOMMEE}
              </div>
              <div className="box" onClick={handlerBrand}>
                {ProductBrand.PAMPERS}
              </div>
              <div className="box" onClick={handlerBrand}>
                {ProductBrand.MATTEL}
              </div>
            </Stack>
          </Stack>
          <Stack className="menu-box">
            <Box className={"title"}>Shop by Price</Box>
            <Stack
              sx={{
                width: "100%",
                height: "340px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <Box className="box">$0.00 - $9.90</Box>
              <Box className="box">$10.00 - $19.90</Box>
              <Box className="box">$20.00 - $29.90</Box>
              <Box className="box">$30.00 - $39.90</Box>
              <Box className="box">$40.00 - $49.90</Box>
            </Stack>
          </Stack>
        </Stack>
        <Stack className="product-box">
          <div className="product-div">
            <Stack className="search-box">
              <Stack className="search-icon">
                <Box className="icon-box1">
                  <img src="/icons/s1.png" alt="" />
                </Box>
                <Box className="icon-box2">
                  <img src="/icons/s2.png" alt="" />
                </Box>
              </Stack>
              <Stack className="search-sort">
                <Box className={"sort"}>
                  <div className="text">Sort by:</div>
                  <select className="sort-select">
                    <option value="">Featured</option>
                  </select>
                </Box>
                <Box className={"sort"}>
                  <div className="text">Show:</div>
                  <select
                    className="sort-select-num"
                    onChange={handlerDirection}
                  >
                    <option value="asc">ASC</option>
                    <option value="desc">DESC</option>
                  </select>
                </Box>
              </Stack>
            </Stack>
            <Stack className="best-card" display={"flex"} flexDirection={"row"}>
              {getProducts.length !== 0 ? (
                getProducts.map((ele, index) => {
                  const imagePath = `${serverApi}/${ele.productImages[0]}`;
                  return (
                    <Stack className="card-box" key={index}>
                      <Box
                        className={"card-img"}
                        sx={{
                          backgroundImage: `url(${imagePath})`,
                        }}
                      >
                        {ele.productColor === "RED" ? (
                          <Box className={"card-badge"}>Sale</Box>
                        ) : (
                          <Box className={"card-badge1"}>New</Box>
                        )}
                        <Stack className="card-button">
                          <Button className="button">Add to Card</Button>
                          <Button className="button">Add to Comment</Button>
                        </Stack>
                      </Box>
                      <Stack className={"card-text"}>
                        <Box className={"product-name"}>{ele.productName}</Box>
                        <Box className={"product-color"}>
                          {ele.productColor}
                        </Box>
                        <Box className={"product-price"}>
                          ${ele.productPrice}.00
                        </Box>
                      </Stack>
                    </Stack>
                  );
                })
              ) : (
                <Box className={"not-vaible"}>Not Avaible</Box>
              )}
            </Stack>
          </div>
          <Stack className="best-pagination">
            <Box className={"pagination"}>
              {[1, 2, 3, 4, 5].map((ele, index) => {
                const activeBacgroundColor = "rgb(255, 216, 129)";
                const activeColor = "rgb(255, 255, 255)";
                return <div className="page">{ele}</div>;
              })}
            </Box>
            <Box className={"pag-text"}>Products from 1 to 12 of 80</Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
