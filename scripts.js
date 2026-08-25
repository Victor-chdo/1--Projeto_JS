const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectValueToConvert = document.querySelector(".currency-select-value-to-convert")

function convertValues() {
    //console.log("Funcionou!")

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas


    const dolarToday = 5.2
    const euroToday = 6.1
    const libraToday = 7
    const bitcoinToday = 406097.54

    if (currencySelectValueToConvert.value === "BRL") {

        if (currencySelect.value == "dolar") {
            //Se o select estiver selecionando o valor de dolar, entre aqui
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / dolarToday)
        }

        if (currencySelect.value == "euro") {
            //Se o select estiver selecionando o valor de euro, entre aqui
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / euroToday)
        }

        if (currencySelect.value == "libra") {
            //Se o select estiver selecionando o valor de libra, entre aqui
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / libraToday)
        }

        if (currencySelect.value == "bitcoin") {
            //Se o select estiver selecionando o valor de bitcoin, entre aqui
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "XBT", //código não oficial comum para bitcoin
                minimumFractionDigits: 2,
                maximumFractionDigits: 8
            }).format(inputCurrencyValue / bitcoinToday)
        }

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }
    else if (currencySelectValueToConvert.value !== "BRL")
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