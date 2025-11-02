const btn = document.getElementById("pass")
const forum = document.querySelector("form")
let outer = document.querySelector(".outer")

forum.addEventListener("submit",(e)=>{
   e.preventDefault();
   const daeta = new FormData(forum);
   const naame = daeta.get('user') 
   outer.innerHTML= `<div class="message">
                         <h2>Welcome Back ${naame}</h2>
                       </div>`
})
