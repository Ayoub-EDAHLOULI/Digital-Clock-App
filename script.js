
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let clock = document.querySelectorAll(".clock");



setInterval(()=> {

    let currentTime = new Date();


    hours.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    minutes.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    seconds.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
})

clock.forEach(span => {
    span.onmousemove = function(e){
        let x = e.pageX - span.offsetLeft;
        let y = e.pageY - span.offsetTop;

        span.style.setProperty('--x', x + 'px');
        span.style.setProperty('--y', y + 'px');
    }
})