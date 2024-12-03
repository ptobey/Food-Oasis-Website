import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Link,
  AppBar,
  Toolbar,
  Box,
  ButtonGroup,
  Button,
  Grid,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Tooltip from "@mui/material/Tooltip";

const RecipeDetailPage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null as unknown as any);
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleNavigate = (url: string) => {
    console.log(url.substring(0, 7));

    if (url !== "/recipes") {
      sessionStorage.removeItem("recipeFilters");
    }
    navigate(url);
  };

  useEffect(() => {
    const handleUnload = () => {
      sessionStorage.removeItem("recipeFilters");
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  useEffect(() => {
    axios
      .post(
        `https://foodoasis.duckdns.org/api/recipe/v2?recipe_id=${recipeId}&format=json&page_number=0&max_results=10`
      )
      .then((response) => {
        setRecipe(response.data.recipe);
      })
      .catch((error) => {
        console.error("Error fetching recipe data:", error);
      });
  }, [recipeId]);

  const handleHomeClick = () => {
    handleNavigate("/");
  };

  const handleMapClick = () => {
    handleNavigate("/map");
  };

  const handleRecipeClick = () => {
    handleNavigate("/recipes");
  };

  const handleNewButtonClick = () => {
    handleNavigate("/nutrition");
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="container"
      style={{
        backgroundImage: "url(/backgroundMap.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "129vh",
      }}
    >
      <AppBar
        position="fixed"
        sx={{ bgcolor: "rgba(0, 0, 0, 0.7)", padding: "16px 24px" }}
      >
        <Toolbar sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <img
              src="/newLogo.png"
              alt="Logo"
              style={{ height: "80px", width: "auto", opacity: 0.85 }}
            />
          </Box>
          <ButtonGroup
            orientation="horizontal"
            aria-label="horizontal button group"
            variant="text"
            sx={{
              color: "#FFFFFF",
              marginLeft: "24px",
              display: "flex",
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
              onClick={handleMapClick}
              sx={{ color: "#FFFFFF", fontSize: "14px" }}
            >
              Explore Map
            </Button>
            <Button
              onClick={handleRecipeClick}
              sx={{ color: "#FFFFFF", fontSize: "14px" }}
            >
              Search Recipes
            </Button>
            <Button
              onClick={handleNewButtonClick}
              sx={{ color: "#FFFFFF", fontSize: "14px" }}
            >
              Nutrition Guide
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>

      <Paper
        style={{
          padding: "16px",
          margin: "16px",
          marginTop: "115px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" style={{ marginBottom: "16px" }}>
            {recipe.recipe_name}
          </Typography>
          <Typography variant="body1" style={{ marginBottom: "12px" }}>
            {recipe.recipe_description}
          </Typography>
          {recipe.recipe_images && recipe.recipe_images.recipe_image && (
            <img
              src={recipe.recipe_images.recipe_image[0]}
              alt={recipe.recipe_name}
              style={{
                borderRadius: "8px",
                marginBottom: "16px",
                width: "200px",
              }}
            />
          )}
        </div>

        {/* Column Layout */}
        <Grid
          container
          spacing={2}
          style={{
            marginTop: "80px",
            paddingLeft: "80px",
            paddingRight: "10px",
          }}
          justifyContent="space-between"
        >
          {/* Cooking Info Section */}
          <Grid item xs={12} sm={6} md={3} style={{ paddingLeft: "10px" }}>
            <Typography variant="h6">Cooking Info</Typography>
            <Typography variant="body1">
              Cooking Time: {recipe.cooking_time_min} minutes
            </Typography>
            <Typography variant="body1">
              Preparation Time: {recipe.preparation_time_min} minutes
            </Typography>
            <Typography variant="body1">
              Servings: {recipe.number_of_servings}
            </Typography>
          </Grid>

          {/* Ingredients Section */}
          <Grid item xs={12} sm={6} md={3} style={{ marginLeft: "-140px" }}>
            <Typography variant="h6">Ingredients</Typography>
            <List>
              {recipe.ingredients.ingredient.map(
                (ingredient: any, index: any) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={ingredient.ingredient_description}
                      secondary={
                        <Link href={ingredient.ingredient_url} target="_blank">
                          {ingredient.food_name}
                        </Link>
                      }
                    />
                  </ListItem>
                )
              )}
            </List>
          </Grid>

          {/* Directions Section */}
          <Grid item xs={12} sm={6} md={3} style={{ marginLeft: "-110px" }}>
            <Typography variant="h6">Directions</Typography>
            <List>
              {recipe.directions.direction.map((direction: any, index: any) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={`${direction.direction_number}. ${direction.direction_description}`}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Nutrition Information Section */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            style={{ marginTop: "-3px", paddingLeft: "50px" }}
          >
            <Typography variant="h6">
              Nutrition Information (per serving)
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary={`Calories: ${recipe.serving_sizes.serving.calories}`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Fat: ${recipe.serving_sizes.serving.fat} g`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Saturated Fat: ${recipe.serving_sizes.serving.saturated_fat} g`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Carbohydrates: ${recipe.serving_sizes.serving.carbohydrate} g`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Fiber: ${recipe.serving_sizes.serving.fiber} g`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Sugars: ${recipe.serving_sizes.serving.sugar} g`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Protein: ${recipe.serving_sizes.serving.protein} g`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Cholesterol: ${recipe.serving_sizes.serving.cholesterol} mg`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Sodium: ${recipe.serving_sizes.serving.sodium} mg`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Calcium: ${recipe.serving_sizes.serving.calcium} mg`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Iron: ${recipe.serving_sizes.serving.iron} mg`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Vitamin A: ${recipe.serving_sizes.serving.vitamin_a} %`}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={`Vitamin C: ${recipe.serving_sizes.serving.vitamin_c} %`}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>

        {/* Credit Badge Section */}
        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <a href="https://www.fatsecret.com">
            <img
              src="https://platform.fatsecret.com/api/static/images/powered_by_fatsecret.png"
              srcSet="https://platform.fatsecret.com/api/static/images/powered_by_fatsecret_2x.png 2x, https://platform.fatsecret.com/api/static/images/powered_by_fatsecret_3x.png 3x"
              alt="Powered by FatSecret"
              style={{ width: "100px" }}
            />
          </a>
        </div>
      </Paper>

      {/* Footer: BottomNavigation */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          bgcolor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            backgroundColor: "transparent",
          }}
        >
          <BottomNavigationAction
            label="Need Help?"
            icon={
              <Tooltip title="Email us at guirirk@valenciacollege.edu" arrow>
                <HelpOutlineIcon />
              </Tooltip>
            }
            sx={{
              color: "#FFFFFF",
              "&.Mui-selected": {
                color: "#FFFFFF",
              },
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#ffffff22",
                boxShadow: "0 4px 8px rgba(255, 255, 255, 0.5)",
                color: "#FFFFAA",
              },
            }}
          />

          <BottomNavigationAction
            label="Contact Us (407) 299-5000"
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
        </BottomNavigation>
      </Box>
    </div>
  );
};

export default RecipeDetailPage;
