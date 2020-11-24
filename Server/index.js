
//Get dotenv file
require('dotenv').config();

const connection = require("./nodejs/connection");

//Create a boolean that checks if we are on dev or not
const isDevelopment = (process.env.NODE_ENV === 'development');

console.log(isDevelopment);
//Nodejs express framework gebruiken
const express = require('express');
const app = express();

//Server opstellen met SSL certificatte voor webcam gebruik met IP adres
const fs = require('fs');
const options = {
  key: fs.readFileSync('./localhost.key'),
  cert: fs.readFileSync('./localhost.crt')
};
const server = require('http').Server(options, app); // httpS instead of http
//De port waar naar geluisterd moet worden
const port = process.env.PORT || 52300;
const io = require('socket.io')(server);
let clients = {
  web:[],
  vr: [],
}
io.on('connection', function(socket){
  console.log(`Connection Made:${socket.id}`);
  connection.connectClient(io,socket,clients);
  connection.disconnectClient(io,socket,clients);
});



 


  








app.use(express.static('public'));

server.listen(port, () => {
 console.log(`App listening on port ${port}!`);
});
