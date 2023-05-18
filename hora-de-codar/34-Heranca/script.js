import { criarCard } from "./interacoesHTML.js";
const boxNovos= document.querySelector(".boxNovos");
const btCriar= document.querySelector("button");
class Personagem{
    constructor(nome,raça,classe, elemento){
        this.nome=nome;
        this.raça=raça;
        this.classe=classe;
        this.elemento=elemento;
        this.mana= 1000;
        this.vida= 1000;
        
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
        this.mana=mana;
    }
    setInfoClasse(textInfo){
        this.textInfo=textInfo;
    }
    getInfo(){
        return {nome: this.nome, raça: this.raça, classe: this.classe, elemento: this.elemento, vida: this.vida, mana: this.mana};
    }
    info(){
        console.log("------------------------------------------------------------------------------")
        for (const key in this) {
            console.log(`${key.toUpperCase()}: ${this[key]}`);
        }
    }
}
class Minotauro extends Personagem{
    constructor(nome,classe,elemento){
        const raça="Minotauro";
        super(nome,raça,classe,elemento);
        this.vida= 3000;
    }
}
class Humano extends Personagem{
    constructor(nome,classe,elemento){
        const raça="Humano";
        super(nome,raça,classe,elemento);
        this.mana=1500;
        this.vida=1500
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
        const elemento= "Trevas";
        super(nome,classe,elemento);
        this.mana=2500;
    }
}

let novosPersonagens= [];

btCriar.addEventListener("click",()=>{
    const racaSel = document.querySelector(".raca:checked").getAttribute("id");
    const classeSel =  document.querySelector(".classe:checked").getAttribute("id");
    const elementoSel= document.querySelector(".elemento:checked").getAttribute("id");
    let novoPerson;
    const textInfo= document.querySelector(".classe:checked").nextElementSibling.children[1].textContent;


    const inputNome= document.querySelector("#nome");


       if(inputNome.value!==""){ 
        switch (racaSel){
            case "humano":
                novoPerson= new Humano();
                break;
            case "elfo":
                novoPerson= new Elfo();
                break;
            case "elfoNegro":
                novoPerson= new ElfoNegro();
                break;
            default:
                novoPerson= new Minotauro();
        }

        novoPerson.setNome(inputNome.value);
        novoPerson.setClasse(classeSel);
        novoPerson.setElemento(elementoSel);
        novoPerson.setInfoClasse(textInfo)
        
        novosPersonagens.push(novoPerson);
        console.log(novosPersonagens);
        
        const info= novoPerson;
        
        const novoCard= criarCard(info);
        boxNovos.appendChild(novoCard);
    }
    else{
        alert("Insira o nome do personagem!")
    }
    
})
