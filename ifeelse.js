// verificando a idade:

idade = Number(prompt("Qual a sua idade?"))

if (idade >= 18) {
    console.log("Você é maior de idade.")
} else if (idade < 18) {
    console.log("Você é menor de idade.")
}

// número positivo ou negativo:

num = Number(prompt("Digite um número à sua escolha:"))

if (num < 0) {
    console.log("O número é negativo.")
} else if (num === 0) {
    console.log("O número é igual a zero.")
} else if (num > 0) {
    console.log("O número é positivo.")
} else { console.log("O número não pertence ao Conjunto dos Reais")
}

// Login Simples:

senha = Number(prompt("Insira a senha pré-definida."))
const senhacerta = 1234

if (senha === senhacerta) {
    console.log("Login bem-Sucedido")
} else {
    console.log("Senha incorreta.")
}

// Calculadora Básica:

numero = Number(prompt("Insira um número à sua escolha"))
numero2 = Number(prompt("Insira outro número à sua escolha"))
operacao = prompt("Escolha uma das seguintes operações para realizar entre os números inseridos: Digite * para multiplicação, / para divisão, + para adição ou - para subtração.")

if (operacao === "*") {
    console.log("O resultado da conta é ", numero * numero2)
} else if (operacao === "/") {
    console.log("O resultado da conta é ", numero / numero2)
} else if (operacao === "+") {
    console.log("O resultado da conta é ", numero + numero2)
} else if (operacao === "-") {
    console.log("O resultado da conta é ", numero - numero2)
} else { console.log("Números ou operação inválida.")}

// Maior de Três Números:

num1 = Number(prompt("Insira um número à sua escolha."))
num2 = Number(prompt("Insira um segundo número à sua escolha."))
num3 = Number(prompt("Insira um último número à sua escolha."))

let um = parseFloat(num1)
let dois = parseFloat(num2)
let tres = parseFloat(num3)

if (um < dois && um < tres) {
    console.log("O maior número inserido é o ", um)
} else if (dois > um && dois > tres) {
    console.log("O maior número inserido é o ", dois)
} else if (tres > um && tres > dois) {
    console.log("O maior número inserido é o ", tres)
} else if (um === dois && um === tres) {
    console.log("Os três números são de mesmo valor.")
} else if (um === dois && um > tres) {
    console.log("Os maiores números são os números ", um, " e ", dois, " que são de mesmo valor.")
} else if (um === tres && um > dois) {
    console.log ("Os maiores números são os ", um, " e ", tres, " que são de mesmo valor.")
} else if (dois === tres && dois > um) {
    console.log("Os maiores números são os ", dois, " e ", tres, " que são de mesmo valor.")
} else {
    
}

// fim
