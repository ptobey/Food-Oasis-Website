import React, {useState, useEffect} from 'react';
import { Container, Typography } from '@mui/material';
import axios from 'axios';

const RecipePage: React.FC = () => {

 const url = 'https://www.usdalocalfoodportal.com/api/farmersmarket/?apikey=U0lsUI6Xi9&x=-84&y=42&state=fl'
 const [data, setData] = useState([])

 
  const fetchInfo = () => {
    return axios.get(url).then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);



  return (

    
    <Container>
      <Typography variant="h4">Searchable Recipe Finder</Typography>
      <Typography>
        This is where the recipe search functionality will be displayed.

        <center>
        {data.map((dataObj, index) => {
          return (
            <div
              style={{
                width: "15em",
                backgroundColor: "#CD8FFD",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.listing_name}</p>
            </div>
          );
        })}
      </center>
      </Typography>

   
    </Container>



  );
};

export default RecipePage;