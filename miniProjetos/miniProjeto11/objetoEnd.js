// Javascript - Objeto Endereço

// Criar um objeto endereço que contem:
// Rua 
// Cidade
// CEP 
// exibirEndereço(endereço)

function ObjetoEndereco(Rua, Cidade, CEP){
    this.Rua= Rua,
    this.Cidade= Cidade,
    this.CEP= CEP,
    this.exibirEndereco= function(endereco){for(let key in endereco){
        console.log(`${key}: ${endereco[key]}`);
    }}

}
const cliente1=new ObjetoEndereco('Av.Vicente Lourenção','Areiópolis',18670124);

cliente1.exibirEndereco(cliente1);

