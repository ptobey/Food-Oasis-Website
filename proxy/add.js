const {Client} = require('pg');
const fs = require('fs');

require('dotenv').config();

const dbConfig = {
  user: process.env.user,
  password: process.env.password,
  host: process.env.host,
  database: process.env.database,
  port: process.env.port
}

const client = new Client(dbConfig);


client.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("Connection error", err.stack));

fs.readFile('./test.json', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading JSON file:", err);
    return;
  }

  const stores = JSON.parse(data);

  const queryText = `
    INSERT INTO Food_Sources (
      street_address, city, state, zip, hours, latitude, longitude,
      phone_number, image_url, type, website, last_updated
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
  `;

  stores.forEach(store => {
    const values = [
      store.address.streetAddress,
      store.address.city,
      store.address.state,
      store.address.zip,
      JSON.stringify(store.hours),
      store.lat,
      store.long,
      store.phoneNumber,
      store.image,
      store.type,
      store.website,
      store.lastUpdated,
    ];

    console.log(      store.address.zip.length)

    client.query(queryText, values)
      .then(() => console.log("Inserted store:", store.address.streetAddress))
      .catch(err => console.error("Insert error:", err.stack));
  });

  client.query('SELECT zip FROM Food_Sources').then((response)=>{
    console.log(response.rows[0].zip.length)
})
});

process.on('exit', () => client.end());