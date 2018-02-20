calling = (element) => console.log(element);

function forEach(array, calling) {
    for (let i = 0; i < array.length; i++) {
        calling(array[i]);
    }
}