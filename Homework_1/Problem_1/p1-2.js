function getArrayMax(arr) {
    return new Promise(function (resolve, reject) {
        if (!Array.isArray(arr)) {
            reject('The input should be an array!');
        }
        let maxElement = arr[0];
        for (const element of arr) {
            if (typeof element !== 'number') {
                reject('All the elements of the array should be numbers!');
            }
            if (element > maxElement) {
                maxElement = element;
            }
        }
        setTimeout(() => {
            resolve(maxElement);
        }, 3000);
    });
}

getArrayMax([1, 2, 9, 6, 3, 6, 8, 2]).then(function (result) {
    console.log(result);
}).catch(function (error) {
    console.log(error);
});
