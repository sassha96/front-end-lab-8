predicateFunction = (num) => {
    return num > 3;
}
function getFilteredArray(array, predicateFunction) {
    let filteredArray = [];
    forEach((array), function (element) {
        if (predicateFunction(element))
            filteredArray.push(element)
    })
    return filteredArray;
    console.log(filteredArray);
}