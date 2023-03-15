/*
Há um ônibus circulando na cidade que leva e deixa algumas pessoas em cada ponto de ônibus.

Você recebe uma lista (ou array) de pares inteiros. Os elementos de cada par representam o número de pessoas que entram no ônibus (o primeiro item) e o número de pessoas que descem do ônibus (o segundo item) em um ponto de ônibus.

Sua tarefa é retornar o número de pessoas que ainda estão no ônibus após o último ponto de ônibus (após o último array). Mesmo sendo o último ponto de ônibus, o ônibus pode não estar vazio e algumas pessoas ainda podem estar dentro do ônibus, provavelmente estão dormindo lá :D

Dê uma olhada nos casos de teste.

Lembre-se de que os casos de teste garantem que o número de pessoas no ônibus seja sempre >= 0. Portanto, o inteiro retornado não pode ser negativo.

O segundo valor no primeiro par da matriz é 0, pois o ônibus está vazio no primeiro ponto.*/
 

let number = function(busStops){
    //let entrou = 0
    //let saiu = 0
    let passageiros = 0
    for (let i = 0; i < busStops.length; i++){
        //entrou += busStops[i][0]
       // saiu += busStops[i][1]
       passageiros += busStops[i][0]
       passageiros -= busStops[i][1]
    }

    //let passageiros = (entrou) - (saiu)
    return passageiros
}

console.log(number([[10,0],[3,5],[5,8]]))
