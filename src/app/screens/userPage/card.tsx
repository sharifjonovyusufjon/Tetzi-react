import { Button, Container, Stack } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export default function Card() {
  const productItem = [1, 2];
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
              {productItem.map((item) => {
                return (
                  <Stack className="item">
                    <Stack className="iproduct">
                      <Button className="ibtn">
                        <ClearIcon sx={{ width: "10px", height: "10px" }} />
                      </Button>
                      <img
                        src="/img/baby.jpg"
                        alt=""
                        width={"100px"}
                        height={"100px"}
                      />
                      <span className="itext">Product name</span>
                    </Stack>
                    <Stack className="iprice">
                      <span className="ptext">$44.00</span>
                    </Stack>
                    <Stack className="iquantity">
                      <Stack className="quan">
                        <Button className="quan-button">+</Button>
                        <span className="quan-text">1</span>
                        <Button className="quan-button">-</Button>
                      </Stack>
                    </Stack>
                    <Stack className="itotal">
                      <span className="ptext">$44.00</span>
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
              <p className="pp">389.99 $</p>
            </Stack>
            <Button className="total-button">Proceed to Checkout</Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
