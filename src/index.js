module.exports = function toReadable (number) {
  let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number === 0) {
    return 'zero'
  }

  if (number < 20) {
    return ones[number]
  }

  if (number < 100 && number > 19) {
    let first = Math.floor(number/10);
    let second = number % 10;
    if (second === 0) {
      return tens[first]
    } else {
      return tens[first] + ' ' + ones[second]
    } 
  }

  if (number < 1000) {
    let hundred = Math.floor(number/100)
    let tenses = number % 100;
    return ones[hundred] + ' ' + 'hundred' + (tenses ? ' ' + toReadable(tenses) : '')
  }

}
