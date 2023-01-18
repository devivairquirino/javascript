//Velocidade máxima de atá 70
// a cada 5 km  acima do limite você ganha 1 ponto
const velocidade=velMax(125);

console.log(velocidade);

function velMax(vel){
    let pontos=0;
    let limiteAcima;
    
    if(vel<=70)
        return 'ok';
    else{
        limiteAcima=(vel-70)/5
        do {
            pontos++;
            
        } while (pontos<limiteAcima);
        if(pontos>=12)
            return 'Carteira Suspendia!'
        return pontos;
    }
}