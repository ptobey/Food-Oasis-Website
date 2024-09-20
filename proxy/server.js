const express = require('express');
const request = require('request');
const qs = require('qs');

require('dotenv').config();

const app = express();
const TOKEN_URL = 'https://oauth.fatsecret.com/connect/token';
const API_URL = "https://platform.fatsecret.com/rest";

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
      scope: 'basic',
    }),
  };

  request(tokenOptions, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return res.status(500).json({ type: 'error', message: error ? error.message : 'Unknown error' });
    }
    let token = JSON.parse(body).access_token;
    const apiOptions = {
      url: API_URL+req.url,
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
})

// Start the server
app.listen(5000, () => console.log(`listening on 5000`))

