var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var PORT = 5500;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index-room2.html');
});

server.listen(PORT, function () {
    console.log(`Socket IO server listening on port ${PORT}`);
});
