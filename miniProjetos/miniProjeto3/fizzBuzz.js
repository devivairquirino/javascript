//Divisível por 3 => Fizz
//Divisível por 5 => Buzz
//Divisível por 3 e 5 => FizzBuzz
//Não divisível por 3 ou 5 => entrada
//Não é um número => 'Não é um número'
const result=fizzBuzz(11);


console.log(result);

function fizzBuzz(num){
    if(typeof num !== 'number')
        return 'Não é um número!';
    if(num%3===0 && num%5==0)
        return 'FizzBuzz';      
    if(num%3===0)
        return 'Fizz';
    if(num%5===0)
    return 'Buzz';
    
    return num;
}