const express = require('express');
const fs = require('fs')

const app = express();

app.get('/', function(req, res) {
  res.sendStatus(200);
});


app.get('/bingo', function(req, res) {
  fs.readFile('./src/numbers.txt', (err,data)=>{
      if(err){console.log(err);res.send("The server couldn't find files to help your query") }
      number = data.toString().slice(0,-1).split('\n')
      input = req.query['mynumbers']
      if(input == undefined){
        res.end('The bingo game is already started and known numbers are '+ number);
      }else{
        input = input.split(',')
        var bingo = input.length == number.length;
        input.forEach((i)=>{
          bingo = bingo && number.includes(i)
        })
        if(bingo){
          res.send('Bingo')
        }else{
          res.send('The bingo game is already started, sorry your numbers doesn\'t match with known numbers '+ number +' ; so you can not say Bingo')
        }
      }

  })

});


module.exports = app;
