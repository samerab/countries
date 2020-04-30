const express = require('express')
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/countries/load', (req, res) => {
  res.send([11,44])
});

app.get('/name', (req, res) => {
    res.send('Rasheed!')
  });

  

app.listen(3000, () => {
  console.log('running...')
});