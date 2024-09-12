import React, {useState, useEffect} from 'react';
import { Container, Paper, Typography } from '@mui/material';
import axios from 'axios';

type FarmersMarket = {
  brief_desc: String;
  location_street: String;
  location_city: String;
}

const RecipePage: React.FC = () => {

 const url = 'https://www.usdalocalfoodportal.com/api/farmersmarket/?apikey=U0lsUI6Xi9&state=fl'
 const [result, setResult] = useState(undefined as unknown as FarmersMarket[])
 
  const fetchInfo = () => {
    return axios.get(url).then((response: any) => {
      setResult(response.data.data)
      console.log(response)
    });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  let el = <>
    <Container>
      <Typography variant="h4">Searchable Recipe Finder</Typography>
      <Typography>
        This is where the recipe search functionality will be displayed.
        
      </Typography>

   
    </Container>
    {result && result.length > 0 ? result.map((item, index) => (
      <Paper elevation={20} sx={{padding:1, marginTop:2}}>
       <p key={index}>{item.location_street}</p>
       <p key={index}>{item.location_city}</p>
      </Paper>
    )) : <p>Loading...</p>}
      </>;

      return el;
};

export default RecipePage;