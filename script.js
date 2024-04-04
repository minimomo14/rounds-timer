const myTime = setInterval(myTimer, 1000);
function myTimer(){
    const today = new Date();
    const displayTime = today.toLocaleTimeString();
    document.getElementById("displayLocalTime").innerHTML = displayTime;
}