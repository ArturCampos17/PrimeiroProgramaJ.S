console.log(`\nTrabalhando com condição`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = true;
let temPassagem = false;
const destino = "Salvador";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador < 3) {

    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existente");
        destinoExiste = true;
        break;
    } else {
        destinoExiste = false;
    }
    contador += 1;
}

console.log("Destino existe: ",destinoExiste);

    if(podeComprar && destinoExiste){
        console.log("Boa Viagem!");
    } else{
        console.log("ERR0R!");
    }


