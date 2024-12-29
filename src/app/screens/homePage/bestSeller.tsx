import { Box, Button, Container, Stack } from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import { retrieveBestSeller } from "./selector";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { serverApi } from "../../../lib/config";

const bestSellerRetrieve = createSelector(retrieveBestSeller, (bestSeller) => ({
  bestSeller,
}));

export default function BestSeller() {
  const { bestSeller } = useSelector(bestSellerRetrieve);
  console.log("bestSeller", bestSeller);
  return (
    <div className="best-seller">
      <Container className="best-container">
        <Stack className="best-boxs">
          <Box className="best-title">Our Best Sellers</Box>
          <Stack className="best-card">
            {bestSeller.length !== 0 ? (
              bestSeller.map((ele, index) => {
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
                        <Box className={"card-badge"}>{"Sale"}</Box>
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
                      <Box className={"product-color"}>{ele.productColor}</Box>
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
