import React from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'; 


const LaunchPage: React.FC = () => {
  const navigate = useNavigate();

  const handleMapClick = () => {
    navigate('/map');
  };

  const handleRecipeClick = () => {
    navigate('/recipes');
  };

  const handleNewButtonClick = () => {
    navigate('/new-feature');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column', // Align items in a column
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(/backgroundTwo.jpeg)', // Background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
      }}
    >
      {/* Top Center Position */}
      <Box
        sx={{
          position: 'absolute', 
          top: 16, // Space from the top 
          left: '50%', // Center horizontally
          transform: 'translateX(-50%)', // Center logo exactly
          display: 'flex',
          justifyContent: 'center',
          zIndex: 1, 
        }}
      >
        <img
            src="/logo.png" // Path to logo
            alt="logo"
            style={{ height: '250px', width: 'auto', opacity: 0.8 }} 
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          bgcolor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background for text
          p: 4,
          borderRadius: 2,
          zIndex: 0, 
        }}
      >
        
        <Typography variant="h3" gutterBottom sx={{ color: '#FFFFFF' }}>
          An Oasis to a Healthy Lifestyle
        </Typography>
        <Typography variant="h6" sx={{color: '#FFFFFF', mb: 2 }}  >
          Choose an option below to get started:
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: '100%',
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#000000', // Black background color
              color: '#FFFFFF', // White text color
              '&:hover': {
                backgroundColor: '#333333', // Darker shade of black for hover
              },
            }}
            onClick={handleMapClick}
            endIcon={<KeyboardDoubleArrowRightIcon />}
          >
            Search Local Fresh Markets
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#000000', // Black background color
              color: '#FFFFFF', // White text color
              '&:hover': {
                backgroundColor: '#333333', // Darker shade of black for hover
              },
            }}
            onClick={handleRecipeClick}
            endIcon={<KeyboardDoubleArrowRightIcon />}
          >
            Discover Recipes
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#000000', // Black background color
              color: '#FFFFFF', // White text color
              '&:hover': {
                backgroundColor: '#333333', // Darker shade of black for hover
              },
            }}
            onClick={handleNewButtonClick}
            endIcon={<KeyboardDoubleArrowRightIcon />}
          >
            New Button
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LaunchPage;



