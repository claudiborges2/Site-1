function verificaAprovacao()
{
let nota = document.getElementById("nota").value
console.log("Nota inserida:, nota")

    if (nota >=7)
    {
        document.getElementById("aprovado").innerHTML = "Aluno aprovado"
        alert("Aluno aprovado")
    }
    else{
        document.getElementById("aprovado").innerHTML = "Aluno super reprovado"
        alert("Aluno super reprovado")       
    }
    
}

function trocaCor()
{
    const div1 = document.getElementById("div-1");
    const div2 = document.getElementById("div-2");
    const div3 = document.getElementById("div-3");

    div1.style.backgroundColor = "red";
    div2.style.backgroundColor = "green";
    div3.style.backgroundColor = "blue";
}

function retornaCor()
{
    const div1 = document.getElementById("div-1");
    const div2 = document.getElementById("div-2");
    const div3 = document.getElementById("div-3");

    div1.style.backgroundColor = " ";
    div2.style.backgroundColor = " ";
    div3.style.backgroundColor = " ";

}

function efetuaOperação()
{
     let num1 = parseFloat(document.getElementById("num1").value);
     let num2 = parseFloat(document.getElementById("num2").value);
     let operador = document.getElementById("operador").value;

    switch (operador)
    {
        
        case "+": 
            resultado = num1 + num2 
            break;
        case "-":
            resultado = num1 - num2 
            break; 
        case "*": 
            resultado = num1 * num2 
            break; 
        case "/": 
            if(num2 == 0)
            {
                resultado = "ivisão por 0 é invelida!"
            }
            resultado = num1 / num2 
            break; 

        default: 
            resultado =  "operador inválido!"
        
    }
{   document.getElementById("resultado").innerHTML = "Resultado: " + resultado;}


}