const express = require('express');
const app = express();
const citiesController = require('./cities/cities.controller');


app.listen(3000, () => {
    console.log(`App is running on port ${port}.`);
})

app.use('/cities', citiesController);