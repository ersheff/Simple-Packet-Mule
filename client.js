const maxApi = require("max-api");
const io = require("socket.io-client");

const socket = io.connect("http://127.0.0.1:3000");

socket.on("connect", () => {
  console.log("Connected");
});

maxApi.addHandler("data", (data) => {
  socket.emit("data", data);
});

socket.on("data", (data) => {
  maxApi.outlet("data", data);
});
