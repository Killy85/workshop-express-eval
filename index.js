let chalk = require('chalk');
const app = require('./src/app');

// port
const port = process.argv[2] || 3000;

// start server here
app.listen(port, function() {
  console.log(chalk.green('Hello web server'));
});


app.get('/', function(req, res) {
  res.sendStatus(200);
});


app.get('/bingo', function(req, res) {
  res.end("Bingo");
});
