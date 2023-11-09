// questão 1:
largura = Number(prompt("Insira a largura do retângulo"))
altura = Number(prompt("Insira a altura do retângulo"))

const num1 = parseInt(largura);
const num2 = parseInt(altura);
const area = num1 * num2

console.log("A área do retângulo é " + area)

// questão 2:
nota1 = Number(prompt("Insira o valor da primeira nota"))
nota2 = Number(prompt("Insira o valor da segunda nota"))
nota3 = Number(prompt("Insira o valor da terceira nota"))

const notaum = parseFloat(nota1)
const notadois = parseFloat(nota2)
const notatres = parseFloat(nota3)

const media = (notaum + notadois + notatres) / 3

console.log("A média das notas é " + media)

// questão 3:

peso = Number(prompt("Insira seu peso em kg"))
altura = Number(prompt("Insira sua altura em metros"))

const pesokg = parseFloat(peso)
const alturametro = parseFloat(altura)
const imc = (pesokg/(alturametro*alturametro))

const condicao1 = imc < 16.9
const condicao2 = imc > 6.9 && imc < 18.4 
const condicao3 = imc > 18.4  && imc < 24.9
const condicao4 = imc > 24.9 && imc < 29.9
const condicao5 = imc > 29.9 && imc < 34.9
const condicao6 = imc > 34.9 && imc < 40
const condicao7 = imc < 40

if(condicao1 === true){console.log("Seu IMC é ", imc , ", o que está muito abaixo do peso ideal.")
} else if (condicao2 === true) {console.log("Seu IMC é ", imc , ", o que está abaixo do peso ideal.")
} else if (condicao3 === true) {console.log("Seu IMC é ", imc , ", o que está no peso ideal.")
} else if(condicao4 === true){console.log("Seu IMC é ", imc , ", o que está acima do peso ideal.")
} else if(condicao5 === true){console.log("Seu IMC é ", imc , ", o que o enquadra em Obesidade grau I.")
} else if(condicao6 === true ){console.log("Seu IMC é ", imc , ", o que o enquadra em Obesidade grau II")
} else if(condicao7 === true){console.log("Seu IMC é ", imc , ", o que o enquadra em Obesidade grau III.")
}

// questão 4:

valorprincipal = Number(prompt("Insira o valor principal para calcular os juros simples"))
taxadejuros = Number(prompt("Insira a taxa de juros"))
tempo = Number(prompt("Insira o tempo do parcelamento em anos"))

const valor = parseFloat(valorprincipal)
const juros = parseFloat(taxadejuros)
const tempoano = parseFloat(tempo)

const jurossimples = (valor * juros * tempoano)
const montante = valor + jurossimples

console.log("O valor do montante total é " + montante)

// questão 5:

tabuada = parseInt(prompt("Insira um número à sua escolha:"))

let i = 1
for(i = 1; i <= 10; i++) {
    console.log (i * tabuada)
}
// questão 6:

palavra = (prompt("Insira uma palavra à sua escolha:"))
const palavraminuscula = palavra.toLowerCase()
let invertida = palavraminuscula.split("").reverse().join("");

if (palavraminuscula === invertida){
    console.log("A palavra é um palíndromo.")
} else {
    console.log("A palavra não é um palíndromo.")
}

// questão 7:

dolares = Number(prompt("Insira a quantia em dólares:"))
const dolar = parseFloat(dolares)
moeda = prompt("Deseja converter para euro ou reais?")

const moedaconversao = moeda.toLowerCase()

if(moedaconversao === "euro"){
    console.log("O valor convertido para euros é €", (dolar * 0.93))
} else if (moedaconversao === "reais") {
    console.log("O valor convertido para reais é R$", (dolar * 4.94))
} else {
    console.log("Moeda inválida");
}
