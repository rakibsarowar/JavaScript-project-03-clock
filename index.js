let target = document.querySelector('.result');

function setTime() {
    let d = new Date();
    target.innerHTML = `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`
}


// Just have to use function name, not call operator. 
setInterval(setTime,1000)