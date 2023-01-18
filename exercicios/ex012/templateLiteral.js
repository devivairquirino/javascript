const senha = 'ivaire0502';
const obj = 'ivair0502'

function verificarSenha(senha,obj){
    if (senha===obj){
        return true;
    }
    return false;
    
}
if(verificarSenha(senha, obj)){
    console.log(`Bom dia ${obj.slice(0,5)}!`)
}
else{
    console.log(`Desculpe a senha ${senha} está incorreta.`)
}