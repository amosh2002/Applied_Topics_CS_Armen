const rewire = require("rewire");
const citiesService = rewire('../../cities/cities.service');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();

describe("Test for citiesService file", function () {
    describe("Test for getCityByZipCode function", function () {
        it("Returning results", function () {
            //TODO use rewire to use Normal case
            //TODO use rewire to test Error case
            //TODO use faker
        })
    })
})