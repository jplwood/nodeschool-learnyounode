// --My Solution --//
var http = require('http');
var url = process.argv[2];
http.get(url, function callback(response){
  response.on("data", function(data){
    console.log(data.toString());
  });
});

// --Official Solution --//
/*

var http = require('http');
http.get(process.argv[2], function(response){
  response.setEncoding('utf8') //ensures returned data is a string, not buffer obj
  response.on("data", console.log);
  response.on("error", console.error);
});

*/
