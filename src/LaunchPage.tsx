import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  ButtonGroup,
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SpaIcon from '@mui/icons-material/Spa';
import PhoneIcon from '@mui/icons-material/Phone';
import GroupsIcon from '@mui/icons-material/Groups';

const LaunchPage: React.FC = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0); 

  const handleMapClick = () => {
    navigate("/map");
  };

  const handleRecipeClick = () => {
    navigate("/recipes");
  };

  const handleNewButtonClick = () => {
    navigate('/nutrition');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: 'url(/backgroundThree.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        margin: 0,
        padding: 0,
      }}
    >
      {/* Header with Logo */}
      <AppBar
        position="fixed" 
        sx={{
          bgcolor: 'rgba(0, 0, 0, 0.7)', 
          padding: '0', 
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          margin: 0,
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'column', 
            alignItems: 'center', 
            width: '100%',
            margin: 0,
            padding: 0,
          }}
        >
          {/* Centered Logo */}
          <Box>
            <img
              src="/newLogo.png" 
              alt="Logo"
              style={{ height: '210px', width: 'auto', opacity: 0.81 }} 
            />
          </Box>

          {/* Button Group centered below the logo */}
          <ButtonGroup
            variant="text"
            aria-label="Basic button group"
            sx={{
              color: '#FFFFFF',
              marginTop: '16px',
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
            <Button onClick={handleMapClick} sx={{ color: '#FFFFFF', fontSize: '20px' }}>
              Explore Map
            </Button>
            <Button onClick={handleRecipeClick} sx={{ color: '#FFFFFF', fontSize: '20px' }}>
              Search Recipes
            </Button>
            <Button onClick={handleNewButtonClick} sx={{ color: '#FFFFFF', fontSize: '20px' }}>
              Nutrition Guide
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>

      

      {/* Footer: BottomNavigation */}
      <Box
        sx={{
          position: 'fixed', 
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
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
    </Box>
  );
};

export default LaunchPage;