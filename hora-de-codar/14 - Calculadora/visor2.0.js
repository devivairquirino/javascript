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

}
function limparVisor(){
    visor.value='';
}
let ress;

function escreverVisor (btn){
    const textoDiv= btn.firstChild.textContent;
    if(textoDiv==='='){
        
        visor.value= ress;
        ress=0;
    }
    else{
        visor.value+= textoDiv;
    }

        const operador= visor.value.match(/\D/);
        ress= calcular(visor.value, operador[0]);

}
let resultado=0;
function calcular(visor,op){
    let numeros= visor.split(op);
    console.log('-' + numeros);
    switch (op){
        case '+':
            resultado= somar(numeros);
            break;
        case '-':
            resultado= subtrair(numeros);
            break;
        case 'x':
            resultado= multiplicar(numeros);
            break;
        case '÷':
            resultado= dividir(numeros);
            break;
        case '%':
            resultado= porcentagem(numeros);
            break;
        case '^':
            resultado= potencia(numeros);
            break;
        case '!':
            resultado= fatorial(numeros);
            break;
        case '√':
            resultado= raizQuadrada(numeros);
            break;
        default:
            console.log('errou');
    }
    return resultado;
}
export function somar(num){
    return num.reduce((a,b)=>Number(a)+Number(b));
}
function subtrair(num){
    return num.reduce((a,b)=>Number(a)-Number(b));
}
function multiplicar(num){
    return num.reduce((a,b)=>Number(a)*Number(b));
}
function dividir(num){
    return num.reduce((a,b)=>Number(a)/Number(b));
}
function porcentagem(num){
    return num.reduce((a,b)=>(Number(a)*Number(b))/100);
}
function potencia(num){
    return num.reduce((a,b)=>Number(a)**Number(b));
}
function fatorial(num){
    let numFat= Number(num[0]);
    let ress=1;
   for(let i=numFat; i>=1 ;i--){
        ress*= i;
        console.log(i)
   }
   return ress;
}
function raizQuadrada(num){
   return (Number(num[0])**0.5);
}
addEvent ();
