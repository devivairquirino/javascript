const celular={
    marca:'sony',
    tamanho:6.0,
    bateria:5500
};
console.log(celular);

function criarCelular(marca,tamanho,bateria){
    return{
        marca,
        tamanho,
        bateria,
        ligar(){
            console.log('Ligando');
        }
    }
}

const celular1=criarCelular('sansumg',{vertical:8,horizontal:9},4500)

console.log(celular1);