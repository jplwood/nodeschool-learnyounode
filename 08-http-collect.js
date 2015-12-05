// --My Solution --//
var http = require('http');
var bl = require('bl');

http.request(process.argv[2], function(response){
  response.pipe(bl(function(err, data){

  }));
});



// --Official Solution --//
