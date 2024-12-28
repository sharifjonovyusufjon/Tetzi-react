import { Container, Stack } from "@mui/material";

export default function Checkout() {
  return (
    <div className="user-page">
      <Container className="container">
        <Stack className="title-box">
          <strong>CHECKOUT</strong>
          <span>User / Checkout</span>
        </Stack>
        <Stack className="checkout"></Stack>
      </Container>
    </div>
  );
}
