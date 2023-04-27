const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clock = setInterval(function time(){
    let dateToday = new Date();
    let hrs = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if (hrs < 10) hr = '0' + hrs;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;

    hours.textContent = hrs;
    minutes.textContent = min;
    seconds.textContent = seg;
})