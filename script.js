let boxs = document.querySelectorAll('.box');
let resetBtn =document.querySelector('#reset');
let msgContainer=document.querySelector('.msgContainer');
let msg=document.querySelector('#msg');

 let turnO= true;
 
const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxs.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerHTML="O"
            turnO =false;
            
        }else{
            box.innerHTML="X"
            turnO =true;
        }
        box.disabled=true;

        checkwinner();

    })
});

const disabledBox = () =>{
    for (let box of boxs){
    box.disabled=true;
    }
};

const enabledBox = () =>{
    for (let box of boxs){
    box.disabled=false;
    box.innerHTML="";
    resetBtn.innerText="RESET"

    }
};

const resetgame=()=>{
    turnO=true;
    enabledBox();
    msgContainer.classList.add('hide');
}



const showWinner=(Winner)=>{
   msg.innerText=`Congratulations Winner is ${Winner}`;
   msgContainer.classList.remove('hide');
   disabledBox();
};

const checkwinner=()=>{
   
    for(let pattern of  winpattern ){
        let posval1=boxs[pattern[0]].innerText;
        let posval2=boxs[pattern[1]].innerText;
        let posval3=boxs[pattern[2]].innerText;

        if(posval1 !="" && posval2 !="" && posval3 !=""){
            if(posval1===posval2 && posval1===posval3){
                console.log('Winner',posval1);
                resetBtn.innerText="START GAME"
                showWinner(posval1);
            }
        }
    };
};


resetBtn.addEventListener('click',resetgame);