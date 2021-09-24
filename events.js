const EventEmitter = require("events");
const http = require("http");
class Sales extends EventEmitter {
    constructor() {
        super();
    }
}

const myEmitter = new Sales();

myEmitter.on("newSale", () => {
    console.log("There was a new sale!")
})

myEmitter.on("newSale", () => {
    console.log("Costumer name: Jonas");
})

myEmitter.on("newSale", stock => {
    console.log(`There are now ${stock} items`)
})
myEmitter.emit("newSale", 100);

/////////////////////////////////

const server = http.createServer();

server.on('request', (req, res) => {
    console.log('Request Recieved');
    res.end('Request Recieved');
});

server.on('close', () => {
    console.log('Server Closed');
})

server.listen(8000, "127.0.0.1", () => {
    console.log('waiting for request');
});