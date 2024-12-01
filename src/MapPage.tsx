import axios from "axios";
import "leaflet/dist/leaflet.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L, { Icon } from "leaflet";
import {
  AppBar,
  Toolbar,
  Box,
  ButtonGroup,
  Button,
  Tooltip,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import SpaIcon from "@mui/icons-material/Spa";
import PhoneIcon from "@mui/icons-material/Phone";
import GroupsIcon from "@mui/icons-material/Groups";
import { useTranslation } from "react-i18next";
import "./MapPage.css";
import React from "react";

function LocationMarker() {
  const map = useMap();

  useEffect(() => {
    if (window.location.protocol === "https:") {
      map.locate({
        setView: true,
        maxZoom: 16,
      });

      const handleOnLocationFound = (event: L.LocationEvent) => {
        const radius = event.accuracy;
        const circle = L.circle(event.latlng, { radius });
        circle.addTo(map);
      };

      const handleOnLocationError = (error: L.ErrorEvent) => {
        alert(`Unable to determine location: ${error.message}`);
      };

      map.on("locationfound", handleOnLocationFound);
      map.on("locationerror", handleOnLocationError);

      return () => {
        map.off("locationfound", handleOnLocationFound);
        map.off("locationerror", handleOnLocationError);
      };
    } else {
      alert("Geolocation is only available over secure origins (HTTPS).");
    }
  }, [map]);

  return null;
}

function MapPage() {
  const { t } = useTranslation(); // Initialize useTranslation hook
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  // Example Data URL (Replace with your data endpoint)
  const dbUrl = "http://example.com/getLocations";
  const [resultsDB, setDBResults] = useState<any[]>([]);

  useEffect(() => {
    axios.get(dbUrl).then((response: any) => {
      setDBResults(response.data);
    });
  }, []);

  // Custom Icons
  const customIconAldi = new Icon({
    iconUrl: "/aldi.png",
    iconSize: [65, 40],
  });

  const handleHomeClick = () => navigate("/");
  const handleRecipeClick = () => navigate("/recipes");
  const handleNewButtonClick = () => navigate("/nutrition");

  return (
    <div
      className="container"
      style={{
        backgroundImage: "url(/backgroundMap.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
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
          {/* Left Side: Logo and Button Group */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="/newLogo.png"
              alt={t("logo_alt")} // Use translated alt text
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
                {t("home")} {/* Translate Home Button */}
              </Button>
              <Button
                onClick={handleRecipeClick}
                sx={{ color: "#FFFFFF", fontSize: "14px" }}
              >
                {t("search_recipes")} {/* Translate Recipes Button */}
              </Button>
              <Button
                onClick={handleNewButtonClick}
                sx={{ color: "#FFFFFF", fontSize: "14px" }}
              >
                {t("nutrition_guide")} {/* Translate Nutrition Button */}
              </Button>
            </ButtonGroup>
          </Box>
          {/* Info Icon */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#FFFFFF",
            }}
          >
            <Tooltip
              title={
                <span style={{ color: "black" }}>
                  {t("help_text")} {/* Translate Help Text */}
                </span>
              }
              placement="bottom"
              arrow
              PopperProps={{
                modifiers: [
                  {
                    name: "arrow",
                    options: {
                      element: "[data-popper-arrow]",
                    },
                  },
                ],
              }}
              componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: "#FFFFFF",
                    color: "black",
                    fontSize: "0.85rem",
                  },
                },
                arrow: {
                  sx: {
                    color: "#FFFFFF",
                  },
                },
              }}
            >
              <InfoIcon sx={{ fontSize: "2rem", cursor: "pointer" }} />
            </Tooltip>
            <Typography variant="caption">{t("help")}</Typography> {/* Translate Help */}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Map Container */}
      <div
        style={{
          paddingTop: "100px",
          height: "calc(100vh - 165px)",
          overflow: "hidden",
          position: "relative",
          zIndex: 1,
        }}
      >
        <MapContainer
          center={[28.5384, -81.3789]}
          zoom={13}
          style={{ height: "89vh", width: "100vw", margin: -8 }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[28.5384, -81.3789]} icon={customIconAldi}>
            <Popup>
              <Typography variant="body1">{t("aldi_store")}</Typography> {/* Translate Aldi Marker Label */}
            </Popup>
          </Marker>
          <LocationMarker />
        </MapContainer>
      </div>

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
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            backgroundColor: "transparent",
          }}
        >
          <BottomNavigationAction
            label={t("healthy_living")} // Translate Healthy Living
            icon={<SpaIcon />}
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
            label={t("contact_us")} // Translate Contact Us
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
            label={t("about_us")} // Translate About Us
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
    </div>
  );
}

export default MapPage;
