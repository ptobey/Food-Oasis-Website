import axios from "axios";
import "leaflet/dist/leaflet.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap
} from "react-leaflet";
import L, { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
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
import StoreDetailsDrawer from "./StoreDetailsDrawer";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'; 
import "./MapPage.css";
import React from "react";

type VisibilityState = {
  [layer: string]: boolean;
};

interface Location  {
store_id: string ;
type: string;
latitude: string;
longitude: string;
}

interface MapLegendProps {
  visibility: VisibilityState;
  toggleLayer: (layer: string) => void;
}

function LocationMarker() {
  const map = useMap();

  useEffect(() => {
    map.locate({
      setView: true,
      maxZoom: 16,
    });

    const handleOnLocationFound = (event: L.LocationEvent) => {
      const radius = event.accuracy;
      const circle = L.circle(event.latlng, { radius });
      circle.addTo(map);
    };

    map.on("locationfound", handleOnLocationFound);

    return () => {
      map.off("locationfound", handleOnLocationFound);
    };
  }, [map]);

  return null;
}

const MapLegend: React.FC<MapLegendProps> = ({ visibility, toggleLayer }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "600px",
        right: "10px",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        zIndex: 1000,
        color: "white",
      }}
    >
      <Typography variant="h6" style={{ marginBottom: "7px", color: "white" }}>Map Legend</Typography>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {Object.keys(visibility).map((layer) => (
          <li key={layer}>
            <input
              type="checkbox"
              checked={visibility[layer]}
              onChange={() => toggleLayer(layer)}
              style={{
                marginRight: "7px", 
                cursor: "pointer", 
              }}
            />
            <Typography style={{ marginLeft: "5px", display: "inline" }}>
              {layer}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

function MapPage() {
  const url =
    "https://www.usdalocalfoodportal.com/api/farmersmarket/?apikey=U0lsUI6Xi9&state=fl";
  const [resultsFarmersMarket, setResults] = useState<any[]>([]);
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  // URLs and Data
  const dbUrl = "https://foodoasis.duckdns.org/api/getLocations";
  const dbUrlDetail = "https://foodoasis.duckdns.org/api/getStoreDetails/";
  const [resultsDB, setDBResults] = useState<any[]>([]);
  const [drawerData, setDrawerData] = useState<any>({});
  const [selectedFarmersMarket, setSelectedFarmersMarket] = useState(-1);
  const isFarmersMarket = selectedFarmersMarket >= 0;
  const farmersMarketInfo = resultsFarmersMarket[selectedFarmersMarket];
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [visibility, setVisibility] = useState<VisibilityState>({
    Aldi: true,
    Bravo: true,
    Costco: true,
    "Farmer's Market": true,
    Publix: true,
    Sprouts: true,
    Target: true,
    Walmart: true,
  });

  const toggleLayer = (layer: string) => {
    setVisibility((prev) => ({ ...prev, [layer]: !prev[layer] }));
  };

  useEffect(() => {
    axios.get(url).then((response: any) => {
      setResults(response.data.data);
    });
    axios.get(dbUrl).then((response: any) => {
      setDBResults(response.data);
    });
  }, []);

  const handleMarkerClickFarm = (listing_id: number) => {
    setSelectedFarmersMarket(listing_id);
    setDrawerOpen(true);
  };

  const handleMarkerClick = (location: Location) => {
    setSelectedFarmersMarket(-1);
    axios.get(dbUrlDetail + location.store_id).then((response: any) => {

      response.data[0].longitude = location.longitude
      response.data[0].latitude = location.latitude
      response.data[0].type = location.type

      setDrawerData(response.data[0]);
    });
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  // Icon definitions
  const customIconAldi = new Icon({ iconUrl: "/aldi.png", iconSize: [65, 40] });
  const customIconBravo = new Icon({ iconUrl: "/bravo.png", iconSize: [50, 25] });
  const customIconCostco = new Icon({ iconUrl: "/costco.png", iconSize: [65, 40] });
  const customIconFarmersMarket = new Icon({ iconUrl: "/farmersmarket.png", iconSize: [38, 38] });
  const customIconWalmart = new Icon({ iconUrl: "/walmart.png", iconSize: [38, 38] });
  const customIconPublix = new Icon({ iconUrl: "/publix.png", iconSize: [38, 38] });
  const customIconSprouts = new Icon({ iconUrl: "/sprouts.png", iconSize: [65, 40] });
  const customIconTarget = new Icon({ iconUrl: "/target.png", iconSize: [38, 38] });

  const aldiData = resultsDB.filter((resultsDB) => resultsDB.type === "Aldi");
  const bravoData = resultsDB.filter((resultsDB) => resultsDB.type === "Bravo");
  const costcoData = resultsDB.filter((resultsDB) => resultsDB.type === "Costco");
  const publixData = resultsDB.filter((resultsDB) => resultsDB.type === "Publix");
  const sproutsData = resultsDB.filter((resultsDB) => resultsDB.type === "Sprouts");
  const targetData = resultsDB.filter((resultsDB) => resultsDB.type === "Target");
  const walmartData = resultsDB.filter((resultsDB) => resultsDB.type === "Walmart");

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
      <MapLegend visibility={visibility} toggleLayer={toggleLayer} />
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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="/newLogo.png"
              alt="Logo"
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
              <Button onClick={handleHomeClick} sx={{ color: "#FFFFFF", fontSize: "14px" }}>
                Home
              </Button>
              <Button onClick={handleRecipeClick} sx={{ color: "#FFFFFF", fontSize: "14px" }}>
                Search Recipes
              </Button>
              <Button onClick={handleNewButtonClick} sx={{ color: "#FFFFFF", fontSize: "14px" }}>
                Nutrition Guide
              </Button>
            </ButtonGroup>
          </Box>
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
                  The blue circle shows your location. Zoom out or click a marker to explore more places.
                </span>
              }
              placement="bottom"
              arrow
              PopperProps={{
                modifiers: [{ name: "arrow", options: { element: "[data-popper-arrow]" } }],
              }}
              componentsProps={{
                tooltip: { sx: { backgroundColor: "#FFFFFF", color: "black", fontSize: "0.85rem" } },
                arrow: { sx: { color: "#FFFFFF" } },
              }}
            >
              <InfoIcon sx={{ fontSize: "2rem", cursor: "pointer" }} />
            </Tooltip>
            <Typography variant="caption">Help</Typography>
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
          <LocationMarker />

           {/* Marker Groups */}
           {visibility["Aldi"] && (
            <MarkerClusterGroup chunkedLoading>
              {aldiData.map((result, index) => (
                <Marker
                  key={index}
                  eventHandlers={{ click: () => handleMarkerClick(result) }}
                  position={[result.latitude as number, result.longitude as number]}
                  icon={customIconAldi}
                />
              ))}
            </MarkerClusterGroup>
          )}
          {visibility["Bravo"] && (
            <MarkerClusterGroup chunkedLoading>
              {bravoData.map((result, index) => (
                <Marker
                  key={index}
                  eventHandlers={{ click: () => handleMarkerClick(result) }}
                  position={[result.latitude as number, result.longitude as number]}
                  icon={customIconBravo}
                />
              ))}
            </MarkerClusterGroup>
          )}
          {visibility["Costco"] && (
            <MarkerClusterGroup chunkedLoading>
              {costcoData.map((result, index) => (
                <Marker
                  key={index}
                  eventHandlers={{ click: () => handleMarkerClick(result) }}
                  position={[result.latitude as number, result.longitude as number]}
                  icon={customIconCostco}
                />
              ))}
            </MarkerClusterGroup>
          )}
          {visibility["Farmer's Market"] && (
            <MarkerClusterGroup chunkedLoading>
              {resultsFarmersMarket.map((result, index) => (
                <Marker
                  key={index}
                  eventHandlers={{ click: () => handleMarkerClickFarm(index) }}
                  position={[result.location_y as number, result.location_x as number]}
                  icon={customIconFarmersMarket}
                />
              ))}
            </MarkerClusterGroup>
          )}
          {visibility["Publix"] && (
            <MarkerClusterGroup chunkedLoading>
              {publixData.map((result, index) => (
                <Marker
                  key={index}
                  eventHandlers={{ click: () => handleMarkerClick(result) }}
                  position={[result.latitude as number, result.longitude as number]}
                  icon={customIconPublix}
                />
              ))}
            </MarkerClusterGroup>
          )}
          {visibility["Sprouts"] && (
            <MarkerClusterGroup chunkedLoading>
              {sproutsData.map((result, index) => (
                <Marker
                  key={index}
                  eventHandlers={{ click: () => handleMarkerClick(result) }}
                  position={[result.latitude as number, result.longitude as number]}
                  icon={customIconSprouts}
                />
              ))}
            </MarkerClusterGroup>
          )}
          {visibility["Target"] && (
            <MarkerClusterGroup chunkedLoading>
              {targetData.map((result, index) => (
                <Marker
                  key={index}
                  eventHandlers={{ click: () => handleMarkerClick(result) }}
                  position={[result.latitude as number, result.longitude as number]}
                  icon={customIconTarget}
                />
              ))}
            </MarkerClusterGroup>
          )}
          {visibility["Walmart"] && (
            <MarkerClusterGroup chunkedLoading>
              {walmartData.map((result, index) => (
                <Marker
                  key={index}
                  eventHandlers={{ click: () => handleMarkerClick(result) }}
                  position={[result.latitude as number, result.longitude as number]}
                  icon={customIconWalmart}
                />
              ))}
            </MarkerClusterGroup>
          )}

        </MapContainer>

        <StoreDetailsDrawer
          open={drawerOpen}
          onClose={handleDrawerClose}
          data={isFarmersMarket ? farmersMarketInfo : drawerData}
          isFarmersMarket={isFarmersMarket}
        />
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
          onChange={(event, newValue) => setValue(newValue)}
          sx={{ backgroundColor: "transparent" }}
        >
          <BottomNavigationAction
  label="Need Help?" 
  icon={
    <Tooltip
      title="Email us at guirirk@valenciacollege.edu"
      arrow
      
    >
      <HelpOutlineIcon />
    </Tooltip>
  }
  sx={{
    color: '#FFFFFF',
    '&.Mui-selected': {
      color: '#FFFFFF',
    },
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: '#ffffff22',
      boxShadow: '0 4px 8px rgba(255, 255, 255, 0.5)',
      color: '#FFFFAA',
    },
  }}
/>
<BottomNavigationAction
            label="Placeholder for Translator"
            icon={<GroupsIcon />}
            sx={{
              color: '#FFFFFF',
              transition: 'all 0.3s ease-in-out', 
              '&:hover': {
                backgroundColor: '#ffffff22', 
                boxShadow: '0 4px 8px rgba(255, 255, 255, 0.5)', 
                color: '#FFFFAA', 
              },
            }}
          />
<BottomNavigationAction
            label="Contact Us (407) 299-5000"
            icon={<PhoneIcon />}
            sx={{
              color: '#FFFFFF',
              transition: 'all 0.3s ease-in-out', 
              '&:hover': {
                backgroundColor: '#ffffff22', 
                boxShadow: '0 4px 8px rgba(255, 255, 255, 0.5)', 
                color: '#FFFFAA', 
              },
            }}
          />
        </BottomNavigation>
      </Box>
    </div>
  );
}

export default MapPage;


function setDrawerOpen(arg0: boolean) {
  throw new Error("Function not implemented.");
}
