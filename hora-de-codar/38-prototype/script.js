class Nave{
        constructor(energia){
            this.energia=energia;
        }
    
}
const OptimusPrime= new Nave(1000);

Nave.prototype.vida=3000;
console.log(OptimusPrime.vida)