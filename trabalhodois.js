// questão 1

let numero1 = Number(prompt("Q1) Insira um número"))
let numero2 = Number(prompt("Q1) Insira outro número"))

if (numero1 > 0 && numero2 > 0) {
       console.log(numero1 + numero2)
} 

// questão 2

let numero = Number(prompt("Q2) Insira um número"))
let numerodois = Number(prompt("Q2) Insira outro número"))

if (numero % 2=== 0 || numerodois % 2 === 0) {
    console.log(numero * numerodois)
} 

// questão 3

let number = Number(prompt("Q3) Insira um número"))
let numberdois = Number(prompt("Q3) Insira outro número"))

if (numberdois !== 0) {
    console.log(number / numberdois)
} 

// questão 4

let arrayteste = [1, 2, 3, 4, 5]

console.log(arrayteste.reverse())

// questão 5

let arrayteste2 = [1, 2, 3, 4, 5]

arrayteste2.pop()
arrayteste2.splice(0, 1)

console.log(arrayteste2)

// questão 6

let frase = prompt("Q6) Insira uma frase")

vowels = frase.match(/[aeiouAEIOU]/g)

console.log(vowels)

// questão 7

let frase2 = prompt("Q7) Insira uma frase")

consoantes = frase2.match(/[^aeiou AEIOU]/g)

console.log(consoantes)

// questão 8

let arrayteste3 = [1, 2, 3, 4]

if (arrayteste3.length >= 2) {
    console.log(arrayteste3.pop())
} 

// desafio

let arrayteste4 = [1, 2, 3, 4]

if (arrayteste4.length >= 1 && arrayteste4[0] > 0) {
    console.log(arrayteste4[0])
} 