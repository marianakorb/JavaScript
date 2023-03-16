const arrayA = [10, 20, 30, 40];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let inicializador = 75
console.log(arrayA.reduce(reducer));
console.log(arrayA.reduce(reducer, inicializador));

/* 
Resultado:
100
175
*/

/* acumulador (acc) – valor inicial (ou o valor do callback anterior);
valorAtual (cur) – o valor do elemento atual;
index (idx) – o índice atual;
array original (src)- o array onde a iteração está ocorrendo. */