const path = require('path');
const http = require('http');
const publicPath = path.join(__dirname,'../public')
const socketIO = require('socket.io');


const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
var server = http.createServer(app);
var io = socketIO(server);



app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');


    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createAt: new Date().getTime()
        })
    })



    socket.on('disconnect', () => {
        console.log('The user was disconnected');
    })

})

server.listen(port, () => console.log(`listening on ${port}`));
