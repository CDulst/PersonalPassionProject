let io = require('socket.io-client');
import {socketmodule} from "../socket/socketModule";
import {Name,Connected} from "../connecting/states";
let socket;

export function connection (){
  socket = io.connect("https://192.168.0.206:52300");
  console.log(socket);
}

export function checkCode (code,$info,checker){
  console.log("check");
  socket.emit("CodeCheck",code);
  socket.on ("CodeResult", result => {
    if (result){
    socketmodule.id = socket.id;
    socketmodule.code = code;
    $info.innerHTML = `<p class = "name__info">its good</p>`
    Name();
    }
    else{
    $info.innerHTML = `<p class = "name__info red">Invalid Code, !Uppercase,Lowercase sensitive</p>`
    }
  })
}

export function nameEntered (name){
  socketmodule.name = name;
  console.log(socketmodule);
  Connected();
  socket.emit("connectionPackage",socketmodule);
}
