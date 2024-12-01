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
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import SpaIcon from '@mui/icons-material/Spa';
import PhoneIcon from '@mui/icons-material/Phone';
import GroupsIcon from '@mui/icons-material/Groups';

const LaunchPage: React.FC = () => {
  // Translation hook for managing language
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);

  // Function to toggle between English and Spanish
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  // Functions to handle button clicks for navigation
  const handleMapClick = () => {
    navigate('/map');
  };

  const handleRecipeClick = () => {
    navigate('/recipes');
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
      {/* Header with Logo and Translation Button */}
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
              alt={t('logo_alt')}
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
              {t('explore_map')}
            </Button>
            <Button onClick={handleRecipeClick} sx={{ color: '#FFFFFF', fontSize: '20px' }}>
              {t('search_recipes')}
            </Button>
            <Button onClick={handleNewButtonClick} sx={{ color: '#FFFFFF', fontSize: '20px' }}>
              {t('nutrition_guide')}
            </Button>
          </ButtonGroup>

          {/* Translation Button */}
          <Button
            variant="contained"
            onClick={toggleLanguage}
            sx={{
              bgcolor: '#ffffff',
              color: '#000',
              marginTop: '16px',
              zIndex: 1300,
            }}
          >
            {i18n.language === 'en' ? 'Switch to Spanish' : 'Cambiar a Inglés'}
          </Button>
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
            label={t('healthy_living')}
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
            label={t('contact_us')}
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
            label={t('about_us')}
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
