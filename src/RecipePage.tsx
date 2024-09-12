import React, {useState, useEffect} from 'react';
import { Container, Typography } from '@mui/material';
import axios from 'axios';

type FarmersMarket = {
  brief_des: String;
  location_street: String
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
      <p key={index}>{item.location_street}</p>
    )) : <p>Loading...</p>}
      </>;

      return el;
};

export default RecipePage;