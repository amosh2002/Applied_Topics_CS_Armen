const axios = require('axios');

module.exports = {

    async getCityDataByZipCode(zipCode) {
        const cityInfo = await axios({
            method: 'get',
            url: "https://api.zippopotam.us/us/" + zipCode
        });
        return cityInfo.data;
    }

}