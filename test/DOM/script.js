
let ibox= document.querySelector('#box');
ibox.addEventListener('click', mudarCor)
let visible= false;
function mudarCor(){
    
    let img_fundo= document.createElement("img");
    img_fundo.setAttribute('src','https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f7adcedd1d7c53ae18d851003a3cfae4.jpe');
    img_fundo.setAttribute('id','img-fundo');
    
    let fundo=document.getElementById('img-fundo');
    if(visible){
            document.body.removeChild(fundo);
            visible=false;
    }
    else{
        document.body.appendChild(img_fundo);
        visible=true;
    }

   
}
