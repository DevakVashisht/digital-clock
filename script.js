function getTime(){
    // Creating variables
    let date = new Date;
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var milliSeconds = date.getMilliseconds();
    // Updating am/pm
    let period = " ";
    if (hours < 12){
        period = "AM"
    } else if (hours > 12) {
        period= "PM"
    } else {
        period = ""
    }

    if (minutes <10){
        minutes = "0" + minutes
    } else{
        minutes = minutes
    }
    // adding elemens to div
    document.getElementById("hour").innerText = hours + " : ";
    document.getElementById("min").innerText =  + minutes + " : "
    document.getElementById("sec").innerText =  + seconds + " " + period;
    // setting timeout
    setTimeout(getTime, 1000)
}

getTime()