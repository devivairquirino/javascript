const div_data= document.querySelector("div.data")
const div_horas= document .querySelector(".horas")
const in_tempo= document.querySelector("#tempo")
const bt_ativar= document.querySelector("#ativar")
const bt_parar= document.querySelector("#parar")

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
}
relogio();
setInterval(relogio,1000)

