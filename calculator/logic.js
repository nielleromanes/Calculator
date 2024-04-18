let string="";
let textField=document.getElementById("textField");
let buttons=document.querySelectorAll("button");
let records=[];

buttons.forEach((e)=>{
    e.addEventListener('click', f);
    
})

function f(buttons){
    if(buttons.target.innerHTML=='C') {
        textField.value="";
        string="";
    }

    else if(buttons.target.innerHTML=='DEL'){
        let temp=textField.value.toString();
        textField.value=temp.slice(0,string.length-1);
        string=string.slice(0,string.length-1);
    }
    
    else if(buttons.target.innerHTML=='='){
        let result = execute(string);
        textField.value=result;
        recordHistory(string+ '=' +result);
    }

    else if (buttons.target.innerHTML=='H'){
        showHistory();

    }
    else{
        string+=buttons.target.innerHTML;
        textField.value=string;
    }
}

function execute(expression){
    try {
        return eval(expression);
    } catch (error){
        console.log(error);
        return 'ERROR';
    }
}

function showHistory(){
    if (records.length === 0) {
        textField.value = 'No history yet';
    } else {
        textField.value = records.join('\n');
    }
}

function recordHistory(expression) {
    records.push(expression);
}