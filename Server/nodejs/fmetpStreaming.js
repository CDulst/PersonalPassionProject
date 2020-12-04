var serverID = 'undefined';

const CameraStreamingData = (io,socket) => {
    socket.on('RegServerId', function (data){
        serverID = socket.id;
        console.log('reg server id : ' + serverID);
    });
    
    socket.on('OnReceiveData', function (data){
        if (serverID != 'undefined')
        {
            switch(data.EmitType)
            {
                //emit type: all;
                case 0: io.emit('OnReceiveData', { DataString: data.DataString, DataByte: data.DataByte }); break;
                //emit type: server;
                case 1: io.to(serverID).emit('OnReceiveData', { DataString: data.DataString, DataByte: data.DataByte }); break;
                //emit type: others;
                case 2: socket.broadcast.emit('OnReceiveData', { DataString: data.DataString, DataByte: data.DataByte }); break;
            }
        }
        else
        {
            console.log('cannot find any active server');
        }
    });
}





module.exports = {CameraStreamingData};