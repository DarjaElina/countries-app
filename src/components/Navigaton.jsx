"use client";

import { useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "@/app/context/AuthContext";
import { AppBar, Toolbar, Button, IconButton, Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

const Navigation = ({ children }) => {
  const { user, signOut } = useAuth();
  const router = useRouter();

  return (
    <div>
      <AppBar
        position="static"
        color="primary"
        sx={{
          mb: 3,
          background: "linear-gradient(45deg, #ff4d6d 30%, #4cd964 90%)", // strawberry + matcha gradient
        }}
      >
        <Toolbar>
          <Tooltip title="Home">
            <IconButton
              color="inherit"
              onClick={() => router.push("/countries")}
            >
              <HomeIcon />
            </IconButton>
          </Tooltip>

          <Button color="inherit" onClick={() => router.push("/example")}>
            Example
          </Button>

          <Button color="inherit" onClick={() => router.push("/protected")}>
            Protected
          </Button>

          {user && (
            <>
              <Tooltip title="Favorites">
                <IconButton
                  color="inherit"
                  onClick={() => router.push("/favourites")}
                >
                  <FavoriteIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Profile">
                <IconButton
                  color="inherit"
                  onClick={() => router.push("/profile")}
                >
                  <PersonIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Logout">
                <IconButton color="inherit" onClick={() => signOut()}>
                  <LogoutIcon />
                </IconButton>
              </Tooltip>
            </>
          )}

          {!user && (
            <Tooltip title="Login">
              <IconButton
                color="inherit"
                onClick={() => router.push("/login")}
              >
                <LoginIcon />
              </IconButton>
            </Tooltip>
          )}

          <ThemeToggle sx={{ ml: "auto" }} />
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
};

export default Navigation;
