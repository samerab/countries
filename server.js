const express = require('express');
const fs = require('fs');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/countries/load', (req, res) => {
  const countriesJson = fs.readFileSync("countries.json");
  const countries = JSON.parse(countriesJson);
  res.send(countries);
});

app.get('/name', (req, res) => {
    res.send('Rasheed!')
  });

  

app.listen(3000, () => {
  console.log('running...')
});