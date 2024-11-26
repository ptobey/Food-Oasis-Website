import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  ButtonGroup,
  Button,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";
import PhoneIcon from "@mui/icons-material/Phone";
import GroupsIcon from "@mui/icons-material/Groups";

type HeaderProps = {
  handleHomeClick: () => void;
  handleRecipeClick: () => void;
  handleNewButtonClick: () => void;
};

const Header: React.FC<HeaderProps> = ({
  handleHomeClick,
  handleRecipeClick,
  handleNewButtonClick,
}) => {
  const [value, setValue] = useState(0);

  return (
    <>
      {/* Header: AppBar */}
      <AppBar
        position="fixed"
        sx={{ bgcolor: "rgba(0, 0, 0, 0.7)", padding: "8px 16px" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="/newLogo.png"
              alt="Logo"
              style={{ height: "90px", width: "auto", opacity: 0.85 }}
            />
            <ButtonGroup
              aria-label="horizontal button group"
              variant="text"
              sx={{
                color: "#FFFFFF",
                marginLeft: "16px",
                "& .MuiButton-root": {
                  transition: "all 0.3s ease-in-out",
                },
                "& .MuiButton-root:hover": {
                  backgroundColor: "#ffffff22",
                  boxShadow: "0 4px 8px rgba(255, 255, 255, 0.5)",
                  color: "#FFFFAA",
                },
              }}
            >
              <Button
                onClick={handleHomeClick}
                sx={{ color: "#FFFFFF", fontSize: "14px" }}
              >
                Home
              </Button>
              <Button
                onClick={handleRecipeClick}
                sx={{ color: "#FFFFFF", fontSize: "14px" }}
              >
                Explore Map
              </Button>
              <Button
                onClick={handleNewButtonClick}
                sx={{ color: "#FFFFFF", fontSize: "14px" }}
              >
                Nutrition Guide
              </Button>
            </ButtonGroup>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#FFFFFF",
            }}
          >
          </Box>
        </Toolbar>
      </AppBar>

      {/* Footer: BottomNavigation */}
<Box
  sx={{
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 3,
    bgcolor: "rgba(0, 0, 0, 0.6)",
  }}
>
  <BottomNavigation
    showLabels
    value={value}
    onChange={(event, newValue) => setValue(newValue)}
    sx={{ backgroundColor: "transparent" }}
  >
    <BottomNavigationAction
      label="Healthy Living"
      icon={<SpaIcon />}
      sx={{
        color: "#FFFFFF",
        "&.Mui-selected": { color: "#FFFFFF" },
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          backgroundColor: "#ffffff22",
          boxShadow: "0 4px 8px rgba(255, 255, 255, 0.5)",
          color: "#FFFFAA",
        },
      }}
    />
    <BottomNavigationAction
      label="Contact Us gquirk@valenciacollege.edu"
      icon={<PhoneIcon />}
      sx={{
        color: "#FFFFFF",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          backgroundColor: "#ffffff22",
          boxShadow: "0 4px 8px rgba(255, 255, 255, 0.5)",
          color: "#FFFFAA",
        },
      }}
    />
    <BottomNavigationAction
      label="About Us"
      icon={<GroupsIcon />}
      sx={{
        color: "#FFFFFF",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          backgroundColor: "#ffffff22",
          boxShadow: "0 4px 8px rgba(255, 255, 255, 0.5)",
          color: "#FFFFAA",
        },
      }}
    />
  </BottomNavigation>
  {/* Credit Badge Section */}
  <div style={{ textAlign: "right", marginTop: "-20px", paddingRight: "16px" }}>
    <a href="https://www.fatsecret.com">
      <img
        src="https://platform.fatsecret.com/api/static/images/powered_by_fatsecret.png"
        srcSet="https://platform.fatsecret.com/api/static/images/powered_by_fatsecret_2x.png 2x, https://platform.fatsecret.com/api/static/images/powered_by_fatsecret_3x.png 3x"
        alt="Powered by FatSecret"
        style={{ width: "110px" }}
      />
    </a>
  </div>
</Box>
    </>
  );
};

export default Header;

