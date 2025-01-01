import { Box, Button, Container, Stack } from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PageviewIcon from "@mui/icons-material/Pageview";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useGlobals } from "../../hooks/useGlobals";

export default function Header() {
  const { authMember } = useGlobals();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/user/card");
  };
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
            {authMember ? (
              <Box>
                <NavLink
                  to="/orders"
                  className={({ isActive }) =>
                    isActive ? "menu-text underline" : "menu-text"
                  }
                >
                  Orders
                </NavLink>
              </Box>
            ) : null}
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
            <Link
              to={"/user"}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AccountCircleIcon
                sx={{
                  color: "#FFD881",
                  width: "36px",
                  height: "36px",
                  cursor: "pointer",
                }}
              ></AccountCircleIcon>
            </Link>
            <Link
              to={"/shop"}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PageviewIcon
                sx={{
                  color: "#FFB8CC",
                  width: "36px",
                  height: "36px",
                  cursor: "pointer",
                }}
              ></PageviewIcon>
            </Link>

            <LocalMallIcon
              sx={{
                color: "#86D4F5",
                width: "36px",
                height: "36px",
                cursor: "pointer",
              }}
              onClick={handleClick}
            />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
