function chessBoard() {
    let size = 8;
    let board = "";
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            if (((x+y) % 2) == 0) board += "#";
            else board += " ";
        }
        board += "\n";
    }
    return board;
}

function fizzBuzz() {
    let fizzBuzz = "";
    for (let i = 1; i <= 100; i++) {
        if (i%3 == 0 && i%5 == 0) fizzBuzz += "FizzBuzz\n"
        else if (i%3 == 0) fizzBuzz += "Fizz\n"
        else if (i%5 == 0) fizzBuzz += "Buzz\n";
        else fizzBuzz += i + "\n";
    }
    return fizzBuzz;
}
//console.log(chessBoard());
console.log(fizzBuzz());