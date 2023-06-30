const url= document.querySelector("#url")
const btn_url= document.querySelector("#btn_url")


btn_url.addEventListener("click",evt=>{
    window.location=url.value
    
})
