import { Box, Container, Stack } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <div className="footer">
      <Container className="footer-container">
        <Stack className="footer-box">
          <Stack className="box-top">
            <Stack className="top-menu">
              <Box className={"menu-title"}>MENU</Box>
              <Stack className="menu-boxes">
                <Box className={"box-text"}>Home</Box>
                <Box className={"box-text"}>Shop</Box>
                <Box className={"box-text"}>About</Box>
                <Box className={"box-text"}>Contact</Box>
                <Box className={"box-text"}>Journal</Box>
              </Stack>
            </Stack>
            <Stack className="top-help">
              <Box className={"menu-title"}>HELP</Box>
              <Stack className="menu-boxes">
                <Box className={"box-text"}>Privacy Policy</Box>
                <Box className={"box-text"}>Terms & Conditions</Box>
                <Box className={"box-text"}>Special E-shop</Box>
                <Box className={"box-text"}>Shipping</Box>
                <Box className={"box-text"}>Secure Payments</Box>
              </Stack>
            </Stack>
            <Stack className="top-call">
              <Box className={"menu-title"}>(010)8256-6727</Box>
              <Box className={"menu-title"}>company@domain.com</Box>
              <Box className={"box-text"}>
                575 Crescent Ave. Quakertown, PA 18951
              </Box>
            </Stack>
            <Box className={"top-img"}>
              <img src="../../../../img/logo.png" alt="" />
            </Box>
          </Stack>
          <Stack className="box-bot">
            <Stack className="bot-box">
              <FacebookOutlinedIcon
                sx={{ color: "#132762" }}
              ></FacebookOutlinedIcon>
              <LinkedInIcon sx={{ color: "#132762" }}></LinkedInIcon>
              <InstagramIcon sx={{ color: "#132762" }}></InstagramIcon>
            </Stack>
            <Box>
              <div className="bot-text">
                © 2025 Baby & Kids eCommerce Sketch Template by Adveits
              </div>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
