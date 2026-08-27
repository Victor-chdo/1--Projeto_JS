const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectValueToConvert = document.querySelector(".currency-select-value-to-convert")


const moedas = {
        BRL: { nome: "Real Brasileiro",taxa: 1, local: "pt-BR", currency: "BRL", image: "./assets/Real.svg" 
        }, USD: { nome: "Dolar Americano",taxa: 5.2, local: "en-US", currency: "USD", image: "./assets/Dolar.svg"
        }, EUR: { nome: "Euro",taxa: 6.2, local: "de-DE", currency: "EUR", image: "./assets/Euro.svg"
        }, GBP: { nome: "Libra Esterlina",taxa: 7, local: "en-GB", currency: "GBP", image: "./assets/Libra.svg"
        }, BTC: { nome: "BitCoin",taxa: 406097.54, local: "pt-BR", currency: "XBT", image: "./assets/BitCoin.png"
        }
}

function convertValues() {

    const valor = parseFloat(document.querySelector(".input-currency").value) || 0

    const origem = moedas[currencySelectValueToConvert.value]

    const destino = moedas[currencySelect.value]

    const resultado = (valor * origem.taxa) / destino.taxa

    const valorInicial = document.querySelector(".currency-value-to-convert")

    const valorFinal = document.querySelector(".currency-value")

    const valorInicialFormatado = new Intl.NumberFormat(origem.local, {
        style: "currency",
        currency: origem.currency
    }).format(valor)

    valorInicial.textContent = valorInicialFormatado

    const resultadoFormatado = new Intl.NumberFormat(destino.local, {
        style: "currency",
        currency: destino.currency
    }).format(resultado)

    valorFinal.textContent = resultadoFormatado
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

currencySelectValueToConvert.addEventListener("change", changeCurrencyLeft)
currencySelect.addEventListener("change", changeCurrencyRight)
convertButton.addEventListener("click", convertValues)
