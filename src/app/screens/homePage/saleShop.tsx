import { Button } from "@mui/material";
import { Box } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SaleShop() {
  const navigate = useNavigate();
  const handleShop = () => {
    navigate("/shop");
  };
  return (
    <div className="sale-shop">
      <div className="sale-shop-div">
        <div className="left">
          <div className="left-text">SALE</div>
        </div>
        <div className="right">
          <div className="right-box">
            <div className="box-title">Final Offer for Summer Items!</div>
            <div className="box-text">Now up to 70% off</div>
            <Button className="box-button" onClick={handleShop}>
              Shop
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
