let cells = document.querySelectorAll(".cell");
let chanceX = true;
let msg = document.querySelector(".msg");
let msg_container = document.querySelector(".msg-container");
let restart = document.querySelector('.restart-button');
let newGame = document.querySelector('.New');
const arr = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const buttonDissable = () => {//will disable all cell buttons
    cells.forEach(cell => cell.disabled = true);
    }

const buttonEnable = () => {//will enable all cell buttons
    cells.forEach(cell => {
    cell.disabled = false;
    cell.innerText = '';
    })};

const showDraw = () => {
  msg.innerText = "It's a Draw!";
  msg_container.classList.remove("hide");
};  

const showwinner= (winner) => {
    msg.innerText = `${winner} won!`;
    msg_container.classList.remove("hide");
    buttonDissable();
}

const reset = () => {
    chanceX = true;
    buttonEnable();
    msg_container.classList.add('hide');
    
}

const win = () => {
    for (let pattern of arr){
        let one = cells[pattern[0]].innerText;
        let two = cells[pattern[1]].innerText;
        let three = cells[pattern[2]].innerText
        if (one != "" && two !="" && three !=""){
            if (one == two && two == three){
                showwinner(one);
            }
        }
        if ([...cells].every(cell => cell.innerText !== "")) {
            showDraw();
            return true;
        }
        return false;
    }
}

cells.forEach((cell)=>{
    cell.addEventListener("click" , ()=>{
        if (chanceX==true){
            cell.innerText="X";
            chanceX =false;
        }
        else{
            cell.innerText="O";
            chanceX = true;
        }
        cell.disabled = true;
        win ();
    })
})
restart.addEventListener('click', reset);
newGame.addEventListener('click', reset);