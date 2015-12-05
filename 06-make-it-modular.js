var mymodule = require('./06-ff-module.js');

var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, function(err, data){
  if (err)
    return console.error('There was an error: ', err);
  data.forEach(function(item, index, arr){
    console.log(item);
  });
});
