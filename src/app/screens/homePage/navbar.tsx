import { Box, Button, Container, Stack } from "@mui/material";
import LooksTwoSharpIcon from "@mui/icons-material/LooksTwoSharp";
import ReplaySharpIcon from "@mui/icons-material/ReplaySharp";
import MarkEmailUnreadSharpIcon from "@mui/icons-material/MarkEmailUnreadSharp";

export default function Navbar() {
  return (
    <div className="home-navbar">
      <Container>
        <Stack className="navbar-top">
          <Stack className="navbar-menu">
            <Box className={"menu-title"}>ENJOY YOUR TIME WITH TETZI</Box>
            <Box className={"menu-text"}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </Box>
            <Button className="menu-button">Add to Card</Button>
          </Stack>
          <Box className={"navbar-img"}>
            {/* <img src="/img/baby.png" alt="rasm" /> */}
          </Box>
        </Stack>
        <Stack className="navbar-bot">
          <Stack className="bot-menu">
            <LooksTwoSharpIcon sx={{ color: "rgb(255, 216, 129)" }} />
            <div className="menu-text">Two years warranty</div>
          </Stack>
          <Stack className="bot-menu">
            <MarkEmailUnreadSharpIcon sx={{ color: "rgb(134, 212, 245)" }} />
            <div className="menu-text">Free shipping</div>
          </Stack>
          <Stack className="bot-menu">
            <ReplaySharpIcon sx={{ color: "rgb(255, 184, 204)" }} />
            <div className="menu-text">Return policy in 30 days</div>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
