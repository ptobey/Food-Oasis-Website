const express = require('express');
const request = require('request');
const qs = require('qs');

require('dotenv').config();

const app = express();
const API_URL = 'https://oauth.fatsecret.com/connect/token';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.post('/api', (req, res) => {
  const options = {
    url: API_URL,
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

  request(options, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      return res.status(500).json({ type: 'error', message: error ? error.message : 'Unknown error' });
    }

    res.json(JSON.parse(body));
  });
});

// Start the server
app.listen(5000, () => console.log(`listening on 5000`));
