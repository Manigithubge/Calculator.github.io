let screen = document.getElementById('screen');

buttons= document.querySelectorAll('button');

let screenValue='';

for(item of buttons){
    item.addEventListener('click',(e)=>{
        let buttonText = e.target.innerText;

        //innerText is already defined in button tag.

        if(buttonText=='C'){
            screenValue="";
            screen.value = screenValue;
        }

        else if(buttonText=='='){
            screen.value= eval(screenValue);
        }

        else{
            screenValue= screenValue + buttonText;
            screen.value = screenValue;
        }
    })
}