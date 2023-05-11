const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', async (req, res) => {
  res.send('Hello there!');
});

app.get('/show', async (req, res) => {
  try {
    const response = await axios.get('https://mocki.io/v1/28378ac3-4d7d-428a-9418-70354eeb86ef');
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving data from the API');
  }
});

app.get('/achievement', async (req, res) => {
  try {
    const response = await axios.get('https://mocki.io/v1/28378ac3-4d7d-428a-9418-70354eeb86ef');
    const data = response.data;
    const achievement = data[0].achievement;
    res.send(achievement);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving data from the API');
  }
});

app.get('/greet', async (req, res) => {
  try {
    const response = await axios.get('https://mocki.io/v1/28378ac3-4d7d-428a-9418-70354eeb86ef');
    const data = response.data;
    const sayGreeting = data[1].sayGreeting;
    res.send(sayGreeting);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving data from the API');
  }
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
