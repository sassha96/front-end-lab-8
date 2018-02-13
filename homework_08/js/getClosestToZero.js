function getMin() {
    let min = arguments[0];
    for (let i = 0; i < arguments.length - 2; i++) {
        if (arguments[i + 1] < arguments[i + 2]) { min = arguments[i + 1]; }
    }
    return min;
}