var fs = require('fs');
var file = process.argv[2];
fs.readFile(file, function(err, fileContents){
  if (err) throw err;
  console.log(fileContents.toString().split('\n').length - 1);
});
