const path = require("path");
const cn = require('child_process');

let ext = path.extname("lambda-back/nodetut/calculator.js");

 console.log(ext);
 
 let baseName = path.basename("lambda-back/nodetut/calculator.js");
 console.log(baseName);

 console.log(__dirname);
 console.log(__filename);

