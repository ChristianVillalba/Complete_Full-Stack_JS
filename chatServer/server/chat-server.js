const WebSocket = require("ws");

var model = require("./server.js").models;

const ws = new WebSocket.Server({port: 8080});

ws.on("connection", (message) => {
    console.log("Got a message", message);
})