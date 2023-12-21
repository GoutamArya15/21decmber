let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector(".reset");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-Container");
let msg = document.querySelector("#msg");

let trunO = true;

const winpattren = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(trunO){
            box.innerHTML= "O";
            box.style.color = "skyblue";
            trunO=false;
        }else{
            box.innerHTML = "x";
            box.style.color = "red";
            trunO = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled =true;
    }
}
const EnableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = ""
    }
}

const showinner = (winner) =>{
    msg.innerHTML = `"Congratulation" winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winpattren){
       let post1val = boxes[pattern[0]].innerHTML;
       let post2val = boxes[pattern[1]].innerHTML;
       let post3val = boxes[pattern[2]].innerHTML;

       if(post1val !="" && post2val !="" && post3val !=""){
        if(post1val === post2val && post2val === post3val){
            showinner(post1val);
        }
       }
    }
}
const resetGame = ()=>{
    EnableBoxes();
    msgContainer.classList.add("hide");
}
newBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame)