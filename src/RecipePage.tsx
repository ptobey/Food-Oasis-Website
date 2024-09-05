import React from 'react';
import { Container, Typography } from '@mui/material';

const RecipePage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4">Searchable Recipe Finder</Typography>
      <Typography>
        This is where the recipe search functionality will be displayed.
      </Typography>
    </Container>
  );
};

export default RecipePage;