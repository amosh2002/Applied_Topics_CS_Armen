const lodash = require('lodash');
const movie_dataset = require('./movie_dataset.json');
module.exports = { findMovie, download };


async function findMovie(movieName) {
    if (!movieName || movieName === "") {
        throw new Error('The input should be an array!');
    }

    let found_id = lodash.find(movie_dataset.movies, function (movie_item) {
        return movie_item.title.toLowerCase().includes(movieName.toLowerCase());
    });
    if (!found_id) throw new Error("No movies found");
    return found_id;
}

async function download(id) {
    if (!id || id === "") {
        throw new Error('No movie to download!');
    }
    if (id < 0) {
        throw new Error('Invalid movie ID');
    }
    let returnValue = {
        success: true,
        message: 'Successfully downloaded!'
    };

    await new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });

    return returnValue;


}