increment = (num) => { return (num + 1); }

function getTransformedArray(array, increment) {
    let transArray = [];

    forEach((array), function (calling) {
        transArray.push(increment(calling))
    })
    return transArray;
    console.log(transArray);
}