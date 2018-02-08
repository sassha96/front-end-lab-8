let ammount1 = parseFloat(prompt("Enter first amount"));
let ammount2 = parseFloat(prompt("Enter second amount"));
let dollar = 27.1196;
let euro = 33.4602;

if (ammount1 <= 0 || ammount2 <= 0 || Number.isNaN(ammount1) || Number.isNaN(ammount2))
    console.log("Incorrect data");
else
    console.log(ammount1 + " euros are equal " + (ammount1 * euro).toFixed(2) + " UAH, " + ammount2 + " dollars are equal " + (ammount2 * dollar).toFixed(2) + " UAH, 1 euro is equal " + (euro / dollar).toFixed(2) + " dollars.");
