const playground = document.querySelector("#playground");
const btnNew = document.querySelector("#btnNew");
const btnReset = document.querySelector("#btnReset");
const setColor = document.querySelector("#setColor");

let random;
let red;
let yellow;
let eraser;

document.getElementById("random").addEventListener("click", () => {
    random = true;
    red = false;
    yellow = false;
    eraser = false;
    setColor.textContent = "Random"
})
document.getElementById("red").addEventListener("click", () => {
    random = false;
    red = true;
    yellow = false;
    eraser = false;
    setColor.textContent = "Red"
})
document.getElementById("yellow").addEventListener("click", () => {
    random = false;
    red = false;
    yellow = true;
    eraser = false;
    setColor.textContent = "Yellow"
})
document.querySelector("#eraser").addEventListener("click", () => {
    random = false;
    red = false;
    yellow = false;
    eraser = true;
    setColor.textContent = "Eraser";
})

let nos = 10;
function creatDivs(){
    let width = 500;
    let height = 500;
    for(let j=0 ; j<nos*nos ;j++){
        const div = document.createElement("div");
        div.setAttribute("class","item")
        playground.appendChild(div);
        // set the width and height of the grid items
        playground.style.cssText ="grid-template-columns: repeat(auto-fill, minmax("+ width/nos +"px, 1fr)); grid-template-rows: repeat(auto-fill, minmax("+height/nos+"px, 1fr));"

    }
    const divItem = document.querySelectorAll(".item");
    divItem.forEach(item => item.addEventListener("mouseover",() => {
        if (random) {
            item.style.backgroundColor = `${randomColor()}`;
        }else if (red) {
            item.style.backgroundColor = `red`;
        }else if (yellow) {
            item.style.backgroundColor = `yellow`;
        }else if (eraser) {
            item.removeAttribute("style");
        }
    }))

}
creatDivs();
function emtyPlayGround(){
    playground.innerHTML = ''
}
// buttons event
// the new button 
btnNew.addEventListener("click", () => {
    nos = prompt("Enter a number between 2 and 20");
    if(nos === null){
        nos = 10;
    }
    emtyPlayGround();
    creatDivs();
    random = true;
    red = false;
    yellow = false;
    eraser = false;
    setColor.textContent = "Random"
});
// the reset button
btnReset.addEventListener("click", () =>{
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        item.style.backgroundColor="";
    })
    random = true;
    red = false;
    yellow = false;
    eraser = false;
    setColor.textContent = "Random"
})

// set a random color function
let randomColor = () => {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
} 

random = true;
red = false;
yellow = false;
eraser = false;
