
const second_needle = document.querySelector(".second_needle");
const minute_needle = document.querySelector(".minute_needle");
const hour_needle = document.querySelector(".hour_needle");
const clock = document.querySelector(".clock");
clock.style.width = window.innerWidth < window.innerHeight ? "calc(100vw - 50vw)":"calc(100vh - 50vh";
clock.style.height = window.innerWidth < window.innerHeight ? "calc(100vw - 50vw)":"calc(100vh - 50vh";

setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    second_needle.style.transform = `rotate(${seconds*6}deg)`
    minute_needle.style.transform = `rotate(${minutes*6}deg)`
    hour_needle.style.transform = `rotate(${hours*30 + minutes/2}deg)`
},1000)
