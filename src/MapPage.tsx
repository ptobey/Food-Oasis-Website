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
  LayersControl,
  LayerGroup,
} from "react-leaflet";
import L, { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import {
  AppBar,
  Toolbar,
  Box,
  Drawer,
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
import "./MapPage.css";
import React from "react";

type VisibilityState = {
  [layer: string]: boolean;
};

interface MapLegendProps {
  visibility: VisibilityState;
  toggleLayer: (layer: string) => void;
}

const MapLegend: React.FC<MapLegendProps> = ({ visibility, toggleLayer }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "150px",
        right: "50px",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
        zIndex: 1000,
      }}
    >
      <Typography variant="h6">Map Legend</Typography>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {Object.keys(visibility).map((layer) => (
          <li key={layer}>
            <input
              type="checkbox"
              checked={visibility[layer]}
              onChange={() => toggleLayer(layer)}
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

    const handleOnLocationError = (error: L.ErrorEvent) => {
      alert(`Unable to determine location: ${error.message}`);
    };

    map.on("locationfound", handleOnLocationFound);
    map.on("locationerror", handleOnLocationError);

    return () => {
      map.off("locationfound", handleOnLocationFound);
      map.off("locationerror", handleOnLocationError);
    };
  }, [map]);

  return null;
}

function MapPage() {
  const url =
    "https://www.usdalocalfoodportal.com/api/farmersmarket/?apikey=U0lsUI6Xi9&state=fl";
  const [resultsFarmersMarket, setResults] = useState<any[]>([]);
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  //URLS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const dbUrl = "http://97.101.31.48:5000/getLocations";
  const dbUrlDetail = "http://97.101.31.48:5000/getStoreDetails/";
  const [resultsDB, setDBResults] = useState<any[]>([]);
  const [drawerData, setDrawerData] = useState<any>({});
  const [selectedFarmersMarket, setSelectedFarmersMarket] = useState(-1);
  const isFarmersMarket = selectedFarmersMarket >= 0;
  const farmersMarketInfo = resultsFarmersMarket[selectedFarmersMarket];
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

  //Usefx-AXios++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 useEffect(() => {
    axios.get(url).then((response: any) => {
      setResults(response.data.data);
    });
    axios.get(dbUrl).then((response: any) => {
      setDBResults(response.data);
    });
  }, []);

  //Drawerrrs++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMarkerClickFarm = (listing_id: number) => {
    setSelectedFarmersMarket(listing_id);
    setDrawerOpen(true);
  };

  const handleMarkerClick = (id: string) => {
    setSelectedFarmersMarket(-1);
    axios.get(dbUrlDetail + id).then((response: any) => {
      setDrawerData(response.data[0]);
    });
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  //icons++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const customIconAldi = new Icon({
    iconUrl: "/aldi.png",
    iconSize: [65, 40],
  });

  const customIconBravo = new Icon({
    iconUrl: "/bravo.png",
    iconSize: [50, 25],
  });

  const customIconCostco = new Icon({
    iconUrl: "/costco.png",
    iconSize: [65, 40],
  });

  const customIconFarmersMarket = new Icon({
    iconUrl: "/farmersmarket.png",
    iconSize: [38, 38],
  });

  const customIconWalmart = new Icon({
    iconUrl: "/walmart.png",
    iconSize: [38, 38],
  });

  const customIconPublix = new Icon({
    iconUrl: "/publix.png",
    iconSize: [38, 38],
  });

  const customIconSprouts = new Icon({
    iconUrl: "/sprouts.png",
    iconSize: [65, 40],
  });

  const customIconTarget = new Icon({
    iconUrl: "/target.png",
    iconSize: [38, 38],
  });

  //Filters++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  const publixData = resultsDB.filter(
    (resultsDB) => resultsDB.type === "Publix"
  );
  const aldiData = resultsDB.filter((resultsDB) => resultsDB.type === "Aldi");
  const walmartData = resultsDB.filter(
    (resultsDB) => resultsDB.type === "Walmart"
  );
  const costcoData = resultsDB.filter(
    (resultsDB) => resultsDB.type === "Costco"
  );
  const sproutsData = resultsDB.filter(
    (resultsDB) => resultsDB.type === "Sprouts"
  );
  const bravoData = resultsDB.filter((resultsDB) => resultsDB.type === "Bravo");
  const targetData = resultsDB.filter(
    (resultsDB) => resultsDB.type === "Target"
  );

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
          {/* Left Side: Logo and Button Group */}
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
              <Button
                onClick={handleHomeClick}
                sx={{ color: "#FFFFFF", fontSize: "14px" }}
              >
                Home
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
                  {" "}
                  {/* Set text color to black for better contrast */}
                  The blue circle shows your location. Zoom out or click a
                  marker to explore more places.
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
          {visibility["Aldi"] && (
            <MarkerClusterGroup chunkedLoading>
              {aldiData.map((result, index) => (
                <Marker
                  key={index}
                  eventHandlers={{
                    click: () => handleMarkerClick(result.store_id),
                  }}
                  position={[
                    result.latitude as number,
                    result.longitude as number,
                  ]}
                  icon={customIconAldi}
                ></Marker>
              ))}
            </MarkerClusterGroup>
          )}
          {visibility["Bravo"] && (
            <MarkerClusterGroup chunkedLoading>
              {bravoData.map((result, index) => (
                <Marker
                  key={index}
                  eventHandlers={{
                    click: () => handleMarkerClick(result.store_id),
                  }}
                  position={[
                    result.latitude as number,
                    result.longitude as number,
                  ]}
                  icon={customIconBravo}
                ></Marker>
              ))}
            </MarkerClusterGroup>
          )}
          {visibility["Costco"] && (
            <MarkerClusterGroup chunkedLoading>
              {costcoData.map((result, index) => (
                <Marker
                  key={index}
                  eventHandlers={{
                    click: () => handleMarkerClick(result.store_id),
                  }}
                  position={[
                    result.latitude as number,
                    result.longitude as number,
                  ]}
                  icon={customIconCostco}
                ></Marker>
              ))}
            </MarkerClusterGroup>
          )}
          {visibility["Farmer's Market"] && (
            <MarkerClusterGroup chunkedLoading>
              {resultsFarmersMarket.map((result, index) => (
                <Marker
                  key={index}
                  eventHandlers={{
                    click: () => handleMarkerClickFarm(index),
                  }}
                  position={[
                    result.location_y as number,
                    result.location_x as number,
                  ]}
                  icon={customIconFarmersMarket}
                ></Marker>
              ))}
            </MarkerClusterGroup>
          )}
          {visibility["Publix"] && (
            <MarkerClusterGroup chunkedLoading>
              {publixData.map((result, index) => (
                <Marker
                  key={index}
                  eventHandlers={{
                    click: () => handleMarkerClick(result.store_id),
                  }}
                  position={[
                    result.latitude as number,
                    result.longitude as number,
                  ]}
                  icon={customIconPublix}
                ></Marker>
              ))}
            </MarkerClusterGroup>
          )}
          {visibility["Sprouts"] && (
            <MarkerClusterGroup chunkedLoading>
              {sproutsData.map((result, index) => (
                <Marker
                  key={index}
                  eventHandlers={{
                    click: () => handleMarkerClick(result.store_id),
                  }}
                  position={[
                    result.latitude as number,
                    result.longitude as number,
                  ]}
                  icon={customIconSprouts}
                ></Marker>
              ))}
            </MarkerClusterGroup>
          )}
          {visibility["Target"] && (
            <MarkerClusterGroup chunkedLoading>
              {targetData.map((result, index) => (
                <Marker
                  key={index}
                  eventHandlers={{
                    click: () => handleMarkerClick(result.store_id),
                  }}
                  position={[
                    result.latitude as number,
                    result.longitude as number,
                  ]}
                  icon={customIconTarget}
                ></Marker>
              ))}
            </MarkerClusterGroup>
          )}
          {visibility["Walmart"] && (
            <MarkerClusterGroup chunkedLoading>
              {walmartData.map((result, index) => (
                <Marker
                  key={index}
                  eventHandlers={{
                    click: () => handleMarkerClick(result.store_id),
                  }}
                  position={[
                    result.latitude as number,
                    result.longitude as number,
                  ]}
                  icon={customIconWalmart}
                ></Marker>
              ))}
            </MarkerClusterGroup>
          )}
        </MapContainer>

        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
          <Box p={2} width="250px">
            <Typography variant="h5"> -Store Details- </Typography>
            <Typography variant="h6">
              {" "}
              {isFarmersMarket
                ? farmersMarketInfo.listing_name
                : drawerData.type}{" "}
            </Typography>
            <Typography variant="body1">
              {isFarmersMarket
                ? farmersMarketInfo.location_street
                : drawerData.street_address}{" "}
              <br />
              {isFarmersMarket
                ? farmersMarketInfo.location_city
                : drawerData.city}
              {", "}
              {isFarmersMarket
                ? farmersMarketInfo.location_state
                : drawerData.state}
              {", "}
              {isFarmersMarket
                ? farmersMarketInfo.location_zipcode
                : drawerData.zip}
              <br />
              {isFarmersMarket
                ? farmersMarketInfo.contact_phone
                : drawerData.phone_number}{" "}
              <br />
              <Typography variant="body2">
                <a
                  href={
                    isFarmersMarket
                      ? farmersMarketInfo.media_website
                      : drawerData.website
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {isFarmersMarket
                    ? farmersMarketInfo.media_website
                    : drawerData.website}{" "}
                </a>{" "}
                <br />
                {!isFarmersMarket && (
                  <img
                    style={{ width: 200, height: 200 }}
                    src={
                      isFarmersMarket
                        ? farmersMarketInfo.listing_image
                        : drawerData.image_url
                    }
                    alt={" Unable to load this image!"}
                  />
                )}{" "}
                <br /> <br />
                {isFarmersMarket ? (
                  "Please call for market hours."
                ) : (
                  <Typography variant="h6">
                    {" "}
                    {"-Hours-"} <br />{" "}
                  </Typography>
                )}
                {!isFarmersMarket &&
                  drawerData.hours &&
                  (() => {
                    const hours = JSON.parse(drawerData.hours);
                    return Object.keys(hours).map((day) => (
                      <React.Fragment key={day}>
                        {day}: {hours[day].open} - {hours[day].close} <br />
                      </React.Fragment>
                    ));
                  })()}
              </Typography>
            </Typography>
          </Box>
        </Drawer>
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
            label="Healthy Living"
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
            label="Contact Us gquirk@valenciacollege.edu"
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
            label="About Us"
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
