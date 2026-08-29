const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectValueToConvert = document.querySelector(".currency-select-value-to-convert")
const inputValor = document.querySelector(".input-currency")

const valorInicial = document.querySelector(".currency-value-to-convert")
const valorFinal = document.querySelector(".currency-value")

const nameOrigem = document.querySelector(".currency-name-origem")
const imageOrigem = document.querySelector(".img-origem")
const nameDestino = document.querySelector(".currency-name-destino")
const imageDestino = document.querySelector(".img-destino")


const moedas = {
    BRL: {
        nome: "Real Brasileiro", decimais: 2, taxa: 1, local: "pt-BR", currency: "BRL", image: "./assets/Real.svg"
    }, USD: {
        nome: "Dólar Americano", decimais: 2, taxa: 5.2, local: "en-US", currency: "USD", image: "./assets/Dolar.svg"
    }, EUR: {
        nome: "Euro", taxa: 6.2, decimais: 2, local: "de-DE", currency: "EUR", image: "./assets/Euro.svg"
    }, GBP: {
        nome: "Libra Esterlina", decimais: 2, taxa: 7, local: "en-GB", currency: "GBP", image: "./assets/Libra.svg"
    }, BTC: {
        nome: "BitCoin", decimais: 8, taxa: 406097.54, local: "pt-BR", currency: "XBT", image: "./assets/BitCoin.png"
    }
}

function formatarMoeda(moeda, numero) {
    const textoFormatado = new Intl.NumberFormat(moeda.local, {
        style: "currency",
        currency: moeda.currency,
        maximumFractionDigits: moeda.decimais
    }).format(numero)
    
    return textoFormatado
}
// ver nota 1

function convertValues() {
    const valor = obterValorNumerico()
    const origem = moedas[currencySelectValueToConvert.value]
    const destino = moedas[currencySelect.value]
    const resultado = (valor * origem.taxa) / destino.taxa

    valorInicial.textContent = formatarMoeda(origem, valor)
    valorFinal.textContent = formatarMoeda(destino, resultado)
}


function changeCurrencyLeft() {
    const origem = moedas[currencySelectValueToConvert.value]

    nameOrigem.textContent = origem.nome
    imageOrigem.src = origem.image
    imageOrigem.alt = `Símbolo da moeda ${origem.nome}`

    inputValor.placeholder = formatarMoeda(origem, 10000)

    convertValues()
}

function changeCurrencyRight() {
    const destino = moedas[currencySelect.value]

    nameDestino.textContent = destino.nome
    imageDestino.src = destino.image
    imageDestino.alt = `Símbolo da moeda ${destino.nome}`

    convertValues()
}

function formatarInput() {
    const valorNumerico = obterValorNumerico()

    const origem = moedas[currencySelectValueToConvert.value]
    inputValor.value = formatarMoeda(origem, valorNumerico)

    convertValues()
}

function obterValorNumerico() {
    const apenasDigitos = inputValor.value.replace(/\D/g, "")
    const numeros = (parseFloat(apenasDigitos))/100 || 0

    return numeros 
}
// ver nota 2

changeCurrencyLeft()
changeCurrencyRight()

inputValor.addEventListener("input", formatarInput)
currencySelectValueToConvert.addEventListener("change", changeCurrencyLeft)
currencySelect.addEventListener("change", changeCurrencyRight)
convertButton.addEventListener("click", convertValues)

