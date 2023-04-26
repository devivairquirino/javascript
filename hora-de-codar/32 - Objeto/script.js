class Cliente{
    
    constructor(nome, idade, profissao, aprovado){
        this.nome=nome;
        this.idade=idade;
        this.profissao= profissao;
        this.aprovado=aprovado;

    }
    info(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        console.log(`Profissao: ${this.profissao}`);
        if(this.aprovado){
            console.log("Cliente está com crétido aprovado!")
        }
        else{
            console.log("Ainda não foi liberado linha de crédito para este cliente");        }
    }
    getNome(){
        return this.nome;
    }
    setNome(nome){
        this.nome=nome;
    }
    setAprovado(aprovado){
        this.aprovado=aprovado;
    }
}
let cliente01= new Cliente("Ivair",27,"Programador",true);
let cliente02 = new Cliente();
cliente02.setAprovado(true);
cliente02.setNome("Kethellen");
// cliente01.info();
cliente02.info()
