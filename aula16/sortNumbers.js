/*
    JavaScript tem um sort()método que você pode usar em arrays, mas os resultados são quase sempre estranhos e não retornam o que você espera inicialmente.

 Isso ocorre porque o método do JavaScript sort() converte cada item da matriz em strings e constrói a sequência comparando cada item da matriz com base nos valores do código UTF-16 quando não há retorno de chamada especificado.

 Quando sort()é usado, ele chama automaticamente o String()método cast em cada elemento do array por padrão e transforma tudo em uma string. Ele faz isso para garantir que as coisas possam ser classificadas de maneira uniforme. É mais fácil classificar quando as coisas são do mesmo tipo.
*/
function sortNumbers(a, b) {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
}
  let valores = [5, 10, 55, 48, 2, 9]
  
  console.log(valores.sort(sortNumbers))