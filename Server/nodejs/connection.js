const connectClient = (io,socket,clients) => {
    io.emit("connected", {
        "hello": "hello"
      });
      socket.on("connectionPackage", data => {
      if(data.type === "vr"){
          clients.vr.push(data);
          console.log(clients);
      }
      if (data.type === "cam"){
          clients.cam.push(data);
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

      socket.on('signal', (signal) => {
      console.log(signal);
      io.to(clients.cam[0].id).emit('signal', signal);
      });

      socket.on('signalBack', signal => {
        console.log(signal);
        console.log("check2");
        io.to(clients.web[0].id).emit('signal', signal);
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

