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
const racas= [...document.querySelectorAll(".raca")];
const elementos= [...document.querySelectorAll(".elemento")];
racas.map((raca,index)=>{
    raca.addEventListener("click",()=>{
        // index 2 refere ao ElfoNEgro que quando Selecionado, tambem seleciona o elemento trevas
        if(index===2){
            elementos[4].checked="true";
            elementos.map((el,i)=>{
                el.disabled="true";
                if(i!==4){
                    el.style.filter="saturate(0)";
                }
            })
            
        }
        else{
            elementos.map((el,i)=>{
                el.disabled="true";
                el.style.filter="saturate(100%)";
               
            })
        }
    })
})