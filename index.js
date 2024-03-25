#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to Number Guessing Game Challenge (^_^)");
const answer = await inquirer.prompt([
    {
        name: "userGuessedNymber",
        type: "number",
        message: "Please guess a Number between 1 to 6",
    }
]);
if (answer.userGuessedNymber === randomNumber) {
    console.log("Congratulation! you guessed right number .");
}
else {
    console.log("You guessed wrong number.");
}
