/*O problema do subarray de soma máxima consiste em encontrar a soma máxima de uma subsequência contígua em um array ou lista de inteiros:
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

O caso fácil é quando a lista é composta apenas de números positivos e a soma máxima é a soma de todo o array. Se a lista for composta apenas por números negativos, retorne 0.

Lista vazia é considerada como tendo a maior soma zero. Observe que a lista ou matriz vazia também é uma sublista/subarray válida.*/

let maxSequence = function(arr){
    let rec = 0, sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum = 0;
      for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        if (sum > rec) {
          rec = sum;      
        }
      }
    }
    return rec;
  }

  
  

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6