function Postagem(titulo,mensagem,autor,vizualizacoes,comentarios,estaAoVivo){
    this.titulo=titulo,
    this.mensagem=mensagem;
    this.autor=autor,
    this.vizualizacoes= vizualizacoes,
    this.comentarios = [],
    this.estaAoVivo=estaAoVivo
}

const postagem1= new Postagem('Bolo Mofado','Amor próprio','Ivair',100,{autor:'Ivair',comentario:'Parabens'},true);


console.log(postagem1.comentarios);