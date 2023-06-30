const olhos= [...document.querySelectorAll('.iris-olhos')]
let posx_mouse=null
let posy_mouse=null
window.addEventListener("mousemove",evt=>{
   posx_mouse= evt.clientX
   posy_mouse= evt.clientY
   olhos.forEach(ol=>{
    const x = posx_mouse - ol.offsetLeft - (ol.offsetWidth / 2);
const y =(posy_mouse - ol.offsetTop - (ol.offsetHeight / 2));
const radians = Math.atan2(y, x);
const angle = radians * (180 / Math.PI);
ol.style.transform = "rotate(" + angle + "deg)";
   })
})
