import { Box, Container, Stack } from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";

export default function ShopCategories() {
  const shopCategories = [
    {
      productCategory: "CAR SEAT",
      productImage: "/img/baby.jpg",
    },
    {
      productCategory: "STROLLER",
      productImage: "/img/baby.jpg",
    },
    {
      productCategory: "CLOTHES",
      productImage: "/img/baby.jpg",
    },
    {
      productCategory: "SHOES",
      productImage: "/img/baby.jpg",
    },
  ];

  return (
    <div className="shop-categories">
      <Container className="shop-categories-container">
        <Box className={"shop-categories-title"}>Shop by Categories</Box>
        <Stack className="shop-categories-menu">
          {shopCategories.map((ele, index) => {
            return (
              <Stack className="shop-box" key={index}>
                <Box className={"shop-image-box"}>
                  <img className="img" src={ele.productImage} alt="" />
                </Box>
                <Box className={"text"}>{ele.productCategory}</Box>
              </Stack>
            );
          })}
        </Stack>
        <Stack className="shop-pagination">
          <Box className={"pagination"}>
            <FirstPageIcon sx={{ color: "rgb(255, 255, 255)" }} />
          </Box>
          <Box className={"pagination"}>
            <LastPageIcon sx={{ color: "rgb(255, 255, 255)" }} />
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
