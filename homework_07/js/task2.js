let decision = confirm("Do you want to play a game?")

if (decision == false) {
    console.log("You did not become a millionaire")
}
else {
    let num = Math.floor(Math.random() * 6);
    let attemps = 3;
    let userChoice;
    let totalPrize = 0;
    let currentPrize = 10;
    for (let i = 1; i < 4; i++) {
        userChoice = prompt("Enter a number from 0 to 5\nAttempts left : " + attemps + "\nTotal prize: " + totalPrize + "\nPossible prize on current attempt: " + currentPrize, "");
        if (userChoice != num) {
            attemps -= 1;
            switch (attemps) {
                case 2: currentPrize = 5; break;
                case 1: currentPrize = 2; break;
            }


        } else {
            switch (attemps) {
                case 1: totalPrize += 2; break;
                case 2: totalPrize += 5; break;
                case 3: totalPrize += 10; break;
            }
            alert("Congrats!");
            break;
        }
    }
    alert("Total prize is: " + totalPrize);
    confirm("Do you want to continue the game?");

}
