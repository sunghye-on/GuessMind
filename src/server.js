import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";
// import { Socket } from "dgram";
import socketController from "./socketController";
import events from "./events";

/* Setting */
const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

/* middleware */
// static 관련
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));

/* routing */
app.get("/", (req, res) => res.render("home", {events : JSON.stringify(events)}));

/* handler func */
const handleListening = () => {
  console.log(`✅  Server is running! http://localhost:${PORT}`);
};

const server = app.listen(PORT, handleListening);

// io가 모든 이벤트를 알아야 하기 때문에 아래와같이 사용합니다.
const io = socketIO.listen(server);

// create connection event
io.on("connection", socket => socketController(socket, io));


  // /* chatting event handler */
  // socket.on("newMessage", ({ message }) => {
  //   socket.broadcast.emit("messageNotifi", {
  //     message,
  //     nickname: socket.nickname || "Anon"
  //   });
  // });
  // /* setting user nickname */
  // socket.on("setNickname", ({ nickname }) => {
  //   socket.nickname = nickname;
  // });