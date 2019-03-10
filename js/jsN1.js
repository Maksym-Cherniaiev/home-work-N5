document.querySelector(".execute-operation").addEventListener("click", convert)
const CONVERTER_API = "https://api.exchangeratesapi.io/latest?base=USD"

class CurrencyConverter {
  convert(currentRate, userValue) {
    return userValue * currentRate;
  }

  async getCurrencyRate() {
    const response = await fetch(CONVERTER_API);
    const currencyData = await response.json();
    return this.getEuroRate(currencyData);
  }

  getEuroRate(data) {
    const euroRate = data.rates.EUR;
    return euroRate;
  }
}


class PageConverter extends CurrencyConverter {
  constructor() {
    super();
    this.convertionResult = document.querySelector(".convetion-result");
    this.convertUserValue();
  }

  getUserValue() {
    return parseInt(document.querySelector(".user-value").value);
  }

  async convertUserValue() {
    const userValue = this.getUserValue();
    const currentEuroRate = await this.getCurrencyRate();

    const convertedValue = this.convert(userValue, currentEuroRate);
    this.showToUser(convertedValue);
  }

  showToUser(element) {
    this.convertionResult.textContent = element;
  }
}

function convert() {
  new PageConverter();
}
