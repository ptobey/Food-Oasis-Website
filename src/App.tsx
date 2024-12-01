import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LaunchPage from "./LaunchPage";
import MapPage from "./MapPage";
import NutritionPage from "./NutritionPage";
import RecipePage from "./RecipeSearchPage";
import RecipeDetailPage from "./RecipeDetailPage";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

const App: React.FC = () => {
  const { i18n } = useTranslation();

  // Toggle Language Handler
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Router>
      {/* Global AppBar for Navigation and Language Toggle */}
      <AppBar 
        position="fixed" 
        sx={{ 
          bgcolor: 'rgba(0, 0, 0, 0.7)', 
          padding: '8px 16px',
          zIndex: 1201, // Ensures AppBar stays above other components
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo Section */}
          <Box>
            <img
              src="/newLogo.png" // Adjust this to your logo path if needed
              alt={i18n.language === 'en' ? 'Food Oasis Logo' : 'Logotipo de Food Oasis'}
              style={{ height: '60px', width: 'auto', opacity: 0.85 }}
            />
          </Box>

          {/* Language Toggle Button */}
          <Button
            onClick={toggleLanguage}
            variant="contained"
            sx={{
              bgcolor: '#ffffff',
              color: '#000',
              fontWeight: 'bold',
            }}
          >
            {i18n.language === 'en' ? 'ES' : 'EN'}
          </Button>
        </Toolbar>
      </AppBar>

      {/* Content of the Pages */}
      <Box sx={{ paddingTop: "80px" }}> {/* Add padding to accommodate fixed AppBar */}
        <Routes>
          <Route path="/" element={<LaunchPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/nutrition" element={<NutritionPage />} />
          <Route path="/recipes" element={<RecipePage />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
