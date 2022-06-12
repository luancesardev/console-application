var numeros = [1,4,8,17,27,34,57,81,93,120]
let par = 0;
let impar = 0;

function verificaPar() {
    numeros.forEach(element => {
        if (element % 2 == 0) {
            par++;
        } else {
            impar++;
        }
    });
};
verificaPar();

console.log(numeros);
console.log("No array acima há " + par + " números pares.");
console.log("No array acima há " + impar + " números ímpares.");