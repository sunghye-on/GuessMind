import { disableCanvas, hideControls, enableCanvas, showControls, resetCanvas } from "./paint";
import { disableChat, enableChat } from "./chat";

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
//알림창의 내용을 바꿀 수 있다.
const setNotifi = text => {
    wordNotifi.innerText = "";
    wordNotifi.innerText = text;
}

export const handlePlayerUpdate = ({ sockets }) => addPlayers( sockets );
// 게임 시작시 알림창을 비우고 그리기와 컨트롤러를 없애줌
export const handleGameStarted = () => {
    setNotifi("");
    disableCanvas();
    hideControls();
};
// 리더임을 알리면서 문제 단어를 알림
export const handleLeaderNotif = ({word}) => {
    enableCanvas();
    showControls();
    disableChat();
    wordNotifi.innerText = `문제 단어는 ${word}입니다. `;
};
// 게임 종료
export const handleGameEnded = () => {
    setNotifi("게임 종료!!");
    disableCanvas();
    hideControls();
    resetCanvas();
    enableChat();
}
//게임시작전 알림
export const handleGameStarting = () => setNotifi("게임이 곧 시작합니다!!");