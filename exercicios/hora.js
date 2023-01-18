let a = new Date();

console.log(a);
if(a.getHours()>6 && a.getHours()<12){
    console.log('Bom Dia!');
}
else if(a.getHours>=12 && a.getHours<18){
    
    console.log('Boa tarde!');
}
else{
    console.log('Boa noite!')
}