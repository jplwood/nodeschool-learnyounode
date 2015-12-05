var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function filterfiles(err, list){
  list.forEach(function(item, index, array){
    if (path.extname(item).substring(1) === ext){
      console.log(item);
    }
  });
});
