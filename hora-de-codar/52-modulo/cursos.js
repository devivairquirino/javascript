const cursos=["Javascript","HTML","CSS","C#","Arduino","C++"]
const carros=["Polo","Onix","Golf","Gol"]

class Cliente{
    constructor(name,idade,status){
        this.name=name
        this.idade=idade
        this.status=status
    }
}
const c1= new Cliente("Ivair",27,true)

export {cursos,carros,c1}