import React, {useState, useEffect} from 'react';
import { Container, Paper, Typography } from '@mui/material';
import axios from 'axios';
import { red } from '@mui/material/colors';
import { Gradient } from '@mui/icons-material';

type FarmersMarket = {
  brief_desc: String;
  contact_email: String;
  contact_name: String;
  contact_phone: String;
  directory_name: String;
  directory_type: String;
  distance: Number;
  listing_desc: String;
  listing_id: Number;
  listing_image: String;
  listing_name: String;
  location_address: String;
  location_city: String;
  location_state: String;
  location_street: String;
  location_x: Number;
  location_y: Number;
  location_zipcode: Number;
  media_blog: String;
  media_facebook: String;
  media_instagram: String;
  media_pinterest: String;
  media_twitter: String;
  media_website: String;
  media_youtube: String;
  mydesc: String;
  term: String;
  update_time: String;
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
      <Paper elevation={25} sx={{padding:3, marginTop:2, color:"goldenrod" ,bgcolor:'aquamarine',boxShadow:20, fontWeight:'bold', fontsize:'20'


      }}>
       <p key={index}>{item.location_street}</p>
       <p key={index}>{item.location_city}</p>
      </Paper>
    )) : <p>Loading...</p>}
      </>;

      return el;
};

export default RecipePage;