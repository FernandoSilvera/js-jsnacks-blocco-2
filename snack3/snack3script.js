// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione (indice) dispari
let intNums = [];
let sum = 0;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

intNums.length = getRandomInt(5, 50);

for (i = 0; i <= (intNums.length - 1); i++) {
  intNums[i] = Math.floor(Math.random() * 1000);

  if (intNums[i] % 2 !== 0) {
    sum = sum + intNums[i];
  }
}

console.log(sum);