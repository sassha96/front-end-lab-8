increment = (num) => { return (num + 1); }

function getTransformedArray(array, increment) {
    let transArray = [];

    forEach((array), function (element) {
        transArray.push(increment(element))
    })
    return transArray;
    console.log(transArray);
}