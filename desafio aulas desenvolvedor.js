function verificaAprovacao()
{
let desconto = document.getElementById("desconto").value
console.log("desconto inserido:, desconto")

    if (desconto <=200)
    {
        document.getElementById("desconto").innerHTML = " Confirme sua compra"
        alert("Confirme sua compra")
    }
    else{
        document.getElementById("desconto").innerHTML = "Verifique os valores para aprovação da sua compra"
        alert("Verifique os valores para aprovação da sua compra")       
    }
    
}