import { Box, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PageviewIcon from "@mui/icons-material/Pageview";

export default function Header() {
  return (
    <div className={"header"}>
      <Container className={"header-container"}>
        <Stack className="header-box">
          <div className="header-img">
            <img src="../../../../img/logo.png" alt="" />
          </div>
          <Stack className="header-menu">
            <Box>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "menu-text underline" : "menu-text"
                }
              >
                Home
              </NavLink>
            </Box>
            <Box>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? "menu-text underline" : "menu-text"
                }
              >
                Shop
              </NavLink>
            </Box>
            <Box>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive ? "menu-text underline" : "menu-text"
                }
              >
                About
              </NavLink>
            </Box>
            <Box>
              <NavLink
                to={"/contacts"}
                className={({ isActive }) =>
                  isActive ? "menu-text underline" : "menu-text"
                }
              >
                Contacts
              </NavLink>
            </Box>
            <Box>
              <NavLink
                to={"/journal"}
                className={({ isActive }) =>
                  isActive ? "menu-text underline" : "menu-text"
                }
              >
                Journal
              </NavLink>
            </Box>
            <Box>
              <NavLink
                to={"/user"}
                className={({ isActive }) =>
                  isActive ? "menu-text underline" : "menu-text"
                }
              >
                User
              </NavLink>
            </Box>
          </Stack>
          <Stack className="header-icon">
            <AccountCircleIcon
              sx={{
                color: "#FFD881",
                width: "36px",
                height: "36px",
                cursor: "pointer",
              }}
            >
              <link rel="stylesheet" href="" />
            </AccountCircleIcon>
            <PageviewIcon
              sx={{
                color: "#FFB8CC",
                width: "36px",
                height: "36px",
                cursor: "pointer",
              }}
            >
              <link rel="stylesheet" href="" />
            </PageviewIcon>
            <LocalMallIcon
              sx={{
                color: "#86D4F5",
                width: "36px",
                height: "36px",
                cursor: "pointer",
              }}
            >
              <link rel="stylesheet" href="" />
            </LocalMallIcon>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
