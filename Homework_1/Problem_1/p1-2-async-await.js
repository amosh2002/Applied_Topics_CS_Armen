async function getArrayMax(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('The input should be an array!');
    }
    let maxElement = arr[0];
    for (const element of arr) {
        if (typeof element !== 'number') {
            throw new Error('All the elements of the array should be numbers!');
        }
        if (element > maxElement) {
            maxElement = element;
        }
    }
    await new Promise((resolve) => {
        setTimeout(resolve, 3000);
    })

    return maxElement;
}

getArrayMax([1, 2, 9, 6, 3, 6, 8, 2]).then(function (result) {
    console.log(result);
}).catch(function (error) {
    console.log(error);
});
