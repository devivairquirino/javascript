const btn_imp= document.querySelector("#imprimir")
const table= document.getElementById("tabela").innerHTML

btn_imp.addEventListener("click",()=>{
    let style="<style>"
    style+="table{width:100%;border-collapse:collapse;}"
    style+="td,th{border:2px solid black;}"
    style+="</style>"
    const win= window.open('','','height=500,width=500')
    win.document.write("<html><head><title>Imprimindo...</title>")
    win.document.write(style)
    win.document.write("</head><body>")
    win.document.write(table)
    win.document.write("</body>")
    win.print()
})