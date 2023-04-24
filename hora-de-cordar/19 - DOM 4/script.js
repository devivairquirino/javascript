const box= document.querySelector('#caixa1');
const cursos= [...document.querySelectorAll('.curso')];
const filhos= [...box.children];

console.log(cursos[2].children.length>0 ? "possui filhos": 'não possui filhos');
console.log(filhos.map(el=>el.innerHTML= 'SCASS'));
