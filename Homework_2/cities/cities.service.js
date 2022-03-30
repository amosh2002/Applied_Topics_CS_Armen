const NotFoundError = require('../common/errors/not-found.error');
let citiesRepository = require('./cities.repository');

module.exports = {

    async getCityByZipCode(zipCode) {
        try {
            return await citiesRepository.getCityDataByZipCode(zipCode);

        } catch {
            throw new NotFoundError(`No cities found!`);
        }

    }

}
