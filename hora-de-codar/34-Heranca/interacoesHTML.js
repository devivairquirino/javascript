let teste= 0;
export function criarCard(namePerson){
    const urlElemento="img/ar.png";
    const classe="mago"
    const titulo="[ Arqueiro ]"
    const info="Os arqueiros são versáteis e usam suas habilidades de precisão para derrotar seus inimigos, eles têm um domínio incomparável com arco.";

    const card= document.createElement("div");
    card.setAttribute("class","card cardPequeno");

    const contentCard= document.createElement("div");
    contentCard.setAttribute("class","cardClasses");

    const header= document.createElement("div");
    header.setAttribute("class","headerCard");

    const pHeader= document.createElement("p");
    pHeader.innerHTML= namePerson;

    const elemento= document.createElement("img");
    elemento.setAttribute("src",urlElemento);
    elemento.setAttribute("alt","Elemento");

    header.appendChild(pHeader);
    header.appendChild(elemento);

    contentCard.appendChild(header);

    const input= document.createElement("input");
    input.setAttribute("type","radio");
    input.setAttribute("class","classe");
    input.setAttribute("id",classe);

    contentCard.appendChild(input);

    const infoBox= document.createElement("div");
    infoBox.setAttribute("class","infoCard");

    const tituloInfo= document.createElement("h4");
    tituloInfo.innerHTML= titulo;

    const pInfo= document.createElement("p");
    pInfo.innerHTML= info;

    infoBox.appendChild(tituloInfo);
    infoBox.appendChild(pInfo);

    contentCard.appendChild(infoBox);
    
    card.appendChild(contentCard);
    teste++;

    return card;

}