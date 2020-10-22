const playground = document.querySelector("#playground");
const btnNew = document.querySelector("#btnNew");
const btnReset = document.querySelector("#btnReset");

let nos = 10;
function creatDivs(){
    let width = 500;
    let height = 500;
    for(let j=0 ; j<nos*nos ;j++){
        const div = document.createElement("div");
        div.setAttribute("class","item")
        playground.appendChild(div);
        div.addEventListener("mouseover", e => { e.target.style.cssText = `background-color: #${randomColor()};` })
        playground.style.cssText ="grid-template-columns: repeat(auto-fill, minmax("+ width/nos +"px, 1fr)); grid-template-rows: repeat(auto-fill, minmax("+height/nos+"px, 1fr));"
    }

}
creatDivs();
function emtyPlayGround(){
    playground.innerHTML = ''
}
// buttons event
// the new button 
btnNew.addEventListener("click", () => {
    nos = prompt("Enter a number between 2 and 20");
    emtyPlayGround();
    creatDivs();   
});
// the reset button
btnReset.addEventListener("click", () =>{
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        item.style.backgroundColor="";
    })
})

// set a random color function
let randomColor = () => Math.floor(Math.random()*16777215).toString(16);
