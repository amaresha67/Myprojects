document.addEventListener('DOMContentLoaded', function() {
let digit=document.querySelectorAll('.btn');
console.log(digit.length);
var expression='';
for(let i=0;i<digit.length;i++){
    digit[i].addEventListener('click',function(e){
        var answer=document.querySelector('#ans');
        var buttoncontent=e.target.innerText;
       
        if(buttoncontent=='C'){
            expression='';
            answer.innerHTML=expression;
        }
        else if(buttoncontent=='='){
            var result=eval(expression);
            answer.innerHTML=result;
            expression='';
        }
        else{
            expression+=buttoncontent;
            answer.innerHTML=expression;
            
            
        }
        
                

            })
}



});