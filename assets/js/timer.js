const getTimer = document.getElementById("jsTimer");

let time;
//제한시간을 받아서 찍어줌
export const handleStartTimer = ({maxTime}) => {
    getTimer.style.opacity = 1;
    const showTime = () => {
        time = setInterval(() => {
            if (maxTime === 0){
                clearInterval(time);
            }
            getTimer.innerHTML = "";
            getTimer.innerText = `남은 시간 ${maxTime/1000}초!`
            maxTime -= 1000;
        }, 1000);
    }
    showTime();
}
export const handleEndedTimer = () => {
    getTimer.style.opacity = 0;
    clearInterval(time);
    getTimer.innerHTML = "";
}
