async function calculatePercentage(value, total) {
    if (typeof total !== 'number' || total <= 0) {
        throw new Error('Total should be a positive number!');
    }
    if (typeof value !== 'number' || value < 0) {
        throw new Error('Value should be a positive number!');
    }
    return ((value * 100) / total);
}

calculatePercentage(10, 50).
    then(function (result) {
        console.log(result);
    }).catch(function (error) {
        console.log(error);
    });