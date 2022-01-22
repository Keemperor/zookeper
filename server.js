const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const { animals } = require('./data/animals.json');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


/*app.get('/api/animals', (req, res) => {
res.send('Hello!');
});

app.get('/api/animals', (req, res) => {
  res.json(animals);
  });

function filterByQuery(query, animalsArray) {
    let filteredResults = animalsArray;
    if (query.diet) {
      filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
    }
    if (query.species) {
      filteredResults = filteredResults.filter(animal => animal.species === query.species);
    }
    if (query.name) {
      filteredResults = filteredResults.filter(animal => animal.name === query.name);
    }
    return filteredResults;
  };
  
function createNewAnimal(body, animalsArray) {
    console.log(body);
    // our function's main code will go here!
  
    // return finished code to post route for response
    return body;
  }

  app.listen(3001, () => {
  console.log('API server now on port 3001');
});

app.post('/api/animals', (req, res) => {
  // req.body is where our incoming content will be
  console.log(req.body);
   // set id based on what the next index of the array will be
   req.body.id = animals.length.toString();
  res.json(req.body);
});*/



 app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});