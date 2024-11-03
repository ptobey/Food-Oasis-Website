const express = require('express');
const request = require('request');
const qs = require('qs');
const {Client} = require('pg');

require('dotenv').config();

const app = express();
const TOKEN_URL = 'https://oauth.fatsecret.com/connect/token';
const API_URL = "https://platform.fatsecret.com/rest";

const dbConfig = {
  user: process.env.user,
  password: process.env.password,
  host: process.env.host,
  database: process.env.database,
  port: process.env.port
}

const client = new Client(dbConfig);

client.connect()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.post('/**', (req, res) => {
  const tokenOptions = {
    url: TOKEN_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: qs.stringify({
      client_id: process.env.client_id,
      client_secret: process.env.client_secret,
      grant_type: 'client_credentials',
      scope: 'premier',
    }),
  };

  request(tokenOptions, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return res.status(500).json({ type: 'error', message: error ? error.message : 'Unknown error' });
    }

    let token = JSON.parse(body).access_token;

    const apiOptions = {
      url: API_URL + req.url,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    };

    request(apiOptions, (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: error ? error.message : 'Unknown error' });
      }
      
      res.json(JSON.parse(body));
  });
});
});
app.get('/getLocations', async (req, res) => {
    client.query('SELECT store_id, type, longitude, latitude FROM Food_Sources').then((response)=>{
      res.json(response.rows)
  })
 
});
app.get('/getStoreDetails/:id', async (req, res) => {
  client.query(`SELECT street_address, city, state, zip, hours, phone_number, image_url, website FROM Food_Sources WHERE store_id = ${req.params.id}`).then((response)=>{
    res.json(response.rows)
})

})

app.listen(5000, () => console.log(`listening on 5000`));

process.on('exit', () => client.end());