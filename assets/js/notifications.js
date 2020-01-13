const notifications = document.getElementById("jsNotifications");

const fireNotification = (text, color) => {
    const notification = document.createElement("div");

    notification.innerText = text;
    notification.style.backgroundColor = color;
    notification.className = "notification";
    notifications.appendChild(notification);
  };
  
export const handleNewUser = ({ nickname }) => fireNotification(`${nickname} 참가했음!!`, "rgb(0, 122, 255)");

export const handleDisconnected = ({ nickname }) => fireNotification(`${nickname} 퇴장했음!!`, "rgb(255, 149, 0)");