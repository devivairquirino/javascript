class CarroPadrao{
    constructor(){
        if(this.constructor===CarroPadrao){
            throw new TypeError("Está classe não pode ser instânciada");
        }
        if(this.ligar===undefined){
            throw new TypeError("É obrigatório implementar o método ligar")
        }
        if(this.desligar===undefined){
            throw new TypeError("É obrigatório implementar o método desligar")
        }
        this.portas=4
        this.rodas=4
        this.ligado=false
    }
}
class Carro extends CarroPadrao{
    constructor(tipo,estagioTurbo){
        super()
        this.turbo=new Turbo(estagioTurbo)
        switch(tipo){
            case 1:
                this.velMax=120
                this.nome="Normal"
                break;
            case 2:
                this.velMax=160
                this.nome="Esportivo"
                break
            case 3:
                this.velMax=200
                this.nome="Super Esportivo"
            default:
        }
        
        this.velMax+=this.turbo.pot;
    }
    ligar(){
          this.ligado=true  
    }
    desligar(){
        this.ligado=false;
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`VelMax: ${this.velMax}`)
        console.log(`Turbo: ${this.turbo.pot}`)
        console.log(`Portas: ${this.portas}`)
        console.log(`Rodas: ${this.rodas}`)
        console.log(`Ligado: ${(this.ligado?"Sim":"Não")}`)
        console.log("-------------------")
    }
}
class CarroEspecial extends Carro{
    constructor(estagioTurbo){
        super(4,estagioTurbo)
        this.tipoInfo=0
        this.velMax=300+this.turbo.pot
        this.nome="Carro Especial"
        
    }
    info(){
        if(this.tipoInfo==0){
            super.info()
        }
        else{
            console.log("")
            console.log("-----------------")
            console.log("CARRO RARO!!!!")
            super.info()
            console.log("")
        }
    }
}
class Turbo{
    constructor(e){
        switch (e){
            case 0:
                this.pot=0
                break;
            case 1:
                this.pot=50;
                break;
            case 2:
                this.pot=75
                break;
            case 3:
                this.pot=100;
                break;
            default:
        }
    }
}
const c1= new Carro(1,0);
const c2= new Carro(2,1)
const c3= new CarroEspecial(3)
// const c4= new CarroPadrao();

// console.log(c4)

c1.info();
c2.info();

c3.info();
c3.tipoInfo=1
c3.info();