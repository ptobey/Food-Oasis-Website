import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  ButtonGroup,
  Button,
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Typography,
  Card,
} from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";
import PhoneIcon from "@mui/icons-material/Phone";
import GroupsIcon from "@mui/icons-material/Groups";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./NutritionPage.css";

const NutritionPage: React.FC = () => {
  const { t } = useTranslation(); // UseTranslation hook for accessing translations
  const navigate = useNavigate();
  const [navValue, setNavValue] = useState(0);

  const handleHomeClick = () => navigate("/");
  const handleRecipeClick = () => navigate("/map");
  const handleNewButtonClick = () => navigate("/recipes");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
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
              alt={t("logo_alt")}
              style={{ height: "75px", width: "auto", opacity: 0.85 }}
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
                {t("home")}
              </Button>
              <Button
                onClick={handleRecipeClick}
                sx={{ color: "#FFFFFF", fontSize: "14px" }}
              >
                {t("explore_map")}
              </Button>
              <Button
                onClick={handleNewButtonClick}
                sx={{ color: "#FFFFFF", fontSize: "14px" }}
              >
                {t("search_recipes")}
              </Button>
            </ButtonGroup>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Page Content */}
      <Container
        sx={{
          bgcolor: "rgba(255, 255, 255, 0.5)",
          marginTop: "90px",
          flexGrow: 1,
          padding: "50px",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "500",
            letterSpacing: "1px",
            color: "#000000",
          }}
        >
          {t("why_eat_healthy")}
        </Typography>

        <Typography
          variant="h5"
          align="center"
          sx={{
            fontStyle: "normal",
            fontWeight: "500",
            color: "#000000",
            marginTop: "5px",
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          {t("healthy_eating_on_budget")}
        </Typography>

        <div
          style={{
            justifyContent: "center",
            display: "flex",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              overflow: "hidden",
              maxWidth: "635px",
              maxHeight: "350px",
              borderRadius: "25px",
            }}
          >
            <iframe
              src="https://bit.ly/4eal1kJ"
              allow="autoplay; fullscreen; encrypted-media;"
              width="20px"
            ></iframe>
          </div>
        </div>

        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            marginTop: "50px",
            fontStyle: "italic",
            fontWeight: "400",
            color: "#000000",
            letterSpacing: "0.5px",
          }}
        >
          {t("by_kristin")}
        </Typography>

        <Typography fontWeight={"bold"} sx={{ marginTop: "20px" }}>
          {t("in_united_states")}
        </Typography>
        <Typography>{t("healthy_food_description")}</Typography>

        {/* Additional Content */}
        <Typography fontWeight={"bold"} sx={{ marginTop: "16px" }}>
          {t("the_struggle")}
        </Typography>
        <Typography>
          {t("struggle_description")}{" "}
          <a
            href="https://www.myplate.gov/eat-healthy/healthy-eating-budget"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("managing_budget")}
          </a>
          {" " + t("struggle_conclusion")}
        </Typography>

        <Typography fontWeight={"bold"} sx={{ marginTop: "16px" }}>
          {t("myplate_intro")}
        </Typography>
        <Typography>{t("myplate_description")}</Typography>

        <img
          src="./MyPlate_blue.png"
          alt={t("myplate_image_alt")}
          width={"350px"}
        />
        <Typography variant="caption">
          {t("myplate_image_source")}
        </Typography>

        <Typography fontWeight={"bold"} sx={{ marginTop: "16px" }}>
          {t("mediterranean_pattern_diet")}
        </Typography>
        <Typography>{t("mediterranean_pattern_description")}</Typography>

        <Typography fontWeight={"bold"} sx={{ marginTop: "16px" }}>
          {t("diet_trends")}
        </Typography>
        <Typography>{t("diet_trends_description")}</Typography>

        {/* Budget Tips Section */}
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          sx={{
            color: "black",
            marginTop: "40px",
            marginBottom: "30px",
            letterSpacing: "1px",
          }}
        >
          {t("best_approach_budget")}
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {[
            { title: t("buy_frozen_fruits"), description: t("buy_frozen_desc") },
            { title: t("use_herbs_spices"), description: t("use_herbs_desc") },
            { title: t("canned_items"), description: t("canned_items_desc") },
            { title: t("whole_grain"), description: "" },
            { title: t("cook_at_home"), description: "" },
            { title: t("farmers_market"), description: t("farmers_market_desc") },
          ].map((tip, index) => (
            <Card
              key={index}
              sx={{
                bgcolor: "#E8F5E9",
                padding: "16px",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
              }}
            >
              <Typography variant="body1" fontWeight="bold">
                • {tip.title}
              </Typography>
              {tip.description && (
                <Typography variant="body2" sx={{ marginTop: "10px" }}>
                  {tip.description}
                </Typography>
              )}
            </Card>
          ))}
        </Box>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1,
          bgcolor: "rgba(0, 0, 0, 0.6)",
        }}
      >
        <BottomNavigation
          showLabels
          value={navValue}
          onChange={(event, newValue) => setNavValue(newValue)}
          sx={{
            backgroundColor: "transparent",
            height: "50px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <BottomNavigationAction
            label={t("healthy_living")}
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
            label={t("contact_us")}
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
            label={t("about_us")}
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
      </Box>
    </Box>
  );
};

export default NutritionPage;
