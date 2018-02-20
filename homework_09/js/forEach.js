calling = (element) => { return element; }

function forEach(array, calling) {
    for (let i = 0; i < array.length; i++) {
        calling(array[i]);
    }
    return array;
}