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
    
    function tradução()
    {
    let idioma = parseFloat(document.getElementById("idioma").value);


    switch (idioma)
    {
       case "ingles": 
            resultado = Hello
            break;
        case "portugues":
            resultado = Oi
            break; 
        case "espanhol": 
            resultado = Holla
            break; 
        case "italiano": blablabla
            resultado = Holla
            break;  
            

    }
}        



            

          