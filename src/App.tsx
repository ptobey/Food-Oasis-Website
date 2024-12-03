import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LaunchPage from "./LaunchPage";
import MapPage from "./MapPage";
import NutritionPage from "./NutritionPage";
import RecipePage from "./RecipeSearchPage";
import RecipeDetailPage from "./RecipeDetailPage";

const App: React.FC = () => {
  return (
    <div style={{ margin: -8 }}>
      <Router>
        <Routes>
          <Route path="/" element={<LaunchPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/nutrition" element={<NutritionPage />} />
          <Route path="/recipes" element={<RecipePage />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
