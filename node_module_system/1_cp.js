// child process is a node module used to create subprocess within a script
// we can perform different tasks within your script by just using some methods

const cp = require('child_process');

cp.execSync('calc');
cp.execSync('start chrome https://gadhiyahospital.mvd-tech.in/ProClinic/dashboard.php');