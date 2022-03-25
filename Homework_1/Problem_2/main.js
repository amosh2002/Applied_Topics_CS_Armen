const helper = require('./helper');
module.exports = searchAndDownload;

async function searchAndDownload(movieName) {
    helper.findMovie(movieName).then(function (result) {
        helper.download(result).then(function (result1) {
            console.log(result1);
            return true;
        }).catch(function (error) {
            throw new Error('An error occurred while downloading the movie: ' + error);
        })
    }).catch(function (error1) {
        console.log(error1);
    });
}

searchAndDownload('The shawsha');