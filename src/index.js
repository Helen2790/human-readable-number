module.exports = function toReadable (number) {
  const single = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const ty = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


  if (number < 20) {
    return single[number];
  }

  if (number < 20) {
    return ty[number];
  }

  if (number < 100) {
    return ty[Math.floor(number / 10)] + (number % 10 !== 0 ? ' ' + single[number%10]:'')
  }

  if (number < 1000) {
  return single[Math.floor(number / 100)] + ' hundred' + (number % 100 !== 0 ? ' ' + toReadable(number % 100): '')
  }
}
