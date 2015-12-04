var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var strLines = str.split('\n');
console.log(strLines.length - 1);
