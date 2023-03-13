// No exemplo a seguir, buscaremos na variável do tipo array quais estados se iniciam com a letra S. Confira o código.
function estadoComS() {
    let estados = ["São Paulo", "Minas Gerais", "Rio de Janeiro", "Rio Grande do Norte", "Santa Catarina", "Acre"];
    function retornaEstado (value){
        if (value.charAt(0) == "S") 
        return value;
    }
    let resultado = estados.filter(retornaEstado);
    console.log(resultado);
}
estadoComS()
// Forma simplificada
let estados = ["São Paulo", "Minas Gerais", "Rio de Janeiro", "Rio Grande do Norte", "Santa Catarina", "Acre"];
let resultado = estados.filter(estadoComR => (estadoComR.charAt(0) == 'R'))
console.log(resultado)
