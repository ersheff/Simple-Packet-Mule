const express = require("express");
const app = express();
app.use(express.static("./"));

const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`Listening on port ${port}.`));

io.on("connection", socket => {

    console.log("A user connected.");

    socket.on("data", incoming => {
        io.emit("data", incoming);
    });

});