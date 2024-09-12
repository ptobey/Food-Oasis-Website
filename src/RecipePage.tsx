import React, {useState, useEffect} from 'react';
import { Container, Typography } from '@mui/material';
import axios from 'axios';

const RecipePage: React.FC = () => {

 const url = 'https://www.usdalocalfoodportal.com/api/farmersmarket/?apikey=U0lsUI6Xi9&state=fl'
 const [data, setData] = useState([])
 const [result, setResult] = useState(null)

 
  const fetchInfo = () => {
    return axios.get(url).then((result) => setResult(result));
  };

  useEffect(() => {
    fetchInfo();
  }, []);



  return (

    
    <Container>
      <Typography variant="h4">Searchable Recipe Finder</Typography>
      <Typography>
        This is where the recipe search functionality will be displayed.
        <p>{result}</p>
        
      </Typography>

   
    </Container>



  );
};

export default RecipePage;