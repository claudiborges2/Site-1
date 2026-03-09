function verificaAprovacao()
{
let nota = document.getElementById("nota").value
console.log("Nota inserida:, nota")

    if (nota >=7)
    {
        document.getElementById("resultado").innerHTML = "Aluno aprovado"
        alert("Aluno aprovado")
    }
    else{
        document.getElementById("resultado").innerHTML = "Aluno reprovado"
        alert("Aluno reprovado")       
    }
    
}