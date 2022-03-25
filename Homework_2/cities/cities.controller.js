const asyncHandler = require('express-async-handler');
const express = require('express');
const citiesService = require('./cities.service');

const route = express.Router();


route.get('/:zipCode', asyncHandler(async (req, res) => {
    res.send(await citiesService.getCityByZipCode(req.params.zipCode));
}))

module.exports = route;