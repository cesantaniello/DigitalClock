const showClock = () => {
    let date = new Date();
    let hours = formatHour(date.getHours());
    let minutes = formatHour(date.getMinutes());
    let seconds = formatHour(date.getSeconds());
    document.getElementById("hour").innerHTML = `${hours}:${minutes}:${seconds}`;

    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dateString = `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    document.getElementById("date").innerHTML = dateString;
}

const formatHour = (hour) => {
    if(hour < 10)
        hour = '0' + hour;
    return hour;
}

setInterval(showClock, 1000);