const nome= new String("ivair")
const nome2= new String("ivair")
const sobrenome= new String("quirino")

console.log("Nome: "+nome.concat(sobrenome))
const codeString=sobrenome.charCodeAt(0)
console.log("Primeira: "+nome.charAt(0))
console.log("Primera UNICODE: "+String.fromCharCode(codeString))

console.log('Letra "a": '+nome.indexOf("a"))
console.log('Letra 2º "i": '+nome.lastIndexOf("i"))

console.log(nome.localeCompare(nome2))

console.log(nome.replace("vai","foi"))

console.log(nome[0].toUpperCase()+nome.slice(1,4))

console.log((nome+sobrenome).search("ir"))

const link= new String("www.google.com.br")

console.log(link.split("."))

console.log(nome.valueOf())

const num=10
console.log(typeof num.toString())
