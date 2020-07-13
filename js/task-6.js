let input;
const numbers = [];
let total = 0;
//get and validate the number
do {
  input = prompt('Please enter you number');
  numbers.push(input);
} while (input !== null && input !== '');

//count numbers
for (let i = 0; i < numbers.length; i += 1) {
  let number = Number(numbers[i]);
  if (!Number.isNaN(number)) {
    total += Number(numbers[i]);
  }
}
//return result
console.log(`Общая сумма чисел равна ${total}`);
