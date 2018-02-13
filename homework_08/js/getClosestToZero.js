function getClosestToZero() {
    let temp = Math.abs(arguments[0]);
    for (let i = 0; i < arguments.length - 1; i++) {
        if (Math.abs(arguments[i] + 1) < temp || arguments[i + 1] === 0) { temp = arguments[i + 1]; }
    } return temp;
}