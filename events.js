const EventEmitter = require("events");

const myEmitter = new EventEmitter();

class Sales extends EventEmitter {
    constructor() {
        super();
    }
}

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