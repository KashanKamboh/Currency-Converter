import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgMagentaBright.bold("\n\t Wellcome to 'CodeWithKashaf' - Currency Converter \n"));
console.log("-" .repeat(59));

let exchange_rate: any = { 
    "USD": 1,
    "EUR": 1.1497,
    "JPY": 129.53,
    "CAD": 1.5500,
    "PHP": 59.99,
    "TWD": 35.99,
    "PKR": 280,
    "AUD": 1.65,

}

let user_name = await inquirer.prompt([
    {
        name : "from_currency",
        type : "list",
        message : chalk.whiteBright("Select the currency to convert from"),
        choices : ["USD", "EUR", "JYP", "CAD", "AUD", "PKR", "TWD", "PHP"]
    },
    {
        name : "to_currency",
        type : "list",
        message : chalk.whiteBright("Select the currency to convert into"),
        choices : ["USD", "EUR", "JYP", "CAD", "AUD", "PKR", "TWD", "PHP"]
    },
    {
        name : "amount",
        type : "input",
        message : chalk.bgBlackBright("\n\t Enter the amount to convert \n")
    }
])

let from_amount = exchange_rate[user_name.from_currency];
let to_amount = exchange_rate[user_name.to_currency];
let amount = user_name.amount

let basic_amount = amount / from_amount
let convert_amount = basic_amount * to_amount

console.log(chalk.bgGreenBright.bold(`\n\t Converted Amount =  ${convert_amount}\n`));