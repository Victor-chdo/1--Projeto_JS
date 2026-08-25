const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectValueToConvert = document.querySelector(".currency-select-value-to-convert")


const moedas = {
        real: {

        }
    }

function convertValues() {
    //console.log("Funcionou!")

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas


    const valor = 


}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real brasileiro"
        currencyImage.src = "./assets/Real.svg"
    }

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/Dolar.svg"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.svg"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra esterlina"
        currencyImage.src = "./assets/Libra.svg"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "BitCoin"
        currencyImage.src = "./assets/BitCoin.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
currencySelectValueToConvert.addEventListener("change", )