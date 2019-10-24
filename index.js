const express = require('express');
const path = require('path');
const app = express();
var server = require('http').createServer(app);

var port = process.env.port || 1337;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.listen(port,function(e){
    console.log('server has started at '+port);
});
