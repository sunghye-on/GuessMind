const notification = document.getElementById("jsNotifications");

export const handleNewuser = ({nickname}) => {
    console.log(nickname,"참가");
}

// window.socket.on(window.events.newuser, handleNewuser);