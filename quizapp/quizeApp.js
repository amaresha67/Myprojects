let que=document.querySelector('.que');
let choices=document.querySelectorAll('.choice');
let next=document.querySelector('#next');
let container=document.querySelector(".container");
let scorem=document.querySelector(".scorem");
let result=document.querySelector("#result");
let score=0;
let restart=document.querySelector("#restart");
let questions=[
    {
        question:"1]Which HTML tag is used to create a hyperlink?",
        choices:["link","anchor","a","href"],
        correctans:1
    },
    {
        question:"2]Which CSS property is used to change the text color of an element?",
        choices:["color","text-color","font-color","text-style"],
        correctans:1
    },
    {
        question:"3]What does querySelector select?",
        choices:["Elements","IDs","Clases","values"],
        correctans:1
    }
]
let index=1;
function questiondisplay(qindex){
    console.log("index1"+qindex)
let q=questions[qindex].question;
que.innerHTML=q;
choices[0].innerHTML=questions[qindex].choices[0];
choices[1].innerHTML=questions[qindex].choices[1];
choices[2].innerHTML=questions[qindex].choices[2];
choices[3].innerHTML=questions[qindex].choices[3];

}
questiondisplay(0);

function nextquestion(){
    console.log("index"+index)
    for(j=0;j<choices.length;j++){
        choices[j].style.backgroundColor='white';
    }
    if(value==questions[index-1].correctans){
        score++;
        console.log(score);
       }
   if(index>=questions.length){
    container.style.display='none';
    scorem.style.display='block';
    result.innerHTML=score;
    return;
   }
   
    value=0;
    questiondisplay(index); 
    index++;
}
next.addEventListener('click',nextquestion)
let value=0;
for(i=0;i<choices.length;i++){
    choices[i].addEventListener('click',function(e){
        value=e.target.value;
        for(j=0;j<choices.length;j++){
            choices[j].style.backgroundColor='white';
        }
        e.target.style.backgroundColor='red';
        
    })
}


// restart
restart.addEventListener('click',function(){
    index=1;
    score=0;
    container.style.display='block';
    scorem.style.display='none';
    questiondisplay(0);
})
