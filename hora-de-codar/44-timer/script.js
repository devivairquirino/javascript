const div_data= document.querySelector("div.data")
const div_horas= document .querySelector(".horas")
const in_tempo= document.querySelector("#tempo")
const bt_ativar= document.querySelector("#ativar")
const bt_parar= document.querySelector("#parar")
const hora_alarme= document.querySelector("#hora_alarme")
const timer= document.querySelector('.box_alarme')

const som_alarme= new Audio("alarm.mp3")
som_alarme.loop=-1

let ts_atual=null
let ts_alarme=null
let alarme_ativado=false
let alarme_tocando=false

bt_ativar.addEventListener("click",()=>{
    ts_atual=Date.now()
    ts_alarme=ts_atual+(in_tempo.value*1000)
    alarme_ativado=true

    const dt_alarme= new Date(ts_alarme)
    const hora= dt_alarme.getHours()<10?"0"+dt_alarme.getHours():dt_alarme.getHours()
    const min= dt_alarme.getMinutes()<10?"0"+dt_alarme.getMinutes():dt_alarme.getMinutes()
    const seg= dt_alarme.getSeconds()<10?"0"+dt_alarme.getSeconds():dt_alarme.getSeconds()
    
    
    hora_alarme.innerHTML=`Hora do Alarme: ${hora}:${min}:${seg}`
})

bt_parar.addEventListener("click",()=>{
    alarme_ativado=false
    alarme_tocando=false
    hora_alarme.innerHTML="Hora do Alarme:"
    in_tempo.value=0
    timer.classList.remove("alarme")

    som_alarme.pause()
    som_alarme.currentTime=0
    
})

const data= new Date();
const dia= data.getDate()<10?"0"+data.getDate():data.getDate()
const mes= data.getMonth()<10?"0"+data.getMonth():data.getMonth()
const ano= data.getFullYear()

div_data.innerHTML=`${dia}/${mes}/${ano}`

function relogio(){
    const data=new Date()
    const hora= data.getHours()<10?"0"+data.getHours():data.getHours()
    const min= data.getMinutes()<10?"0"+data.getMinutes():data.getMinutes()
    const seg= data.getSeconds()<10?"0"+data.getSeconds():data.getSeconds()

    div_horas.innerHTML=`${hora}:${min}:${seg}`

    if(alarme_ativado && !alarme_tocando){
        if(data.getTime()>= ts_alarme){
            alarme_tocando=true
            som_alarme.play()
            timer.classList.add("alarme")
        }
    }
}
relogio();
setInterval(relogio,1000)