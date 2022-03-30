const axios = require('axios');

let cityInfo;

async function getAxiosResult(zipCode) {
    return await axios.get(
        "https://api.zippopotam.us/us/" + zipCode
    );
}
module.exports = {
    async getCityDataByZipCode(zipCode) {
        cityInfo = await getAxiosResult(zipCode);

        const retrievedData = cityInfo.data;
        const retrievedDataPlaces = retrievedData['places'][0];

        return `${retrievedDataPlaces['place name']},
            ${retrievedDataPlaces['state abbreviation']},
            ${retrievedData['country']}`;
    }

}