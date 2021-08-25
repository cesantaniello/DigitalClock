const showClock = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    document.getElementById("hour").innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(showClock, 1000);