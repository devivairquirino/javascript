const primos=[1,2,3,5,7,11,13,17,19];
console.log(`With "for of":`)
for(let num of primos){
    console.log(`Index: ${primos.indexOf(num)}  Value: ${num}`)
}

console.log(`With "Foreach":`);

primos.forEach((value,key)=>console.log(`Index: ${key}  Value: ${value}`))