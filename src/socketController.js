import events from "./events";
import { setInterval } from "timers";
import { choseWord } from "./words";  
let sockets = [];
let inProgress = false;
let word = null;
let leader = null;

const choseLeader = () => sockets[Math.round(Math.random() * sockets.length)];

const socketController = (socket, io) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  const superBroadcast = (event, data) => io.emit(event, data);
  const sendPlayerUpdate = () =>
    superBroadcast(events.playerUpdate, { sockets });
  const startGame = () => {
    if(inProgress === false){
      inProgress = true; 
      leader = choseLeader();
      word = choseWord();
      console.log("---------------word & leader is ", word, leader.nickname, sockets) ;
      
      setTimeout(() => {
        superBroadcast(events.gameStarted);
        io.to(leader.id).emit(events.leaderNotif, { word });
      }, 2000);
    }
  };
  const endGame = () => {
    inProgress = false;
  };
  socket.on(events.setNickname, ({ nickname }) => {
    socket.nickname = nickname;
    sockets.push({ id: socket.id, points: 0, nickname: nickname });
    broadcast(events.newUser, { nickname });
    sendPlayerUpdate();
    if (sockets.length === 2){
      startGame();
    }
  });

  socket.on(events.disconnect, () => {
    sockets = sockets.filter(aSocket => aSocket.id !== socket.id);
    if(sockets.length === 1){
      endGame();
    }
    else if (leader){
      if(socket.id === leader.id){
        endGame();
      }
    }
    broadcast(events.gameEnded);
    broadcast(events.disconnected, { nickname: socket.nickname });
    sendPlayerUpdate();
  });

  socket.on(events.sendMsg, ({ message }) =>
    broadcast(events.newMsg, { message, nickname: socket.nickname })
  );
  socket.on(events.beginPath, ({ x, y }) =>
    broadcast(events.beganPath, { x, y })
  );
  socket.on(events.strokePath, ({ x, y, color }) => {
    broadcast(events.strokedPath, { x, y, color });
  });
  socket.on(events.fill, ({ color }) => {
    broadcast(events.filled, { color });
  });
};
export default socketController;