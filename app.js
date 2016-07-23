// ********************************************************
// Dependencies and Settings
// ********************************************************
var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.use(express.static('public'));

// ********************************************************
// Routing
// ********************************************************

// Main view
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Web/Mobile app
app.get('/web', function (req, res) {
  res.sendFile(__dirname + '/views/web.html');
});

// Cardboard App
app.get('/cardboard', function (req, res) {
  res.sendFile(__dirname + '/views/cardboard.html');
});

// ********************************************************
// Running
// ********************************************************
server.listen(8989, function () {
  console.log("*********************************************");
  console.log("*** SenderoWeb listening on port 8989 ... ***");
  console.log("*********************************************");
});

function exitHandler(options, err) {
  server.close();
  if (err) console.log(err.stack);
  if (options.exit) process.exit();
}

//do something when app is closing
process.on('exit', exitHandler.bind(null,{cleanup:true}));

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true}));

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit:true}));
