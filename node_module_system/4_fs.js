const fs = require('fs');

// reading a file 
// readFileSync is used to read the content of the file and if the file does not exist then it will throw file does not exist error
// console.log("file content -> "+fs.readFileSync('f1.txt'));

// writing a file
// fs.writeFileSync is used to fs.write the content in the file it will overwrite the content and if the file does not exist than a new file gets created
fs.writeFileSync('myDirectory/f1.txt',"I'm inside f2.txt");

// // append the data in file
// // fs.appendFileSync is used to add the new data to a previously written file
// fs.appendFileSync('f1.txt','\nthis is new text');

// // deleting the file
// // fs.unlinkSync is used to unlink or delete the file 
// fs.unlinkSync('f1.txt');

// creating a directory
// fs.mkdirSync('myDirectory');

const dirPath = 'C:\\Users\\prana\\Desktop\\emailValidator\\lambda-back\\nodetut\\myDirectory';

let direContent  = fs.readdirSync(dirPath);
console.log("directory content"+direContent);

// check whether directory exsit or not
console.log(fs.existsSync('myDirectory'))