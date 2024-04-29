#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random nuber :Done
// 2) user input for guessing number :Done
// 3) compare user input with computer generated number and show result :Done
console.log("WELCOME TO NUMBER GUESSING GAME");
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a between 1-10: ",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations! YOU GUESSED RIGHT NUMBER.");
}
else {
    console.log("YOU GUESSED WRONG NUMBER");
}
