import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
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
  ButtonGroup,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";

const RecipeDetailPage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null as unknown as any);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.post(
          `http://localhost:5000/recipe/v2?recipe_id=${recipeId}&format=json&page_number=0&max_results=10`
        );
        setRecipe(response.data.recipe);
      } catch (err) {
        setError("Failed to fetch recipe details."); // Set error message
      } finally {
        setLoading(false); // Set loading to false after the request
      }
    };

    fetchRecipe();
  }, [recipeId]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress /> {/* Loader component */}
      </Box>
    );
  }

  if (error) {
    return (
      <Paper style={{ padding: '16px', margin: '16px', marginTop: '80px' }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Paper>
    );
  }

  const handleHomeClick = () => {
    navigate("/"); 
  };

  const handleMapClick = () => {
    navigate("/map"); 
  };

  const handleRecipeClick = () => {
    navigate("/recipes"); 
  };

  const handleNewButtonClick = () => {
    navigate("/nutrition"); 
  };

  return (
    <>
      {/* Header */}
      <AppBar
        position="fixed"
        sx={{
          bgcolor: 'rgba(0, 0, 0, 0.7)',
          padding: '16px 24px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >

          {/* Button Group centered below the logo */}
          <ButtonGroup
            variant="text"
            aria-label="Basic button group"
            sx={{
              color: '#FFFFFF',
              marginTop: '16px',
              '& .MuiButton-root': {
                transition: 'all 0.3s ease-in-out',
              },
              '& .MuiButton-root:hover': {
                backgroundColor: '#ffffff22',
                boxShadow: '0 4px 8px rgba(255, 255, 255, 0.5)',
                color: '#FFFFAA',
              },
            }}
          >
            <Button onClick={handleHomeClick} sx={{ color: '#FFFFFF', fontSize: '14px' }}>
              Home
            </Button>
            <Button onClick={handleMapClick} sx={{ color: '#FFFFFF', fontSize: '14px' }}>
              Local Fresh Markets
            </Button>
            <Button onClick={handleRecipeClick} sx={{ color: '#FFFFFF', fontSize: '14px' }}>
              Discover Recipes
            </Button>
            <Button onClick={handleNewButtonClick} sx={{ color: '#FFFFFF', fontSize: '14px' }}>
              Nutrition Guide
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>

      {/* Main content below the header */}
      <Paper style={{ padding: '16px', margin: '16px', marginTop: '80px' }}>
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h4" style={{ marginBottom: '16px' }}>
            {recipe.recipe_name}
          </Typography>
          {(recipe.recipe_images && recipe.recipe_images.recipe_image) && (
            <img
              src={recipe.recipe_images.recipe_image[0]}
              alt={recipe.recipe_name}
              style={{ borderRadius: '8px', marginBottom: '16px' }}
            />
          )}
          <Typography variant="body1" style={{ marginBottom: '12px' }}>
            {recipe.recipe_description}
          </Typography>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginTop: '20px' }}>
          <div>
            <Typography variant="h5" style={{ marginBottom: '10px' }}>
              Ingredients
            </Typography>
            <List>
              {recipe.ingredients.ingredient.map((ingredient: any, index: any) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={`${ingredient.ingredient_description}`}
                    secondary={<Link href={ingredient.ingredient_url} target="_blank">{ingredient.food_name}</Link>}
                  />
                </ListItem>
              ))}
            </List>
          </div>

          <div>
            <Typography variant="h5" style={{ marginBottom: '10px' }}>
              Directions
            </Typography>
            <List>
              {recipe.directions.direction.map((direction: any, index: any) => (
                <ListItem key={index}>
                  <ListItemText primary={`${direction.direction_number}. ${direction.direction_description}`} />
                </ListItem>
              ))}
            </List>
          </div>

          <div>
            <Typography variant="h5" style={{ marginBottom: '10px' }}>
              Nutrition Information (per serving)
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary={`Calories: ${recipe.serving_sizes.serving.calories}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Fat: ${recipe.serving_sizes.serving.fat} g`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Saturated Fat: ${recipe.serving_sizes.serving.saturated_fat} g`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Carbohydrates: ${recipe.serving_sizes.serving.carbohydrate} g`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Fiber: ${recipe.serving_sizes.serving.fiber} g`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Sugars: ${recipe.serving_sizes.serving.sugar} g`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Protein: ${recipe.serving_sizes.serving.protein} g`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Cholesterol: ${recipe.serving_sizes.serving.cholesterol} mg`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Sodium: ${recipe.serving_sizes.serving.sodium} mg`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Calcium: ${recipe.serving_sizes.serving.calcium} mg`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Iron: ${recipe.serving_sizes.serving.iron} mg`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Vitamin A: ${recipe.serving_sizes.serving.vitamin_a} %`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`Vitamin C: ${recipe.serving_sizes.serving.vitamin_c} %`} />
              </ListItem>
            </List>
          </div>
        </div>

        <Typography variant="h6" style={{ marginTop: '20px' }}>
          **Enjoy your meal!**
        </Typography>
      </Paper>
    </>
  );
};

export default RecipeDetailPage;


