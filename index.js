let target = document.querySelector('.result');

function setTime() {
    let d = new Date();
    target.innerHTML = `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`
}

setInterval(setTime,1000)