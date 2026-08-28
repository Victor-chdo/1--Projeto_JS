const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectValueToConvert = document.querySelector(".currency-select-value-to-convert")
const inputValor = document.querySelector(".input-currency")

const valorInicial = document.querySelector(".currency-value-to-convert")
const valorFinal = document.querySelector(".currency-value")


const moedas = {
    BRL: {
        nome: "Real Brasileiro", taxa: 1, local: "pt-BR", currency: "BRL", image: "./assets/Real.svg"
    }, USD: {
        nome: "Dolar Americano", taxa: 5.2, local: "en-US", currency: "USD", image: "./assets/Dolar.svg"
    }, EUR: {
        nome: "Euro", taxa: 6.2, local: "de-DE", currency: "EUR", image: "./assets/Euro.svg"
    }, GBP: {
        nome: "Libra Esterlina", taxa: 7, local: "en-GB", currency: "GBP", image: "./assets/Libra.svg"
    }, BTC: {
        nome: "BitCoin", taxa: 406097.54, local: "pt-BR", currency: "XBT", image: "./assets/BitCoin.png"
    }
}

function formatarMoeda(moeda, numero) {
    const textoFormatado = new Intl.NumberFormat(moeda.local, {
        style: "currency",
        currency: moeda.currency
    }).format(numero)

    return textoFormatado
}

/* OUTRA FORMA DE FAZER

function formatarMoeda(moeda, numero) {
    return new Intl.NumberFormat(moeda.local, {
        style: "currency",
        currency: moeda.currency
    }).format(numero)
}

*/


function convertValues() {
    const valor = parseFloat(inputValor.value) || 0
    const origem = moedas[currencySelectValueToConvert.value]
    const destino = moedas[currencySelect.value]
    const resultado = (valor * origem.taxa) / destino.taxa

    valorInicial.textContent = formatarMoeda(origem, valor)
    valorFinal.textContent = formatarMoeda(destino, resultado)
}


function changeCurrencyLeft() {
    const currencyNameAc = document.querySelector(".currency-name-aC")
    const currencyImageAc = document.querySelector(".currency-img-aC")

    const origem = moedas[currencySelectValueToConvert.value]

    currencyNameAc.textContent = origem.nome
    currencyImageAc.src = origem.image

    convertValues()
}

function changeCurrencyRight() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    const destino = moedas[currencySelect.value]


    currencyName.textContent = destino.nome
    currencyImage.src = destino.image

    convertValues()
}

function formatarInput() {
    const apenasDigitos = inputValor.value.replace(/\D/g, "")
    const numeros = (parseFloat(apenasDigitos))/100

    const origem = moedas[currencySelectValueToConvert.value]
    inputValor.value = formatarMoeda(origem, numeros)
}

/* 
o hieroglifo /\D/g — peça por peça

Não são "exemplos" do que filtrar — é uma descrição de padrão, uma linguagem dentro da linguagem chamada Regex (expressão regular). 
Em vez de dizer "procure a letra a, e o b, e o !, e o R..." (impossível listar tudo), você descreve uma regra que casa com infinitas possibilidades:

As barras / ... /**: são as "aspas" do regex. Assim como " " delimita um texto, / / delimita um padrão. 
É o jeito de dizer ao JS: "o que está aqui dentro não é texto literal, é uma regra de busca".

O \D: é o coração da regra. Significa "qualquer caractere que NÃO seja dígito**". 
Uma letra, um espaço, um cifrão, uma vírgula — tudo isso casa com \D. Curiosidade que ajuda a memorizar: existe o irmão minúsculo \d, que é o oposto — "qualquer dígito". Maiúscula = negação.

O g (depois da barra final): é uma *flag* (modificador de comportamento) que significa "global**"
 — "aplique em TODAS as ocorrências, não pare na primeira". Sem ele, o replace trocaria só o primeiro caractere não-dígito e encerraria: "a1b2" viraria "1b2" — só o a sumiria.

O "" (segundo ingrediente): "troque por **nada", ou seja, delete.

Lendo a linha inteira em português:

inputValor.value.replace(/\D/g, "")

"Pegue o texto do campo, encontre todo caractere que não é dígito, e substitua cada um por nada."

Sobra só o esqueleto numérico. "R$ 1.234,56" → "123456" 😄 O ponto e a vírgula também são \D — morrem junto.
*/

changeCurrencyLeft()
changeCurrencyRight()

inputValor.addEventListener("input", formatarInput)
currencySelectValueToConvert.addEventListener("change", changeCurrencyLeft)
currencySelect.addEventListener("change", changeCurrencyRight)
convertButton.addEventListener("click", convertValues)

