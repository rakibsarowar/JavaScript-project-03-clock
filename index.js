let target = document.querySelector('.result');

let d = new Date();
target.innerHTML = `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`