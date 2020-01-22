import events from "./events";
import { setInterval } from "timers";
import { choseWord } from "./words";  
import { Socket } from "dgram";
let sockets = [];
let inProgress = false;
let word = null;
let leader = null;
let timer = null;
let maxTime = 60000;
const choseLeader = () => sockets[Math.round(Math.random() * sockets.length)];

const socketController = (socket, io) => {
  const broadcast = (event, data) => socket.broadcast.emit(event, data);
  const superBroadcast = (event, data) => io.emit(event, data);
  const sendPlayerUpdate = () =>
    superBroadcast(events.playerUpdate, { sockets });
  const startGame = () => {
    if (sockets.length > 1){
      if(inProgress === false){
        inProgress = true; 
        leader = choseLeader();
        word = choseWord();
        console.log("---------------word & leader is ", word, leader.nickname, sockets) ;
        superBroadcast(events.gameStarting);
        setTimeout(() => {
          superBroadcast(events.gameStarted);
          io.to(leader.id).emit(events.leaderNotif, { word });
          timer = setTimeout(endGame , maxTime+1000);
          //게임이 시작한 후(리더에게 단어를 알려준 뒤) 모두에게 타이머를 시작
          superBroadcast(events.startTimer, { maxTime });
        }, 5000);
      }
    }
  };
  const endGame = () => {
    inProgress = false;
    superBroadcast(events.gameEnded);
    if(timer !== null){
      clearTimeout(timer);
      superBroadcast(events.endedTimer);
    }
    setTimeout(() => startGame(), 3000);
  };
  // 니꼴 : map은 가공된 배열을 반환한다.
  //        map에서는 return이 필수다. 
  //        아래에서는 정답인 소켓만 점수를 올리고 나머지는 그냥 반환하겠지? 그 후 업데이트
  const addPoints = id => {
    sockets = sockets.map(socket => {
      if (socket.id === id){
        socket.points += 50;
      }
      return socket;
    });
    sendPlayerUpdate();
    endGame();
    clearTimeout(timer);
    superBroadcast(events.endedTimer);
  }

  socket.on(events.setNickname, ({ nickname }) => {
    socket.nickname = nickname;
    sockets.push({ id: socket.id, points: 0, nickname: nickname });
    broadcast(events.newUser, { nickname });
    sendPlayerUpdate();
    startGame();
  });
// 한사람만 남거나 리더가 퇴장시에 게임이 종료된다.
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
    // broadcast(events.gameEnded);
    broadcast(events.disconnected, { nickname: socket.nickname });
    sendPlayerUpdate();
  });

  socket.on(events.sendMsg, ({ message }) =>{
    if (message === word){
      superBroadcast(events.newMsg, {
        message: `${socket.nickname}님이 정답(${word})을 맞췄습니다! +50점`,
        nickname: "알림👉"
      });
      addPoints(socket.id);
    } else {
      broadcast(events.newMsg, { message, nickname: socket.nickname})
    }
  });
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