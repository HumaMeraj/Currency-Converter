#! /usr/bin/env  node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magenta.bold("\n \t Welcome to 'Coding With Huma' -Currency Conventor\n"));

// Define the list of Currencies and their exchange rates
let exchange_rates: any = {
   "USD": 1,        // Base currency
   "EURO": 0.9,     // Europeon currency (Euro)
   "JAP": 113,      // Japanese currency (Yen)
   "CAD": 1.3,      // Canadian Dollar
   "AUD": 1.65,     // Australien Dollar
   "PKR": 277.70,        // Pakistani Rupees

}
// prompt the user to select currencies to convert  from and to

let user_answer = await inquirer.prompt([
    {
      name : "from_currency",
      type: "list",
      message: "Select the currency  to convert from:",
      choices:["USD","EURO","JAP","CAD","AUD","PKR"]
    },
    {
        name : "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices:["USD","EURO","JAP","CAD","AUD","PKR"]
    },
    {
        name:"amount",
        type:"input",
        message:"Enter the amount to convert:",
    }
]);
// Perform currecy conversion by using formula
let from_amount = exchange_rates[user_answer.from_currency];
let to_amount = exchange_rates[user_answer.to_currency];
let amount = user_answer.amount

//Formula of currency conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

// Display the converted amount
console.log (`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);

