import React from "react";
import { Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";


const LaunchPage: React.FC = () => {
  const navigate = useNavigate();

  const handleMapClick = () => {
    navigate("/map");
  };

  const handleRecipeClick = () => {
    navigate("/recipes");
    navigate("/recipes");
  };

  const handleNewButtonClick = () => {
    navigate('/new-feature');
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url(/background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
        margin: -1,
        padding: -1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          bgcolor: "rgba(255, 255, 255, 0.8)", // semi-transparent background for text
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to the Food Finder!
        </Typography>
        <Typography variant="h6" paragraph>
          Choose an option below to get started:
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          <Button variant="contained" color="primary" onClick={handleMapClick}>
            View Nearby Food Suppliers
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleRecipeClick}
          >
            Find a Recipe
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LaunchPage;
