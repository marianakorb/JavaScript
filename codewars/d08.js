/*
Faça um programa que filtre uma lista de strings e retorne uma lista com apenas o nome de seus amigos.
Se um nome tiver exatamente 4 letras, pode ter certeza que deve ser um amigo seu! Caso contrário, você pode ter certeza que ele não é...

Ex: Entrada = ["Ryan", "Kieran", "Jason", "Você"], Saída = ["Ryan", "Você"]
Nota: mantenha a ordem original dos nomes na saída.
*/

function friend(friends){
    let strNome
    let arrAmigos = [] 
    
    for (let i in friends) {
        strNome = friends[i]
        
        if(strNome.length === 4) {
                arrAmigos.push(strNome)
            }
    }
    return arrAmigos
}

const amigos = ["Ryan", "Kieran", "Jason", 'joao', 'otavio', 'kely', "Yous"]
console.log(friend(amigos))

// Outra forma de fazer:
function friend(friends){
    return friends.filter(n => n.length === 4)
  }


// MÉTODO filter()
// O método filter() é um recurso que permite fazer a filtragem de elementos
function metodoFilter() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    function buscarNumerosPares (value) {
        if (value % 2 == 0) 
        return value;
    }
    let numerosPares = numeros.filter(buscarNumerosPares);
    console.log(numerosPares);
}
metodoFilter() // [2, 4, 6, 8, 10]

//Forma simplicaficada do código:
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let retorno = numeros.filter(pares => (pares %2)== 0);
console.log(retorno);

/*
Na prática, ele faz a leitura dos elementos da array em busca de um valor de referência passado por meio de uma função callback. Ao fazer o teste em cada elemento, o método retorna um ou mais conteúdos que atendam à especificação indicada na função callback e armazena o resultado em uma nova variável do tipo array.
*/