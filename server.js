const express = require('express');
const app = express();
const http = require('http').createServer(app);
const socketIo = require('socket.io')(http);


app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

const users = [];

socketIo.on('connection', (socket) => {
    console.log('User Connected!');
})
http.listen(3000);