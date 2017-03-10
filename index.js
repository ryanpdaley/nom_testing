var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
console.log(message);

const error = chalk.bold.red;
console.log(error('Error!'));