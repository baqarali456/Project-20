const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
// console.log(about)
const articles = document.querySelectorAll('.content');

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerText === "Vision"){
            updatebtn();         
            btn.classList.add('active')
           document.querySelectorAll('.content')[0].classList.remove('active')
           document.querySelectorAll('.content')[1].classList.add('active')
        }
       else if(e.target.innerText === "Goals"){
        updatebtn();          
        btn.classList.add('active')
           document.querySelectorAll('.content')[1].classList.remove('active')
           document.querySelectorAll('.content')[2].classList.add('active')
        }
        else if(e.target.innerText === "History"){
            updatebtn()
          btn.classList.add('active')
          document.querySelectorAll('.content')[1].classList.remove('active')
          document.querySelectorAll('.content')[2].classList.remove('active')
          document.querySelectorAll('.content')[0].classList.add('active')
        }
      //   if(btn.innerText )
      })
    
})

function updatebtn(){
    btns.forEach((btn)=>{
        btn.classList.remove('active')
    })
}




