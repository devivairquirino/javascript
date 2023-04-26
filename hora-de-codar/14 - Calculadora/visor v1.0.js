const botao= [...document.getElementsByClassName('botao')];
const visor= document.getElementById('visor');

function addEvent  (){
    // percorre todos as tag com a classe botao e adiciona eventos nelas
    for (const btn of botao) {
        switch (btn.firstChild.textContent){
            case 'AC':
                btn.addEventListener('click',limparVisor);
                break;
            case 'backspace':
                btn.addEventListener('click',apagar);
                break;
            default:
                btn.addEventListener('click', () =>{escreverVisor(btn);});
        }
    }
}

function apagar(){
    visor.value= visor.value.slice(0,-1);
    numeros[0]= Number(`${numeros[0]}`.slice(0,-1));
;
}
function limparVisor(){
    visor.value='';
    numeros=[];
}
// variaveis utilizadas para armazenar valores digitados, para posteriormente passar para a função que ira fazer o calculo
let numeros=[];
let acumulador='';

function escreverVisor (btn){
    // textoDiv armazena o texto presente na span dentro da Div
    const textoDiv=btn.firstChild.textContent;
    // armazena o ultimo digito do visor
    const ultimoDigito= visor.value.slice(-1);
    
    // verifica se textoDiv não é um numero, se for um numero retorna false, mas ! nega a afirmação, entao se for um numero ele retorna !false ou seja true;
    // Executa se for um número.
    if(!isNaN(textoDiv)){
        visor.value+=textoDiv;
        acumulador+= textoDiv;
    }   
    //  Verifica se o ultimoDigito é NaN se for ele subtitui pelo novo digito exceto se for π
    else if(isNaN(ultimoDigito) && ultimoDigito!='π' && textoDiv!='π'){
            visor.value= visor.value.replace(ultimoDigito , textoDiv);    
    }
    else{
        numeros.push(Number(acumulador));
        numeros=[numeros.reduce((a,b)=>a+b)];
        acumulador='';
        // Caso o = seja digitado mostra o valor calculado e armazenado em números
        if(textoDiv==='='){
            visor.value= numeros;
        }
        else{
            visor.value+= textoDiv;
        }    
    }
}
addEvent ();