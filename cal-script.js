function getnumbers(val){
    document.getElementById("display").value=document.getElementById("display").value+val;

}

function cancel(){
    document.getElementById("display").value="";
    
}

function calculate(){
    userInput=document.getElementById("display").value;
    result=eval(userInput);
    document.getElementById("display").value=result;
}
