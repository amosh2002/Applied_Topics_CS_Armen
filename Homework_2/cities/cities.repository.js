const axios = require('axios');

module.exports = {

    async getCityDataByZipCode(zipCode) {
        const cityInfo = await axios({
            method: 'get',
            url: "https://api.zippopotam.us/us/" + zipCode
        });
        const retrievedData = cityInfo.data;
        const retrievedDataPlaces = retrievedData['places'][0];

        return `${retrievedDataPlaces['place name']},
            ${retrievedDataPlaces['state abbreviation']},
            ${retrievedData['country']}`;
    }

}