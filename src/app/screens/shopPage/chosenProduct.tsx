import { Container } from "@mui/material";
import OtherShop from "../../components/header/otherShop";
import { useParams } from "react-router-dom";

export default function ChosenProduct() {
  const { productId } = useParams();
  console.log("p", productId);
  return (
    <div>
      <OtherShop />
      <Container className="chosen-product-page">chosenProduct</Container>
    </div>
  );
}
