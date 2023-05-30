const div_hora= document.querySelector(".hora")
const div_min= document.querySelector(".min")
const div_seg= document.querySelector(".seg")



const exibirHoras= function(){
    setInterval(()=>{
        const data= new Date()
        const seg= data.getSeconds()
        const min= data.getMinutes()
        const hora= data.getHours()
    
        div_seg.innerHTML= seg<10?"0"+seg:seg
    
        div_min.innerHTML= min<10?"0"+min:min
        div_hora.innerHTML= hora<10?"0"+hora:hora
    },1000)
    
}
exibirHoras()