const express = require('express');
const app = express();
const citiesController = require('./cities/cities.controller');
const errorHandler = require('./common/middlewares/error-handler.middleware');



app.listen(3000, () => {
    console.log(`App is running on port 3000.`);
})

app.use('/cities', citiesController);

app.use(errorHandler);