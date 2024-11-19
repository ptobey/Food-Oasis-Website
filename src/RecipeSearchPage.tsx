import { useEffect, useState } from "react";
import axios from "axios";
import {
  Paper,
  TextField,
  Typography,
  Pagination,
  FormControlLabel,
  Checkbox,
  Box,
  ToggleButtonGroup,
  ToggleButton,
  Button,
  Drawer,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Header from './UIRecipeSearch'; 


const RecipeSearchPage = () => {
  const [recipes, setRecipes] = useState([] as unknown as any[]);
  const [value, setValue] = useState("");
  const [calories, setCalories] = useState<number | null>(null);
  const [protein, setProtein] = useState<number | null>(null);
  const [fat, setFat] = useState<number | null>(null);
  const [carbs, setCarbs] = useState<number | null>(null);

  const [caloriePreference, setCaloriePreference] = useState<"more" | "less">(
    "less"
  );
  const [proteinPreference, setProteinPreference] = useState<"more" | "less">(
    "less"
  );
  const [fatPreference, setFatPreference] = useState<"more" | "less">("less");
  const [carbPreference, setCarbPreference] = useState<"more" | "less">("less");

  const [useCalorieFilter, setUseCalorieFilter] = useState(false);
  const [useProteinFilter, setUseProteinFilter] = useState(false);
  const [useFatFilter, setUseFatFilter] = useState(false);
  const [useCarbFilter, setUseCarbFilter] = useState(false);

  const [pageNumber, setPageNumber] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const resultsPerPage = 18;
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleHomeClick = () => navigate("/");
  const handleRecipeClick = () => navigate("/map");
  const handleNewButtonClick = () => navigate("/nutrition");

  const getRecipes = () => {
    let filters = [];

    if (useCalorieFilter && calories !== null) {
      filters.push(
        `calories${caloriePreference === "more" ? ".from=" : ".to="}${calories}`
      );
    }
    if (useProteinFilter && protein !== null) {
      filters.push(
        `protein_percentage${
          proteinPreference === "more" ? ".from=" : ".to="
        }${protein}`
      );
    }
    if (useFatFilter && fat !== null) {
      filters.push(
        `fat_percentage${fatPreference === "more" ? ".from=" : ".to="}${fat}`
      );
    }
    if (useCarbFilter && carbs !== null) {
      filters.push(
        `carbs_percentage${
          carbPreference === "more" ? ".from=" : ".to="
        }${carbs}`
      );
    }

    const filterString = filters.length ? `&${filters.join("&")}` : "";

    axios
      .post(
        `https://foodoasis.duckdns.org/api/recipes/search/v3?format=json&search_expression=${value}&page_number=${
          pageNumber - 1
        }&max_results=${resultsPerPage}${filterString}`
      )
      .then((response) => {
        setRecipes(response.data.recipes.recipe);
        setTotalResults(response.data.recipes.total_results);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
      });
  };

  useEffect(() => {
    const savedFilters = localStorage.getItem("recipeFilters");
    if (savedFilters) {
      const {
        value,
        calories,
        protein,
        fat,
        carbs,
        proteinPreference,
        fatPreference,
        carbPreference,
        useCalorieFilter,
        useProteinFilter,
        useFatFilter,
        useCarbFilter,
      } = JSON.parse(savedFilters);
      setValue(value || "");
      setCalories(calories);
      setProtein(protein);
      setFat(fat);
      setCarbs(carbs);
      setProteinPreference(proteinPreference);
      setFatPreference(fatPreference);
      setCarbPreference(carbPreference);
      setUseCalorieFilter(useCalorieFilter);
      setUseProteinFilter(useProteinFilter);
      setUseFatFilter(useFatFilter);
      setUseCarbFilter(useCarbFilter);
      setCaloriePreference;
    }
  }, []);

  useEffect(() => {
    if (
      value ||
      (useCalorieFilter && calories !== null) ||
      (useProteinFilter && protein !== null) ||
      (useFatFilter && fat !== null) ||
      (useCarbFilter && carbs !== null)
    ) {
      getRecipes();
      const savedFilters = {
        value,
        calories,
        protein,
        fat,
        carbs,
        proteinPreference,
        fatPreference,
        carbPreference,
        useCalorieFilter,
        useProteinFilter,
        useFatFilter,
        useCarbFilter,
      };
      localStorage.setItem("recipeFilters", JSON.stringify(savedFilters));
    } else {
      setRecipes([]);
      setTotalResults(0);
    }
  }, [
    pageNumber,
    value,
    calories,
    protein,
    fat,
    carbs,
    caloriePreference,
    proteinPreference,
    fatPreference,
    carbPreference,
    useCalorieFilter,
    useProteinFilter,
    useFatFilter,
    useCarbFilter,
  ]);


  const applyDietPreset = (preset: string) => {
    setDrawerOpen(true);
    switch (preset) {
      case "Keto":
        setCalories(500);
        setProtein(20);
        setFat(70);
        setCarbs(10);
        setCaloriePreference("less");
        setProteinPreference("more");
        setFatPreference("more");
        setCarbPreference("less");
        setUseCalorieFilter(true);
        setUseProteinFilter(true);
        setUseFatFilter(true);
        setUseCarbFilter(true);
        break;

      case "Paleo":
        setCalories(600);
        setProtein(35);
        setFat(40);
        setCarbs(25);
        setCaloriePreference("less");
        setProteinPreference("more");
        setFatPreference("more");
        setCarbPreference("less");
        setUseCalorieFilter(true);
        setUseProteinFilter(true);
        setUseFatFilter(true);
        setUseCarbFilter(true);
        break;

      case "Mediterranean":
        setCalories(700);
        setProtein(30);
        setFat(35);
        setCarbs(35);
        setCaloriePreference("less");
        setProteinPreference("more");
        setFatPreference("more");
        setCarbPreference("more");
        setUseCalorieFilter(true);
        setUseProteinFilter(true);
        setUseFatFilter(true);
        setUseCarbFilter(true);
        break;

      default:
        break;
    }

    setPageNumber(1);
  };


  return (
    <div style={{ padding: "140px" }}>
      <Header
        handleHomeClick={handleHomeClick}
        handleRecipeClick={handleRecipeClick}
        handleNewButtonClick={handleNewButtonClick}
      />
      <Typography
        variant="h4"
        style={{ marginBottom: "16px", textAlign: "center" }}
      >
        Search Recipes
      </Typography>
      <TextField
        id="outlined-basic"
        label="Search for recipes"
        variant="outlined"
        fullWidth
        value={value}
        onChange={(event) => {
          setValue(event.target.value.replace(/ /g, "%20"));
          setPageNumber(1);
        }}
        style={{ marginBottom: "16px" }}
      />

      <Box
        style={{
          marginBottom: "16px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button variant="contained" onClick={() => applyDietPreset("Keto")}>
          Keto
        </Button>
        <Button
          variant="contained"
          onClick={() => applyDietPreset("Paleo")}
          style={{ marginLeft: "8px" }}
        >
          Paleo
        </Button>
        <Button
          variant="contained"
          onClick={() => applyDietPreset("Mediterranean")}
          style={{ marginLeft: "8px" }}
        >
          Mediterranean
        </Button>
      </Box>

      <Box
        style={{
          marginBottom: "16px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <IconButton
          onClick={() => setDrawerOpen(true)}
          style={{ marginBottom: "16px" }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box style={{ width: "300px", padding: "16px" }}>
          <Box>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box>
            <FormControlLabel
              control={
                <Checkbox
                  checked={useCalorieFilter}
                  onChange={(event) => {
                    setUseCalorieFilter(event.target.checked);
                    if (!event.target.checked) {
                      setCalories(null);
                    }
                  }}
                />
              }
              label="Use calorie filter"
            />
            {useCalorieFilter && (
              <Box style={{ marginBottom: "16px" }}>
                <TextField
                  type="number"
                  label="Calories"
                  variant="outlined"
                  value={calories || ""}
                  onChange={(event) => {
                    const value = event.target.value;
                    setCalories(value ? parseInt(value) : null);
                    setPageNumber(1);
                  }}
                  style={{ marginBottom: "8px", width: "100%" }}
                />
                <Typography variant="body1" style={{ marginBottom: "8px" }}>
                  Select meals with:
                </Typography>
                <ToggleButtonGroup
                  value={caloriePreference}
                  exclusive
                  onChange={(event, newValue) => {
                    if (newValue) {
                      setCaloriePreference(newValue);
                      setPageNumber(1);
                    }
                  }}
                  aria-label="calorie preference"
                >
                  <ToggleButton value="less" aria-label="Less Calories">
                    Less Calories
                  </ToggleButton>
                  <ToggleButton value="more" aria-label="More Calories">
                    More Calories
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
            )}
          </Box>
          <Box>
            <FormControlLabel
              control={
                <Checkbox
                  checked={useProteinFilter}
                  onChange={(event) => {
                    setUseProteinFilter(event.target.checked);
                    if (!event.target.checked) {
                      setProtein(null);
                    }
                  }}
                />
              }
              label="Use protein filter"
            />
            {useProteinFilter && (
              <Box style={{ marginBottom: "16px" }}>
                <TextField
                  type="number"
                  label="Protein %"
                  variant="outlined"
                  value={protein || ""}
                  onChange={(event) => {
                    const value = event.target.value;
                    setProtein(value ? parseInt(value) : null);
                    setPageNumber(1);
                  }}
                  style={{ marginBottom: "8px", width: "100%" }}
                />
                <Typography variant="body1" style={{ marginBottom: "8px" }}>
                  Select meals with:
                </Typography>
                <ToggleButtonGroup
                  value={proteinPreference}
                  exclusive
                  onChange={(event, newValue) => {
                    if (newValue) {
                      setProteinPreference(newValue);
                      setPageNumber(1);
                    }
                  }}
                  aria-label="protein preference"
                >
                  <ToggleButton value="less" aria-label="Less Protein">
                    Less Protein
                  </ToggleButton>
                  <ToggleButton value="more" aria-label="More Protein">
                    More Protein
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
            )}
          </Box>

          <Box>
            <FormControlLabel
              control={
                <Checkbox
                  checked={useFatFilter}
                  onChange={(event) => {
                    setUseFatFilter(event.target.checked);
                    if (!event.target.checked) {
                      setFat(null);
                    }
                  }}
                />
              }
              label="Use fat filter"
            />
            {useFatFilter && (
              <Box style={{ marginBottom: "16px" }}>
                <TextField
                  type="number"
                  label="Fat %"
                  variant="outlined"
                  value={fat || ""}
                  onChange={(event) => {
                    const value = event.target.value;
                    setFat(value ? parseInt(value) : null);
                    setPageNumber(1);
                  }}
                  style={{ marginBottom: "8px", width: "100%" }}
                />
                <Typography variant="body1" style={{ marginBottom: "8px" }}>
                  Select meals with:
                </Typography>
                <ToggleButtonGroup
                  value={fatPreference}
                  exclusive
                  onChange={(event, newValue) => {
                    if (newValue) {
                      setFatPreference(newValue);
                      setPageNumber(1);
                    }
                  }}
                  aria-label="fat preference"
                >
                  <ToggleButton value="less" aria-label="Less Fat">
                    Less Fat
                  </ToggleButton>
                  <ToggleButton value="more" aria-label="More Fat">
                    More Fat
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
            )}{" "}
          </Box>
          <Box>
            <FormControlLabel
              control={
                <Checkbox
                  checked={useCarbFilter}
                  onChange={(event) => {
                    setUseCarbFilter(event.target.checked);
                    if (!event.target.checked) {
                      setCarbs(null);
                    }
                  }}
                />
              }
              label="Use carb filter"
            />
            {useCarbFilter && (
              <Box style={{ marginBottom: "16px" }}>
                <TextField
                  type="number"
                  label="Carbs %"
                  variant="outlined"
                  value={carbs || ""}
                  onChange={(event) => {
                    const value = event.target.value;
                    setCarbs(value ? parseInt(value) : null);
                    setPageNumber(1);
                  }}
                  style={{ marginBottom: "8px", width: "100%" }}
                />
                <Typography variant="body1" style={{ marginBottom: "8px" }}>
                  Select meals with:
                </Typography>
                <ToggleButtonGroup
                  value={carbPreference}
                  exclusive
                  onChange={(event, newValue) => {
                    if (newValue) {
                      setCarbPreference(newValue);
                      setPageNumber(1);
                    }
                  }}
                  aria-label="carb preference"
                >
                  <ToggleButton value="less" aria-label="Less Carbs">
                    Less Carbs
                  </ToggleButton>
                  <ToggleButton value="more" aria-label="More Carbs">
                    More Carbs
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
            )}{" "}
          </Box>
        </Box>
      </Drawer>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginTop: "24px",
        }}
      >
        {recipes &&
          recipes.map((recipe, index) => (
            <div
              key={index}
              onClick={() => navigate(`/recipe/${recipe.recipe_id}`)}
              style={{ cursor: "pointer" }}
            >
              <Paper
                elevation={3}
                style={{
                  padding: "16px",
                  margin: "16px",
                  borderRadius: "8px",
                  width: "300px",
                  textAlign: "center",
                  height: "260px",
                  overflow: "hidden",
                }}
              >
                {recipe.recipe_image ? (
                  <img
                    src={recipe.recipe_image}
                    alt={recipe.recipe_name}
                    style={{
                      maxWidth: "100%",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                ) : (
                  <img
                    src="/empty_image.png"
                    alt={recipe.recipe_name}
                    style={{
                      maxWidth: "100%",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                )}
                <Typography
                  variant="h6"
                  style={{
                    marginTop: "12px",
                    fontWeight: "bold",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {recipe.recipe_name}
                </Typography>
                <Typography
                  variant="body2"
                  style={{
                    marginTop: "8px",
                    color: "#555",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {recipe.recipe_description}
                </Typography>
              </Paper>
            </div>
          ))}
      </div>
      <Pagination
        count={Math.ceil(totalResults / resultsPerPage)}
        page={pageNumber}
        onChange={(event, value) => setPageNumber(value)}
        variant="outlined"
        shape="rounded"
        style={{ marginTop: "24px", display: "flex", justifyContent: "center" }}
      />
    </div>
  );
};

export default RecipeSearchPage;