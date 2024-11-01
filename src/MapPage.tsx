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
import { AppBar, Toolbar, Box, ButtonGroup, Button, Tooltip, Typography, BottomNavigation, BottomNavigationAction } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import SpaIcon from '@mui/icons-material/Spa';
import PhoneIcon from '@mui/icons-material/Phone';
import GroupsIcon from '@mui/icons-material/Groups';
import "./MapPage.css";
import React from "react";

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

const walmart = [
  { geocode: [28.4069, -81.4158], popUp: "Walmart 1" },
  { geocode: [28.5037, -81.5029], popUp: "Walmart 2" },
  { geocode: [28.5117, -81.3743], popUp: "Walmart 3" },
  { geocode: [28.5412, -81.2065], popUp: "Walmart 4" },
  { geocode: [28.5118, -81.1578], popUp: "Walmart 5" },
];

const publix = [
  { geocode: [28.2851, -81.4229], popUp: "Publix 1" },
  { geocode: [28.3083, -81.4216], popUp: "Publix 2" },
  { geocode: [28.3237, -81.4339], popUp: "Publix 3" },
  { geocode: [28.1668, -81.4397], popUp: "Publix 4" },
  { geocode: [28.294, -81.3433], popUp: "Publix 5" },
];

function MapPage() {
  const url = "https://www.usdalocalfoodportal.com/api/farmersmarket/?apikey=U0lsUI6Xi9&state=fl";
  const [resultsFarmersMarket, setResults] = useState<any[]>([]);
  const navigate = useNavigate();
  const [value, setValue] = useState(0); 

  const customIconFarmersMarket = new Icon({
    iconUrl: "/map-marker.png",
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

  useEffect(() => {
    axios.get(url).then((response: any) => {
      setResults(response.data.data);
      console.log(response);
    });
  }, []);

  const handleHomeClick = () => navigate("/");
  const handleRecipeClick = () => navigate("/recipes");
  const handleNewButtonClick = () => navigate("/nutrition");

  return (
    <div className="container"
      style={{
        backgroundImage: 'url(/backgroundMap.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}>
      {/* Header: AppBar */}
      <AppBar position="fixed" sx={{ bgcolor: 'rgba(0, 0, 0, 0.7)', padding: '8px 16px' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Left Side: Logo and Button Group */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src="/newLogo.png" alt="Logo" style={{ height: '90px', width: 'auto', opacity: 0.85 }} />
            <ButtonGroup
              aria-label="horizontal button group"
              variant="text"
              sx={{
                color: '#FFFFFF',
                marginLeft: '16px',
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
              <Button onClick={handleHomeClick} sx={{ color: '#FFFFFF', fontSize: '14px' }}>Home</Button>
              <Button onClick={handleRecipeClick} sx={{ color: '#FFFFFF', fontSize: '14px' }}>Search Recipes</Button>
              <Button onClick={handleNewButtonClick} sx={{ color: '#FFFFFF', fontSize: '14px' }}>Nutrition Guide</Button>
            </ButtonGroup>
          </Box>
          {/* Info Icon */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#FFFFFF' }}>
  <Tooltip
    title={
      <span style={{ color: 'black' }}> {/* Set text color to black for better contrast */}
        The blue circle shows your location. Zoom out or click a marker to explore more places.
      </span>
    }
    placement="bottom"
    arrow
    PopperProps={{
      modifiers: [
        {
          name: 'arrow',
          options: {
          element: '[data-popper-arrow]',
          },
        },
      ],
    }}
    componentsProps={{
      tooltip: {
        sx: {
          backgroundColor: '#FFFFFF', 
          color: 'black',             
          fontSize: '0.85rem',       
        },
      },
      arrow: {
        sx: {
          color: '#FFFFFF',           
        },
      },
    }}
  >
    <InfoIcon sx={{ fontSize: '2rem', cursor: 'pointer' }} />
  </Tooltip>
  <Typography variant="caption">Help</Typography>
</Box>
        </Toolbar>
      </AppBar>

      {/* Map Container */}
      <div style={{ paddingTop: '100px', height: 'calc(100vh - 165px)', overflow: 'hidden', position: 'relative', zIndex: 1 }}>
        <MapContainer center={[28.5384, -81.3789]} zoom={10} style={{ height: "100%", width: "100%", position: 'relative', zIndex: 0 }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationMarker />
          <div className="layers-control-container">
            <h3>Map Legend</h3>
            <LayersControl position="bottomright" collapsed={false}>
              <LayersControl.Overlay checked name="Farmers Market">
                <LayerGroup>
                  <MarkerClusterGroup chunkedLoading>
                    {resultsFarmersMarket.map((result, index) => (
                      <Marker
                        key={index}
                        position={[result.location_y as number, result.location_x as number]}
                        icon={customIconFarmersMarket}
                      >
                        <Popup>
                          <a href={result.media_website}>{result.media_website}</a>
                        </Popup>
                      </Marker>
                    ))}
                  </MarkerClusterGroup>
                </LayerGroup>
              </LayersControl.Overlay>
              <LayersControl.Overlay checked name="Walmart">
                <LayerGroup>
                  <MarkerClusterGroup chunkedLoading>
                    {walmart.map((walmart, index) => (
                      <Marker
                        key={index}
                        position={walmart.geocode as [number, number]}
                        icon={customIconWalmart}
                      >
                        <Popup>{walmart.popUp}</Popup>
                      </Marker>
                    ))}
                  </MarkerClusterGroup>
                </LayerGroup>
              </LayersControl.Overlay>
              <LayersControl.Overlay checked name="Publix">
                <LayerGroup>
                  <MarkerClusterGroup chunkedLoading>
                    {publix.map((publix, index) => (
                      <Marker
                        key={index}
                        position={publix.geocode as [number, number]}
                        icon={customIconPublix}
                      >
                        <Popup>{publix.popUp}</Popup>
                      </Marker>
                    ))}
                  </MarkerClusterGroup>
                </LayerGroup>
              </LayersControl.Overlay>
            </LayersControl>
          </div>
        </MapContainer>
      </div>

      {/* Footer: BottomNavigation */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 3, 
          bgcolor: 'rgba(0, 0, 0, 0.6)',
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            backgroundColor: 'transparent',
          }}
        >
          <BottomNavigationAction
            label="Healthy Living"
            icon={<SpaIcon />}
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
            label="Contact Us gquirk@valenciacollege.edu"
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
          <BottomNavigationAction
            label="About Us"
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
        </BottomNavigation>
      </Box>
    </div>
  );
}

export default MapPage;





