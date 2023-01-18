//Velocidade máxima de atá 70
// a cada 5 km  acima do limite você ganha 1 ponto
const velocidade=velMax(300);


console.log(velocidade);

function velMax(vel){
    const max=70;
    const pontoMax=12;
    const kmPorPonto=5;
    
    if (vel<=max)
        return 'Velocidade ok.';
    else{
        const pontos= Math.floor((vel-max)/kmPorPonto);
        if(pontos>=12)
            return 'Carteira Suspensa';
        return pontos;
    }
}