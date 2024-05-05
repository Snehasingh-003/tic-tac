// let namaste = document.querySelector('button');
// namaste.addEventListener('click',inputmsg);

// function inputmsg(){
//     let name = prompt('enter your name');
//     namaste.textContent = 'roll no 1'+ name;
// } 
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");

let msgcontainer = document.querySelector(".msg1");
let msg = document.querySelector("#msg");

let turno =true; //playeryo
const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

// boxes.forEach((box)=>{
//     box.addEventListener("click",()=>{
//         console.log("box was clicked");
//     })
// })
   boxes.forEach((box)=>{
    // let box = boxes[i];
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turno == true){
            box.innerText = "O";
            turno =false;
        }
        else{
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;

        checkWinner();
   });
   
});
    const resetgame=()=>{
        turno=true;
        enable();
        msgcontainer.classList.add("hide");


    }
    const disable=()=>{
        for(let box of boxes){
            box.disabled = true;
        }
    }
    const enable=()=>{
        for(let box of boxes){
            box.disabled = false;
            box.innerText="";
        }

    }
    const showwinner=(winner)=>{
        msg.innerText = `congrates,winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disable();
    };
    const checkWinner=() => {
        for(let pattern of winpattern){
            console.log(pattern[0],pattern[1],pattern[2]);
            console.log(
                boxes[pattern[0]].innerText,
                boxes[pattern[1]].innerText,
                boxes[pattern[2]].innerText,
            );
            let pos1val= boxes[pattern[0]].innerText;
            let pos2val= boxes[pattern[1]].innerText;
            let pos3val =boxes[pattern[2]].innerText;
         
            if(pos1val != "" && pos2val != "" && pos3val != ""){
                if(pos1val == pos2val && pos2val == pos3val){
                    console.log("winner",pos1val);
                    
                    showwinner(pos1val);
                }
            }
    }
};
newGameBtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);


    