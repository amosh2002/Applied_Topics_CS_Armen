const rewire = require("rewire");
const citiesService = rewire('../../cities/cities.service');
const citiesRepository = require('../../cities/cities.repository');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();
const expect = chai.expect;
const faker = require('faker');
const sinon = require('sinon');

describe("Test for citiesService file", function () {
    describe("Test for getCityByZipCode function", function () {
        const stubbeedCitiesRepository = sinon.stub(citiesRepository, "getCityDataByZipCode")
            .withArgs("90210")
            .returns('Beverly Hills, CA, United States');

            citiesService.__set__("citiesRepository", stubbeedCitiesRepository);

        it("verify the normal case, with 90210 zipcode", function () {
            expect(citiesService.getCityByZipCode(90210))
                .to.eventually.be.equal('Beverly Hills, CA, United States');
        })
        it("verify the error case", function () {
            expect(citiesService.getCityByZipCode(faker.address.zipCode()))
                .to.eventually.be.rejectedWith('No cities found!');
        })
    })
})