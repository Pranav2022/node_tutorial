// node js is an open source cross platform javascript runtime environment where we can code outside the browser.
// it is used to build backend services for client side applications like creating apis, authentication, file handling and talking to database
// Node js can be used to build data intensive highly scalable and real time web apps.

// import calculator

const calculator = require('./calculator');
const calc = require('./text');
const fs = require('fs');
let name = "Pranav";
let age = 23;

console.log(name+" "+age);
name
age

// console.log(global)

// global.setInterval(function(){
//     console.log("hi..");
// },1000);

console.log(calculator.addition(5,9));
console.log(calculator.subtraction(9,5));
console.log(calculator.multiplication(5,9));
console.log(calculator.division(9,5));
// calculator.subtraction(9,5);
// calculator.multiplication(9,5);
// calculator.division(9,5);


console.log(calc.cu(5));
console.log(calc.sq(7));


console.log("File content -> "+fs.readFileSync('../myDirectory/f1.txt'));
var fdata = fs.readFileSync("../myDirectory/f1.txt");
// fs.writeFileSync("../myDirectory/f1.txt",fdata+" My name is Pranav!");
fs.writeFileSync("../myDirectory/f1.txt"," My name is Pranav!");  //if dont add previous it will override the data

console.log("File content -> "+fs.readFileSync('../myDirectory/f1.txt'));
// fs.mkdirSync('../2_NPM');