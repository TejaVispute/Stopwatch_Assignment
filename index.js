// js starts here for windowload
window.onload = function () {
    // minutes and seconds are accessed here of inserting values externally
    let min = document.querySelector('#minutes');
    let sec = document.querySelector('#seconds');
    // buttons accessed herestart stop and reset
    let startbtn = document.querySelector('#start');
    let stopbtn = document.querySelector('#stop');
    let resetbtn = document.querySelector('#reset');
    let interval;
    let minutes = 00;
    let seconds = 00;
    // onclick event added to start button
    startbtn.onclick = function () {
        interval = setInterval(starttime, 1000);
    }

    // onclick event added to stop button
    stopbtn.onclick = function () {
        clearInterval(interval);
    }

    // reset button function created for 00 seconds and minutes after reset
    resetbtn.onclick = function () {
        clearInterval(interval);
        minutes = "00";
        seconds = "00";
        min.innerHTML = minutes;
        sec.innerHTML = seconds;
    }

    // start timer functio created here for start button
    function starttime() {
        seconds++;//seconds updates

        // if seconds are less than 9 this code is executed

        if (seconds <= 9) {
            sec.innerHTML = "0" + seconds;
        }
        if (seconds > 9) {
            sec.innerHTML = seconds;
        }
        // minutes plue every 60 seconds later
        if (seconds > 59) {
            minutes++;
            min.innerHTML = "0" + minutes;
            seconds = 0;
            sec.innerHTML = "0" + 0;
        }
        if (minutes > 0) {
            min.innerHTML = minutes;
        }
    }
}

