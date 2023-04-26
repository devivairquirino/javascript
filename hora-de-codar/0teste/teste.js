const word='PARALELEPIPEDO'
let array=[];

for (const letra of word) {
    array.push(letra)
}
const wordReverse= array.reduce((ant,atual)=>{
    return atual+ant;;
})
console.log(array)
console.log(word);
console.log(wordReverse);