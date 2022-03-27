const citiesRepository = require('../../cities/cities.repository');
const axios = require('axios');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon')
chai.use(chaiAsPromised);
const expect = chai.expect;
chai.should();

describe("Testing cities.repository file.", function () {

    describe("Testing the 'getCityDataByZipCode' function.", function () {
        it("Returns a city data correctly (working with stub).", function () {
            //TODO understand issue
            const stubbeedAxiosGet = sinon.stub(axios, "get")
                .withArgs("https://api.zippopotam.us/us/90210")
                .returns('{"post code": "90210", "country": "United States", "country abbreviation": "US", "places": [{"place name": "Beverly Hills", "longitude": "-118.4065", "state": "California", "state abbreviation": "CA", "latitude": "34.0901"}]}');
            expect(citiesRepository.getCityDataByZipCode("90210").should.be.equal('Beverly Hills, CA, United States'));
        })
    })

});