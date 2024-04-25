let count = 0;
const mycounterEl = document.getElementById ("myCounter");
const mybutton = document.getElementById("mybutton");
mybutton.addEventListener("click", onButtonClick);
function onButtonClick(){
count = count +1;
mycounterEl.textContent = count
}





setInterval(sayHello, 1000);

function sayHello(){
const time = new Date();


const timeE1 = document.getElementById("time")
timeE1.textContent = time.toLocaleTimeString();

}
