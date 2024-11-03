import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LaunchPage from "./LaunchPage";
import MapPage from "./MapPage";
import RecipePage from "./RecipeSearchPage";
import RecipeDetailPage from "./RecipeDetailPage";
//import { getPublixData } from "./publix";
//import { getWalmartData } from "./walmart";
//import {getBravoData} from "./bravo"
//import {getCostcoData} from "./costco";
//import {getAldiData} from "./aldi";
//import {getSproutsData} from "./sprouts";
//import { getTargetData } from "./target";

const App: React.FC = () => {
 // getPublixData();
 // getWalmartData();
 // getBravoData();
 // getCostcoData();
 // getAldiData();
 // getTargetData();
 //getSproutsData();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LaunchPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/recipes" element={<RecipePage />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
