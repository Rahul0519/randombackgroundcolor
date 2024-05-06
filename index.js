let time = document.getElementById('current-time');
let date = document.getElementById('current-date');
let container = document.getElementById('container');




const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

setInterval(() => {
    let d = new Date();
    let dates = d.getDate();
    let day = weekday[d.getDay()];
    let month = months[d.getMonth()];
    time.innerHTML = d.toLocaleTimeString();
    date.innerHTML = day + ", " + month + " " + dates;
}, 1000);

function changeBackground(){
    const red = Math.floor(Math.random()* 256);
    const green = Math.floor(Math.random()* 256);
    const blue = Math.floor(Math.random()* 256);


    container.style.background = "rgb(" + red + "," + green + ", " + blue + ")";
}

