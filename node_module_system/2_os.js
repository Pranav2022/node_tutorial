const os = require('os');

// application like system compatibility for downloafing the software
console.log(os.cpus());
console.log(os.arch()); //architecture 32 or 64
console.log(os.networkInterfaces());
console.log(os.platform());
console.log(os.machine());
console.log(os.totalmem());
console.log(os.freemem());