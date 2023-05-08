const  cards= [...document.querySelectorAll(".card")];
const radioClass= [...document.querySelectorAll(".classe")];

cards.map((card,index)=>{
    card.addEventListener("click",()=>{
        limparClass();
        card.classList.toggle("cardSelecionado");
        radioClass[index].checked="true";
        
    })
});
// limpa a classe cardSelecionado, permitindo que apenas um card seja selecionado;
function limparClass(){
    const selecionados= [...document.querySelectorAll(".cardSelecionado")];
    selecionados.map(el=>{
        el.classList.remove("class","cardSelecionado");
    })
}