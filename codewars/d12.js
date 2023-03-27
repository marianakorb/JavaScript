/*
Trolls estão atacando sua seção de comentários!

Uma forma comum de lidar com essa situação é retirar todas as vogais dos comentários dos trolls, neutralizando a ameaça.

Sua tarefa é escrever uma função que recebe uma string e retorna uma nova string com todas as vogais removidas.

Por exemplo, a string "Este site é para perdedores LOL!" se tornaria "Ths wbst s fr lsrs LL!".

Nota: para este kata ynão é considerado uma vogal.
 */

function disemvowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let newStr = '';
    for (let i = 0; i <= str.length; i++) {
        let char = str.charAt(i);
        if (vowels.indexOf(char) == -1) {
            newStr += char;
        }
    }
        return newStr;
        
};

console.log(disemvowel("This website is for losers LOL!")) // "Ths wbst s fr lsrs LL!"