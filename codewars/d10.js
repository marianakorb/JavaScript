/*

Você receberá uma matriz de números inteiros. Seu trabalho é pegar esse array e encontrar um índice N onde a soma dos inteiros à esquerda de N é igual à soma dos inteiros à direita de N. Se não houver nenhum índice que faça isso acontecer, retorne -1.

Por exemplo:

Digamos que você receba o array {1,2,3,4,3,2,1}:
Sua função retornará o índice 3, porque na 3ª posição do array, a soma do lado esquerdo do índice ( {1,2,3}) e a soma do lado direito do índice ( {3,2,1}) são iguais 6.

Vejamos outro.
Você recebe o array {1,100,50,-51,1,1}:
Sua função retornará o índice 1, porque na 1ª posição do array, a soma do lado esquerdo do índice ( {1}) e a soma do lado direito do índice ( {50,-51,1,1}) são iguais 1.

Último:
Você recebe a matriz {20,10,-80,10,10,15,35}
No índice 0, o lado esquerdo é {}
O lado direito é {10,-80,10,10,15,35}
Ambos são iguais 0quando adicionados. (Arrays vazios são iguais a 0 neste problema)
O índice 0 é o lugar onde o lado esquerdo e o lado direito são iguais.

Nota: Lembre-se de que na maioria das linguagens de programação/script o índice de uma matriz começa em 0.

Entrada:
Uma matriz inteira de comprimento 0 < arr < 1000. Os números na matriz podem ser qualquer inteiro positivo ou negativo.

Saída:
O índice mais baixo Nem que o lado à esquerda de Né igual ao lado à direita de N. Se você não encontrar um índice que se encaixe nessas regras, retornará -1.

Observação:
se você receber uma matriz com várias respostas, retorne o menor índice correto.
*/

function findEvenIndex(arr){
   // usar método reduce
}

console.log(findEvenIndex([1,2,3,4,3,2,1]))

// Método reduce()
/*
De maneira simples, o reduce busca reduzir um array. Isto é, ao final ele gera um valor único de qualquer tipo, como, por exemplo, a soma de todos os elementos de tal array. 
Ela é uma função iteradora que, quando chamada, passa por todos os elementos de uma lista, executa alguma regra para cada um desses elementos e no final retorna alguma coisa.
A função reduce é bastante flexível, bem mais que suas semelhantes. Isso porque ela retorna praticamente o que a gente quiser: um number, uma string, um objeto ou um novo array
O método reduce() do JavaScript é uma função pilar da programação funcional. Ele executa uma função para cada elemento do array, isto é, ele acumula um único valor de uma matriz.


*/
