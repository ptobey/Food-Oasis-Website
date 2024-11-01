import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material'; 

const NutritionPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Nutrition Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Healthy Foods</Typography>
              <Typography variant="body2">
                Information about health benefits.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NutritionPage;
