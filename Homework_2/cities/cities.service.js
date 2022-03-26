const NotFoundError = require('../common/error/not-found.error');
const citiesRepository = require('./cities.repository');

module.exports = {

    async getCityByZipCode(zipCode) {
        try {
            return await citiesRepository.getCityDataByZipCode(zipCode);

        } catch (error) {
            throw new NotFoundError(`No cities found!`);
        }

    }

}
