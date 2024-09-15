const answers=document.querySelectorAll('#quiz-answers button');

answers.forEach(button=>{
    let btn=button.addEventListener('click',()=>{
       document.getElementById("next-btn").style.display="block";
        
    })
    
    
})