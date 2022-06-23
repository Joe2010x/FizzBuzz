

const divisible = (input, check, output) => ((input % check === 0) ? output : '');

const fizz = num => divisible(num, 3, 'fizz');

const buzz = num => divisible(num, 5, 'buzz');

const lessThanZero = num => ((num < 0) ? `${num} ... "Please provide a positive number. Try again"` : '');

const moreThan100 = num => ((num > 100) ? `${num} ... "Please provide a number below 100"` : '');

const isNotNumber = num => ((isNaN(num)) ? `${num} ... "Please provide a number. Try again"` : '');

const fizzBuzz = num => lessThanZero(num) + moreThan100(num) + isNotNumber(num) + fizz(num) + buzz(num);

const getFizzBuzz = array => array.map(element => ((fizzBuzz(element) !== '') ? fizzBuzz(element) : element.toString()));

module.exports = {
    divisible, fizz, buzz, fizzBuzz, getFizzBuzz,
};