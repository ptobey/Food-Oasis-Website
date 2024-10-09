import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";

const RecipeDetailPage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null as unknown as any);

  useEffect(() => {
    axios
      .post(
        `http://localhost:5000/recipe/v2?recipe_id=${recipeId}&format=json&page_number=0&max_results=10`
      )
      .then((response) => {
        setRecipe(response.data.recipe);
      });
  }, [recipeId]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

    return (
        <Paper style={{ padding: '16px', margin: '16px' }}>
            <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h4" style={{ marginBottom: '16px' }}>
                    {recipe.recipe_name}
                </Typography>
                {(recipe.recipe_images && recipe.recipe_images.recipe_image) && (
                        <img 
                        src={recipe.recipe_images.recipe_image[0]} 
                        alt={recipe.recipe_name} 
                        style={{ 
                            borderRadius: '8px', 
                            marginBottom: '16px' 
                        }} 
                    />
                )}
                <Typography variant="body1" style={{ marginBottom: '12px' }}>
                    {recipe.recipe_description}
                </Typography>
            </div>
            
            <Typography variant="h5" style={{ marginTop: '20px', marginBottom: '10px' }}>
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

            <Typography variant="h5" style={{ marginTop: '20px', marginBottom: '10px' }}>
                Directions
            </Typography>
            <List>
                {recipe.directions.direction.map((direction: any, index: any) => (
                    <ListItem key={index}>
                        <ListItemText primary={`${direction.direction_number}. ${direction.direction_description}`} />
                    </ListItem>
                ))}
            </List>

            <Typography variant="h6" style={{ marginTop: '20px' }}>
                Cooking Time: {recipe.cooking_time_min} minutes
            </Typography>
            <Typography variant="h6">
                Preparation Time: {recipe.preparation_time_min} minutes
            </Typography>
            <Typography variant="h6">
                Servings: {recipe.number_of_servings}
            </Typography>

            {/* Nutrition Section */}
            <Typography variant="h5" style={{ marginTop: '20px', marginBottom: '10px' }}>
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
        </Paper>
    );
};

export default RecipeDetailPage;


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@mui/material";

const RecipeDetailPage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null as unknown as any);

  useEffect(() => {
    axios
      .post(
        `http://localhost:5000/recipe/v2?recipe_id=${recipeId}&format=json&page_number=0&max_results=10`
      )
      .then((response) => {
        setRecipe(response.data.recipe);
      });
  }, [recipeId]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <Paper style={{ padding: "16px", margin: "16px" }}>
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
        {recipe.recipe_images && recipe.recipe_images.recipe_image && (
          <img
            src={recipe.recipe_images.recipe_image[0]}
            alt={recipe.recipe_name}
            style={{
              borderRadius: "8px",
              marginBottom: "16px",
            }}
          />
        )}
        <Typography variant="body1" style={{ marginBottom: "12px" }}>
          {recipe.recipe_description}
        </Typography>
      </div>

      <Typography
        variant="h5"
        style={{ marginTop: "20px", marginBottom: "10px" }}
      >
        Ingredients
      </Typography>
      <List>
        {recipe.ingredients.ingredient.map((ingredient: any, index: any) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${ingredient.ingredient_description}`}
              secondary={
                <Link href={ingredient.ingredient_url} target="_blank">
                  {ingredient.food_name}
                </Link>
              }
            />
          </ListItem>
        ))}
      </List>

      <Typography
        variant="h5"
        style={{ marginTop: "20px", marginBottom: "10px" }}
      >
        Directions
      </Typography>
      <List>
        {recipe.directions.direction.map((direction: any, index: any) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${direction.direction_number}. ${direction.direction_description}`}
            />
          </ListItem>
        ))}
      </List>

      <Typography variant="h6" style={{ marginTop: "20px" }}>
        Cooking Time: {recipe.cooking_time_min} minutes
      </Typography>
      <Typography variant="h6">
        Preparation Time: {recipe.preparation_time_min} minutes
      </Typography>
      <Typography variant="h6">
        Servings: {recipe.number_of_servings}
      </Typography>

      {/* Nutrition Section */}
      <Typography
        variant="h5"
        style={{ marginTop: "20px", marginBottom: "10px" }}
      >
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
    </Paper>
  );
};

export default RecipeDetailPage;
