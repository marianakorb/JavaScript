//Adicionar funcionalidades em objetos
let amigo = {nome: 'Mariana', 
sexo:'F',
peso: 54,
engordar(p=0){
    console.log('Engordou! ')
    this.peso += p  
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)