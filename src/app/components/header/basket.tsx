import { Box, Button, Popover, Stack } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import React from "react";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

export default function Basket() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Basket handler
  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(e.target as HTMLElement);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={"basket-frame"}>
      <LocalMallIcon
        sx={{
          color: "#86D4F5",
          width: "36px",
          height: "36px",
          cursor: "pointer",
        }}
        onClick={handleClick}
      />

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        sx={{ marginTop: "38px" }}
      >
        <Stack className={"basket"}>
          <Stack className="basket-product">
            <Stack className="product-box">
              <Box
                sx={{ background: "rgb(216, 216, 216)" }}
                className={"product-image"}
              >
                <img src="" alt="rasm" />
              </Box>
              <Stack className="product-desc">
                <Box className={"total-text"}>Simple Winter Shoes</Box>
                <Box className={"price-text"}>$44.00</Box>
              </Stack>
              <CloseSharpIcon
                sx={{
                  color: "rgb(19, 39, 98)",
                  fontSize: 25,
                  strokeWidth: 2,
                }}
              />
            </Stack>
          </Stack>
          <Stack className="basket-buttons">
            <Stack className="basket-total">
              <Box className={"total-text"}>Subtotal:</Box>
              <Box className={"price-text"}>$44.00</Box>
            </Stack>
            <Stack className="basket-button-box">
              <Button className="view-button">View Card</Button>
              <Button className="check-button">Checkout</Button>
            </Stack>
          </Stack>
        </Stack>
      </Popover>
    </Box>
  );
}
