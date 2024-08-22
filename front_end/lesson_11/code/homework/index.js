// Задача 1
// Создайте массив строк и выведите в консоль его длину, первый и последний элементы массива
let exampleArray = ["apple", "grape", "lime", "cherry"];

console.log(exampleArray.length);
console.log(exampleArray[0]);
console.log(exampleArray[exampleArray.length - 1]);

// Задача 2
// Создайте новый массив на основе массива [1, 2, 3, 4, 5, 6], в который будут входить только четные числа из заданного массива
let exampleNumbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = [];

for (let number of exampleNumbers) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}

console.log(evenNumbers);

// Задача 3*
// Найдите максимально и минимальное значения из массива [3, 7, 2, 9, 4] и вывидите их в консоль. ! Не используя математические методы max и min, только циклы
let arrayNumbers = [3, 7, 2, 9, 4];

let max = arrayNumbers[0];
let min = arrayNumbers[0];

for (let number of arrayNumbers) {
  if (number > max) {
    max = number;
  }
  if (number < min) {
    min = number;
  }
}

console.log(`Max - ${max}`);
console.log(`Min - ${min}`);
