document.body.onload = () =>{
    let numeros= [...document.getElementsByClassName('num')];
    
    let orderDec=10;
    for (const num of numeros) {

        num.style.order= orderDec;
        orderDec--;
    }

}