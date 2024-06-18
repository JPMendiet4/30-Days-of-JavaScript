function add(a, b) {
    return a + b;
  }


  const operation = add;

function makeOperation(operation, num1, num2) {
  return operation(num1, num2);
}

console.log(makeOperation(operation, 2, 3)); // Output: 5


const numbers = [1, 2, 3, 4, 5];
const doubles = numbers.map(function(number) {
  return numbers * 2;
});
console.log(doubles); // [2, 4, 6, 8, 10]

