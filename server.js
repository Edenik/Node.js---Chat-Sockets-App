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
    socket.on('setUser', (user) => {
        console.log(user);
        if(users.indexOf(user) > -1){
            socket.emit("UserExist" , `${user} already taken!`);
        } 
        else {
            users.push(user);
            socket.emit("UserWelcome" , `Welcome ${user}`);
        }
    })
})
http.listen(3000);