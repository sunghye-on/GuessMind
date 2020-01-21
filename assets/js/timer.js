const getTimer = document.getElementById("jsTimer");

let time = null;
//제한시간을 받아서 찍어줌
export const handleStartTimer = ({maxTime}) => {

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


