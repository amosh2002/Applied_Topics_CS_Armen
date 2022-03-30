const rewire = require("rewire");
const citiesRepository = rewire('../../cities/cities.repository');
const axios = require('axios');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const sinon = require('sinon');
chai.use(chaiAsPromised);
const expect = chai.expect;
chai.should();

describe("Testing cities.repository file.", function () {
    describe("Testing the 'getCityDataByZipCode' function.", function () {
        const stubbeedAxiosGet = sinon.stub(axios, "get")
            .withArgs("https://api.zippopotam.us/us/90210")
            .resolves(Promise.resolve({ data: '{"post code": "90210", "country": "United States", "country abbreviation": "US", "places": [{"place name": "Beverly Hills", "longitude": "-118.4065", "state": "California", "state abbreviation": "CA", "latitude": "34.0901"}]}' }));

        citiesRepository.__set__("cityInfo", stubbeedAxiosGet);

        it("Returns a city data correctly (working with stub).", function () {
            expect(citiesRepository.getCityDataByZipCode("90210").should.eventually.be.equal('Beverly Hills, CA, United States'));
        })

        it("Check called only once", function () {
            expect(sinon.assert.calledOnce(axios.get));
        })
    })

});