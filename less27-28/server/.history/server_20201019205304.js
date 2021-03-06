const http = require('http');
const WebSocket = require('ws').Server;
const queryString = require('query-string');
const server = http.createServer();
server.listen(5656, () => { console.log('ws 5656') });
const socketServer = new WebSocket({ server });

const messageTypes = {
    register: 'register'
}

const users = {}


socketServer.on('connection', (ws, req) => {

    const id = req.url.slice(-2);
    users[id] = ws;


    // ws.send( JSON.stringify({mes: 'Hello Client' }) );
    ws.send('Hello Client');



    ws.on('message', (message) => {
        const parcedMessage = JSON.parse(message);
        console.log('parcedMessage: ____', parcedMessage);

        const {type, payload} = parcedMessage

        switch (type) {
            case messageTypes.register:
                
                break;
        
            default:
                break;
        }

        // messages.push(message);
        // socketServer.clients.forEach((client) => {
        //   if (client.readyState === WebSocket.OPEN) {
        //     client.send(JSON.stringify([message]));
        //   }
        // });
    });

    ws.on('close', (obj) => {
        console.log('closed');
    });
});

module.exports = { socketServer };