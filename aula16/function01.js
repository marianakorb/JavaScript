
function parOuImpar(num){
    if (num % 2 == 0){
        return 'Par'
    }else {
        return 'Ímpar'
    }
}

let res = parOuImpar(8)

console.log(res)