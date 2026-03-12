
const turma1 = ["Fábio, Critina, Jessica"];
const turma2 = ["João,Diogo"];

const aluno1turma1: "Fábio";
const aluno2turma1 : "Cristina";
const aluno3turma1: "Jessica";
const aluno1turma2 : "João";
const aluno2turma2 : "Diogo";

console.log[ "aula20aluno 1: ", turma1];

console.log[ "Aula20aluno 2: ", turma2];

console.log[turma1 [3]];
frutas.push [Jessica];
console.log[turma1];
console.log [turma2]

const carros = [ "uno", "fusca", "escort", "gol" ]

const conteudo = document.getElementById("conteudo")

dados = "";
i = 0;
while(i<4)
{
    dados += "<p>"+carros[i]+"</p>";  
    i++;
}
criaSecao("loop while", dados);

dados = "";
i = 0;
{
    dados += "<p>"+carros[i]+"</p>";
    i++;
}while(i<carros.length)
criaSecao("lopp while melhorado", dados);

dados = "";
i = 0;
do
{
    dados += "<p>"+carros[i]+"</p>";
    i++;
}while(i<carros.length)
criaSecao("lopp while invertido", dados);

dados = "";
i = 0;
for(i = 0;i< carros.length; i++)
{
 dados += "<p>"+carros[i]+"</p>";
}
criaSecao("lopp for", dados);

dados = "";
for(let carro of carros)
{
 dados += "<p>"+carros+"</p>";
}       
criaSecao("lopp for Of", dados);

let carro1 = {marca: "Ford", modelo: "Ka"};
let carro2 = {marca: "Fiat", modelo: "Uno"};

let carro2 =[];
carro2.push(carro1);
carro2.push(carro2);
console.log(carro2);

dados ="";
for(let carro of carro2)
{
    let propriedades ="";
    for(let prop  in carro)
    {
        propriedades += carro[prop] +"1";
    }   
     dados += "<p>"+propriedades+"</p>";
}       
    criaSecao("lopp for in", dados);

    dados ="";

    carros.forEach((carro) => 
    {
        dados += "<p>"+carros+"</p>";

    })
    criaSecao("lopp forEach", dados);

    