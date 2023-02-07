const http = require('http');
const { Server } = require("socket.io");
const app = require('./app.js');

const PORT = process.env.PORT || 5005;

const cors ={
    origin:'*'
}

const server = http.createServer(app);

const io = new Server (server, {cors});

io.on('connect',(socket)=>{
    console.log('CONNECTION IS HERE IO');
    setTimeout(()=>{
    io.emit('NEW_NOTIFICATION', "Hello world");
     },10000);
   

})

server.listen(PORT, () => {
    console.log(`App started on port ${PORT}`);
})