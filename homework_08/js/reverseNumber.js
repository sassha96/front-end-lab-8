function reverseNumber(num) {
    let numStr = num.toString();
    let reversed = [];
    let zeroCheck = false;
    for (let i = numStr.length - 1; i >= 0; i--) {
        if (numStr[i] === '-') {
            reversed.unshift('-');
            continue;
        }
        if (zeroCheck === false && numStr[i] === '0') {
            continue;
        }
        zeroCheck = true;
        reversed.push(numStr[i]);
    }
    console.log(reversed.join(''));
}