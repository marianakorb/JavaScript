
let nome = window.prompt("Qual seu nome?")
document.write(`Olá ${nome}! Seu nome tem ${nome.length} letras <br>`)
document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()}<br>`)
document.write(`Seu nome em minúsculas é ${nome.toLowerCase()}<br>`)

// Formatação do número para um valor monetário
let n1 = 1545.5
document.write(n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))