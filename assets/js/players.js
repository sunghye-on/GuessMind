import { disableCanvas, hideControls, enableCanvas, showControls } from "./paint";

const board = document.getElementById("jsPBoard");
const wordNotifi = document.getElementById("jsword");

const addPlayers = players => {
    board.innerHTML = "";
    players.forEach(player => {
        const playerElement = document.createElement("span");
        playerElement.innerText = `${player.nickname} : ${player.points}`;
        board.appendChild(playerElement);
    });
};

const setNotifi = text => {
    wordNotifi.innerText = "";
    wordNotifi.innerText = text;
}

export const handlePlayerUpdate = ({ sockets }) => addPlayers( sockets );

export const handleGameStarted = () => {
    setNotifi("");
    disableCanvas();
    hideControls();
};

export const handleLeaderNotif = ({word}) => {
    enableCanvas();
    showControls();
    wordNotifi.innerText = `문제 단어는 ${word}입니다. `;
};