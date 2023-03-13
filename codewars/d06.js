/*
Você provavelmente conhece o sistema de "curtir" do Facebook e outras páginas. As pessoas podem "curtir" postagens de blog, fotos ou outros itens. Queremos criar o texto que deve ser exibido ao lado de tal item.

Implemente a função que recebe um array contendo os nomes das pessoas que gostam de um item. Ele deve retornar o texto de exibição conforme os exemplos:
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Nota: Para 4 ou mais nomes, o número "and 2 others"simplesmente aumenta.
*/

function likes(names) {
    if(names.length === 0) return 'no one likes this'
    if(names.length === 1) return `${names[0]} likes this`
    if(names.length === 2) return `${names[0]} and ${names[1]} like this`
    if(names.length === 3) return `${names[0]}, ${names[1]} and ${names[2]} like this`
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    
}

const nenhum = []
const umaPessoa = ['Peter']
const duasPessoas = ['Jacob', 'Alex']
const tresPessoas = ['Max', 'John', 'Mark']
const quatroOuMais = ['Alex', 'Maria', 'Jacob', 'Mark', 'Max']
console.log(likes(quatroOuMais))


// Solução com swith:
function likes01(names) {
    names = names || []; // to prevent the case names is undefined or null.
    switch(names.length){
      case 0: return 'no one likes this'; break;
      case 1: return `${names[0]} likes this`; break;
      case 2: return `${names[0]} and ${names[1]} like this`; break;
      case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`; break;
      default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
  }