function showTime() {
    var mydate = new Date();


    //Date
    var year = mydate.getFullYear();
    if (year < 1000) {
        year += 1900
    }
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var daym = mydate.getDate();
    var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",); //DAY
    var montharray = new Array("January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"); //MONTHS


    //Time
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var session = "AM";

    if (hours == 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
        session = "PM";
    }
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }


    // hours = (hours < 10) ? "0" + hours : hours;
    // minutes = (minutes < 10) ? "0" + minutes : minutes;
    // seconds = (seconds < 10) ? "0" + seconds : seconds;

    var time = " " + dayarray[day] + " " + daym + " " + montharray[month] + " " + year + " | " 
    + hours + ":" + minutes + ":" + seconds + " " + session;
    
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout("showTime()", 1000);

}
showTime();


