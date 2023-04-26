const botoes= document.getElementsByTagName('button');
const box1= document.getElementById('box1');
const box2= document.getElementById('box2');
const copiar= botoes[6];
const bt= [...botoes];
const voltar= window.document.getElementById('voltar');

copiar.addEventListener('click', copiando)
voltar.addEventListener('click', voltando);

function voltando(){
    for (const element of bt) {
        if(element.textContent==='Copiar >'){
            break;
        }
        element.style.backgroundColor='buttonface';
        element.style.color='black';
        box1.appendChild(element);
    }
}
function copiando (){
    for (const element of bt) {
        if(element.style.backgroundColor==='red'){
            box2.appendChild(element);
        }
    }
}

document.body.onload= addClick();

function addClick(){
    for (const element of bt) {
        if(element.textContent==='Copiar >'){
            break;
        }
        element.addEventListener('click', ()=> selecionar(element));
    }
}
function selecionar (element){
    this.element=element;
    if(element.style.color=='white'){
        element.style.color='black';
        element.style.backgroundColor='buttonface';
        
    }
    else{
        element.style.color='white';
        element.style.backgroundColor='red';
        
    }
}
