const cursos=["Javascript","HTML","CSS","Arduino","C++","Python"]
const getTodosCursos=()=>{
    return cursos
}
export{cursos}
export function sayHi(){
    console.log("Hello Wolrd")
}
export function getCursos(i_curso){
    return cursos[i_curso]
}

export default getTodosCursos