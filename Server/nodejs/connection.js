const connectClient = (io,socket,clients) => {
    io.emit("connected", {
        "hello": "hello"
      });
      socket.on("connectionPackage", data => {
      if(data.type === "vr"){
          clients.vr.push(data);
          console.log(clients);
      }
      else{
          clients.web.push(data);
          console.log(clients);
          confirmConnection(clients,data.code,io);
      }
      });
      socket.on("CodeCheck", code => {
          console.log(code);
          checkClients(clients,code,socket);
      })
}

const confirmConnection = (clients,code,io) => {
    clients.vr.forEach(client => {
        if (client.code === code){
        io.sockets.to(client.id).emit("overseerConnected");
        }
    });
}

const checkClients = (clients,code,socket) => {
     let check = false;
     clients.vr.forEach(client => {
         if (client.code === code){
         check = true;
         }
     });
     if (check){
     console.log("good");
     socket.emit("CodeResult",true);
     }
     else{
     console.log("not good");
     socket.emit("CodeResult",false);
     }
}

const disconnectClient = (io,socket,clients) => {
    socket.on('disconnect' , () => {
        console.log('client disconnected');
      })
}

module.exports = {connectClient,disconnectClient};

