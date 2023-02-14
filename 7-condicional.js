console.log(`Trabalhando com condição`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = true;
const temPassagem = false;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1); //removendo um item
}  else {
        console.log("Não é possivel realizar a venda");
    }

console.log("Embarque: \n \n")
if(idadeComprador >= 18 && temPassagem == true){
    console.log("Boa Viagem!")
} else {
    console.log("Desculpe não sera possivel viajar!");
}


console.log(listaDeDestinos);


