let n = prompt("Enter natural number from 1 to 20", "");

if (n < 1 || n > 20) {
    console.error('Incorrect!');
} else {
    let pyramid = [], increment = 1;
    for (let i = 0; i < n; i++) {
        pyramid[i] = '   '.repeat(n - i + 1) + '[~]'.repeat(i + increment);
        increment++;
        console.log(pyramid[i]);
    }
}