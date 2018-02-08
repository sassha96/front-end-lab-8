let a = parseFloat(prompt("Enter a side:"));
let b = parseFloat(prompt("Enter b side:"));
let c = parseFloat(prompt("Enter c side:"));
function typeOfTriangle(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0 || Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c))
        return false;
    else {
        if (a === b && b === c)
            return "equilateral";
        else if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) || Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2) || Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2))
            return "right";
        else if ((a === b && b != c) || (a === c && c != b) || (b === c && c != a))
            return "isosceles";
        else if (a != b && b != c)
            return "scalene";
    }
}
let triangle = typeOfTriangle(a, b, c);
function areaFunc(a, b, c) {
    let s = (a + b + c) / 2;
    let areaa = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    if (areaa > 0) {
        return areaa;
    }
    else return false;
}
let area = areaFunc(a, b, c);
if (area != false && triangle != false) {
    if (Number.isInteger(area) != true) {
        area = area.toFixed(2);
        console.log("The type of triangle is " + triangle + " triangle and square is " + area);
    }
    else
        console.log("The type of triangle is " + triangle + " triangle and square is " + area);
}
else
    console.log("Incorrect data");
    