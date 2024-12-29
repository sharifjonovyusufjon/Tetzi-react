import { Box, Button, Container, Stack } from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import { retrieveBestSeller } from "./selector";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";

const bestSellerRetrieve = createSelector(retrieveBestSeller, (bestSeller) => ({
  bestSeller,
}));

export default function BestSeller() {
  interface BestSellerProduct {
    id: number;
    name: string;
    color: string;
    price: number;
    image: string;
    badge?: "Sale" | "new";
  }

  const bestSellers: BestSellerProduct[] = [
    {
      id: 1,
      name: "Baby Crew Car Seat",
      color: "Grey",
      price: 44.0,
      image: "/img/baby.jpg",
      badge: "Sale",
    },
    {
      id: 2,
      name: "Woopy Stroller",
      color: "Red",
      price: 44.0,
      image: "/img/baby.jpg",
    },
    {
      id: 3,
      name: "Black Baby Jumper",
      color: "Black",
      price: 44.0,
      image: "/img/baby.jpg",
      badge: "new",
    },
    {
      id: 4,
      name: "Simple Winter Shoes",
      color: "Blue",
      price: 44.0,
      image: "/img/baby.jpg",
    },
  ];
  // Seletor: Store => DATA
  const { bestSeller } = useSelector(bestSellerRetrieve);
  console.log("bestSeller", bestSeller);
  return (
    <div className="best-seller">
      <Container className="best-container">
        <Stack className="best-boxs">
          <Box className="best-title">Our Bestsellers</Box>
          <Stack className="best-card">
            {bestSellers.length !== 0 ? (
              bestSellers.map((ele, index) => {
                return (
                  <Stack className="card-box" key={index}>
                    <Box
                      className={"card-img"}
                      sx={{
                        backgroundImage: `url(${ele.image})`,
                      }}
                    >
                      {ele.badge === "Sale" ? (
                        <Box className={"card-badge"}>{ele.badge}</Box>
                      ) : (
                        <Box className={"card-badge1"}>New</Box>
                      )}
                      <Stack className="card-button">
                        <Button className="button">Add to Card</Button>
                        <Button className="button">Add to Comment</Button>
                      </Stack>
                    </Box>
                    <Stack className={"card-text"}>
                      <Box className={"product-name"}>{ele.name}</Box>
                      <Box className={"product-color"}>{ele.color}</Box>
                      <Box className={"product-price"}>${ele.price}.00</Box>
                    </Stack>
                  </Stack>
                );
              })
            ) : (
              <Box className={"not-vaible"}>Not Avaible</Box>
            )}
          </Stack>
          <Stack className="best-pagination">
            <Box className={"pagination"}>
              <FirstPageIcon sx={{ color: "rgb(255, 255, 255)" }} />
            </Box>
            <Box className={"pagination"}>
              <LastPageIcon sx={{ color: "rgb(255, 255, 255)" }} />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
