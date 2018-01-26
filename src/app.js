const express = require('express');
const fs = require('fs')

const app = express();

app.get('/', function(req, res) {
  res.sendStatus(200);
});


app.get('/bingo', function(req, res) {
  fs.readFile('./src/numbers.txt', (err,data)=>{
      if(err){console.log(err);res.send("The server couldn't find files to help your query") }
      number = data.toString().slice(0,-1).split('\n').join()
      res.end(number);
  })

});


module.exports = app;
