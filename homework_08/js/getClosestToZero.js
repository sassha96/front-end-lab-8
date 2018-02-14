function getClosestToZero() {
    let closer = Math.abs(arguments[0]);
    for (let i = 0; i < arguments.length - 1; i++) {
        if (Math.abs(arguments[i + 1]) < closer) { closer = arguments[i + 1]; }
    } return closer;
}