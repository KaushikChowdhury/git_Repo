var express = require('express');

var app = express();

app.get('/', function(req,res){
  res.status(200).send('Hello from Fractal');
});

var server = app.listen(process.env.PORT || '8080', function(){
  console.log('app listing on localhost %s', server.address().port );
})
