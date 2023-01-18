let numeros=[4,5,6,7,8];
let outros=numeros;

//1 solução não apaga valor referencia

//numeros=[]
console.log(`numeros: ${numeros} outro:${outros}`);

// 2 solução apaga o valor referencia
numeros.length=0;
console.log(`numeros: ${numeros} outro:${outros}`);

//3 solução 