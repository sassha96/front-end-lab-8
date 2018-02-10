let decision = confirm("Do you want to play a game?")

if (decision === false) {
    console.log("You did not become a millionaire")
}
else {
    let rangeMultiplicator = 5;
    let moneyMultiplicator = 1;
    let userChoice;
    let totalPrize = 0;
    attemps = 3;
    let currentPrize;
    let num = Math.floor(Math.random() * (rangeMultiplicator + 1));
    for (let i = 0; i < 3; i++) {

        currentPrize = 10 * moneyMultiplicator;
        switch (attemps) {
            case 2: currentPrize = parseInt(10 / 2 * moneyMultiplicator); break;
            case 1: currentPrize = parseInt(5 / 2 * moneyMultiplicator); break;
        }
        userChoice = prompt("Enter a number from 0 to " + rangeMultiplicator + "\nAttempts left : " + attemps + "\nTotal prize: " + totalPrize + "$" + "\nPossible prize on current attempt: " + currentPrize + "$", "0");
        if (userChoice == num) {
            switch (attemps) {
                case 3: totalPrize += 10 * moneyMultiplicator; break;
                case 2: totalPrize += parseInt(5 * moneyMultiplicator); break;
                case 1: totalPrize += parseInt(5 / 2 * moneyMultiplicator); break;
            }
            decision = confirm("Congrats, do you want to continue the game?");
            if (decision == false) {
                console.log("Thank you for a game. Your prize is:" + totalPrize);
                decision = confirm("Do you wanna play again?");
                if (decision == false) {
                    break;
                } else {
                    num = Math.floor(Math.random() * (rangeMultiplicator + 1));
                    totalPrize = 0;
                    i = -1;
                    rangeMultiplicator = 5;
                    moneyMultiplicator = 1;
                    attemps = 3;
                    continue;
                }
            } else {
                num = Math.floor(Math.random() * (rangeMultiplicator + 1));
                i = -1;
                attemps = 3;
                rangeMultiplicator *= 2;
                moneyMultiplicator *= 3;
                continue;
            }
        } else {
            attemps -= 1;
            if (attemps == 0) {
                console.log("Thank you for a game. Your prize is: " + totalPrize);
                decision = confirm("Do you want to play again?");
                if (decision == true) {
                    num = Math.floor(Math.random() * (rangeMultiplicator + 1));
                    totalPrize = 0;
                    i = -1;
                    rangeMultiplicator = 5;
                    moneyMultiplicator = 1;
                    attemps = 3;
                    continue;
                } else { break; }
            }
        }
    }
}