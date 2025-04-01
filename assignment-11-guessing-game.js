function main() {
    // Jane Pugh
    // CTI-110.2236
    var value;
    var number;

    value = Math.floor(Math.random() * 9);
    window.alert("Guess a value between 0 and 9");
    number = Number(window.prompt('Enter a value for number'));
    while (number != value && number != 999) {
        if (number > value) {
            window.alert("Too high");
        } else {
            window.alert("Too low");
        }
        window.alert("Guess again");
        number = Number(window.prompt('Enter a value for number'));
    }
    if (number == value) {
        window.alert("Congrats! You won!");
    } else {
        window.alert("Game Over! Goodbye!");
    }
}
