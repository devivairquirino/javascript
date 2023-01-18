function Celular(marcaCelular,tamanhoTela,capacidadeBateria){
    this.marca=marcaCelular,
    this.Tela=tamanhoTela,
    this.Bateria=capacidadeBateria
}
const celular = new Celular('nextel',5.6,6000);

console.log(celular);