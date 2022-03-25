function calculatePercentage(value, total) {
    return new Promise(function (resolve, reject) {
        if (typeof total !== 'number' || total <= 0) {
            reject('Total should be a positive number!');
        }
        if (typeof value !== 'number' || value < 0) {
            reject('Value should be a positive number!');
        }
        resolve((value * 100) / total)
    });
}

calculatePercentage(10, 50).then(function (result) {
    console.log(result);
}).catch(function (error) {
    console.log(error);
});