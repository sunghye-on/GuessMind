import events from "./events"
const socketController = socket => {
  socket.on(events.setNickname, ({ nickname }) => {
    console.log(nickname);
    socket.nickname = nickname;
    socket.broadcast.emit(events.newuser,{nickname});
  });
};

export default socketController;