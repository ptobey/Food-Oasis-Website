import React from 'react';
import { Container, Typography } from '@mui/material';

const MapPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4">Map of Nearby Food Suppliers</Typography>
      <Typography>
        This is where the map will be displayed.
      </Typography>
    </Container>
  );
};

export default MapPage;