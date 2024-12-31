import { Box, Button, Container, Stack } from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import { retrieveBestSeller } from "./selector";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { serverApi } from "../../../lib/config";
import { useNavigate } from "react-router-dom";
import { useGlobals } from "../../hooks/useGlobals";
import { BasketInput } from "../../../lib/types/basket";
import {
  sweetErrorHandling,
  sweetErrorHandlingAuth,
} from "../../../lib/sweetAlert";

const bestSellerRetrieve = createSelector(retrieveBestSeller, (bestSeller) => ({
  bestSeller,
}));

interface BestSeller {
  addToCard: () => void;
}
export default function BestSeller(props: BestSeller) {
  const { addToCard } = props;
  const navigate = useNavigate();
  const { addBasket, setAddBasket, authMember } = useGlobals();
  const { bestSeller } = useSelector(bestSellerRetrieve);

  const handleAddCard = async (input: BasketInput) => {
    setAddBasket({ ...input });
    addToCard();
    console.log("add", addBasket);
  };

  const handleAuth = () => {
    sweetErrorHandlingAuth("Please login first!");
  };

  const chosenProduct = (id: string) => {
    navigate(`/shop/${id}`);
  };
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
                  <Stack className="card-box" key={ele._id}>
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
                        <Button
                          className="button"
                          onClick={
                            authMember
                              ? () =>
                                  handleAddCard({
                                    productId: ele._id,
                                    basketQuantity: 1,
                                  })
                              : handleAuth
                          }
                        >
                          Add to Card
                        </Button>
                        <Button
                          className="button"
                          onClick={() => chosenProduct(ele._id)}
                        >
                          Chosen to Product
                        </Button>
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
