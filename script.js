let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.resetbtn');
let winner=document.querySelector('.winner');
let patterens = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7],
[2, 5, 8], [0, 4, 8], [2, 4, 6]];
let turn=true;
let count=0;
boxes.forEach(box => {
box.addEventListener('click',()=>{
    if(turn){
        box.innerHTML='X';
        box.style.color='yellow'
        turn=false;
    }else{
box.innerHTML='O';
box.style.color='white';
turn='true';
    }
    box.disabled = true;
    count++;
    let isWinner=chkWinner();
    if(count==9 && !isWinner){
        chkDraw();
    }
       
    
    
})
});
// reset button
const reset=()=>{
    turn=true;
    enableBtn();
    winner.classList.add('hide');
}
// disable button
const disableBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
// enable button
const enableBtn=()=>{
    for(let box of boxes){
        box.disabled=false;
box.innerHTML='';
    }
}
resetBtn.addEventListener('click',reset);
// for checking winning condition
const chkWinner=()=>{
    for(let patteren of patterens){
       let pos1= boxes[patteren[0]].innerHTML;
       let pos2=boxes[patteren[1]].innerHTML;
       let pos3=boxes[patteren[2]].innerHTML;
       if(pos1 !='' && pos2 !='' && pos3!=''){
        if(pos1 === pos2 && pos2 === pos3){
            boxes.disabled = true;
greeting(pos1);
           
        }
       }
     
    }
    
}
const chkDraw=()=>{
    
        winner.innerHTML=`Its a draw`;
        winner.classList.remove('hide');
       disableBtn();

}
// for displaying winner
const greeting=(e)=>{
    winner.innerHTML=`Congratulations the winner is ${e}`;
    winner.classList.remove('hide');
   disableBtn();
}
