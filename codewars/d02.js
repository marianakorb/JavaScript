/*Nesta pequena tarefa, você recebe uma sequência de números separados por espaços e deve retornar o número mais alto e o mais baixo.

- Todos os números são válidos Int32, não há necessidade de validá-los.
- Sempre haverá pelo menos um número na string de entrada.
- A string de saída deve ser dois números separados por um único espaço, e o número mais alto é o primeiro.
 */

function highAndLow(numbers) {
    const arrayString = numbers.split(' ')
    const arrayNum = []

    //Laço de repetição usado para converter os elementos string de uma array para numbers.
    /*Foi necessário pois estavam avaliando apenas o primeiro algorismo de um número e não ele inteiro, devido ao fato de ser uma string. 
    Por exemplo: o número 42 era menor que o 9, pois 4 < 9.
    */
    for(let i in arrayString) {
        arrayNum.push(parseInt(arrayString[i]))
    }
   
    let menor = arrayNum[0]
    let maior = arrayNum[0]
  
    for (let n in arrayNum) {
        if (arrayNum[n] < menor) {
            menor = arrayNum[n]
        }
        if(arrayNum[n] > maior) {
            maior = arrayNum[n]
        }   
    }
    return `${maior} ${menor}`
}

let numbers = '12 4 21 7 1'
console.log(highAndLow(numbers))
