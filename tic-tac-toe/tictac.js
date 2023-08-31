const button=document.querySelectorAll(".button");
const restart=document.querySelector("#btn");
i=1;k=0,l=0,m=0;
var array1=[];
var array2=[];
restart.addEventListener('click',function(){
    i=1;k=0,l=0,m=0;
    array1=[];
    array2=[];
    document.querySelector('#result').innerHTML="";
    button.forEach(btn =>{
        btn.innerHTML="";
       
    })
})

button.forEach(but =>{
    but.addEventListener('click',(e)=>{
       if(m<=5){
        if(i==1){
            but.innerHTML='*';
            array1.push(e.target.value);
             if(k==2){
                find(1);
             }
             k++;
            i=0;
        }else{
            but.innerHTML='o';
            array2.push(e.target.value);
            if(l==2){ 
                find(2);
             }
             l++;
            i=1;
        }
        m++;
       }       
    })
}) 
var d=0;
function find(a){
    array1.sort();
    array2.sort();
    if(a==1){       
        var t=check(array1);
        if(t){
            document.querySelector('#result').innerHTML='player * won';
        } 
    }
    else{
        console.log('player2 imfomation');
        var t=check(array2);
        if(t){
            document.querySelector('#result').innerHTML='player 0 won';
        }
    }
    
}

function check(array){
    var win='true';
    for(j=0;j<array.length-1;j++){
        if(j==0){
            d=array[j+1]-array[j];
           
        }
        else{
            if(d==array[j+1]-array[j]){   
             }
            else{               
                win=false;
                break;
             }
        }
    }
return win;
}
