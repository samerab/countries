const express = require('express')
const app = express();

app.get('/age', (req, res) => {
  res.send('11')
});

app.get('/name', (req, res) => {
    res.send('Rasheed!')
  });

app.listen(3000, () => {
  console.log('running...')
});