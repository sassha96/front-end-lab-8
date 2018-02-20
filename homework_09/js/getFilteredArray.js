predicateFunction = (num) => {
    return num > 3;
}
function getFilteredArray(array, predicateFunction) {
    let filteredArray = [];
    forEach((array), function (calling) {
        if (predicateFunction(calling))
            filteredArray.push(calling)
    })
    return filteredArray;
    console.log(filteredArray);
}