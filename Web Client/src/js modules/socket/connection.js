let io = require('socket.io-client');
import {socketmodule} from "../socket/socketModule";
import {Name,Connected} from "../connecting/states";
let socket;
let peer;
export function connection (){
  socket = io.connect("https://vr-social-server.herokuapp.com/");
  console.log(socket);
}

export function getSocket (){
  return socket;
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

export function setPeer(p){
  peer = p;
}


export function nameEntered (name){
  socketmodule.name = name;
  console.log(socketmodule);
  Connected();
  socket.emit("connectionPackage",socketmodule);
}

export function placeholderConnect (){
  let data = {
    id: socket.id,
    type:"web"
  }
  socket.emit("connectionPackage",data);
}

export function sendSignal (data){
  socket.emit("signal",data);
  socket.on("signal", async data => {
    signalPeer(data,peer);
  })
}




