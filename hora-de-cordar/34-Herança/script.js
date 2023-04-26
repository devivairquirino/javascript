class Personagem{
    constructor(nome,raça, classe, elemento){
        this.nome=nome;
        this.raça=raça;
        this.classe=classe;
        this.elemento=elemento;
        this.mana="1000";
        this.vida="1000";
    }
    setNome(nome){
        this.nome=nome;
    }
    setRaça(raça){
        this.raça=raça;
    }
    setClasse(classe){
        this.classe=classe;
    }
    setElemento(elemento){
        this.elemento=elemento;
    }
    setVida(vida){
        this.vida=vida;
    }
    setMana(mana){
        this.mana=mana
    }
    info(){
        console.log("------------------------------------------------------------------------------")
        for (const key in this) {
            console.log(`${key.toUpperCase()}: ${this[key]}`);
        }
    }
}
class Elfo extends Personagem{
    constructor(nome,classe,elemento){
        const raça="Elfo"
        super(nome,raça,classe,elemento);
        this.mana=2000;
        
    }
}
class ElfoNegro extends Elfo{
    constructor(nome,classe){
        const elemento= "Darkness";
        super(nome,classe,elemento);
    }
}

const Player1= new Personagem();
Player1.setNome("Vhouross");
Player1.setRaça("Humano");
Player1.setClasse("Mago");
Player1.setElemento("Darkness");
Player1.info();

const Player2= new Elfo("Zendrics","Arqueiro","Fogo");

Player2.info();
const Player3= new ElfoNegro("Petrus","Mago");
Player3.info();