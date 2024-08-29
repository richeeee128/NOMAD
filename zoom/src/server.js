import WebSocket, { WebSocketServer } from "ws";
import http from "http";
import express, { application } from "express";
import path from "path";

const app = express();
const _dirname = path.resolve();

app.set("view engine", "pug");
app.set("views", _dirname + "/src/views");
app.use("/public", express.static(path.join(_dirname, "src", "/public")));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));

const handleListen = () => console.log("Listening on http://localhost:3000");

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

/** 한 번 연결 되고나서는 끊기 전까지 계속 연결되어 있음.
 * 브라우저는와 서버는 어떤 때나 메세지를 보낼 수 있음 양방향 소통= WebSocket
 */

//이 socket 은 서버와 브라우저사이의 연결

wss.on("connection", (socket) => {
  socket.on("close", () => {
    console.log("Disconnected from browser");
  });
  socket.on("message", (message) => {
    console.log(message.toString("utf-8"));
  });
  socket.send("hello");
});

//포트 3000에 ws 서버와 http 서버를 통일함
server.listen(3000, handleListen);
