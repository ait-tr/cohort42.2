// Задача 1
// У вас есть массив чисел [2, 4, 6, 8, 10]. Напишите функцию для удвоения каждого значения в массиве (массив нужно передать аргументом) и вывода результата в консоль.
// Вызовите функцию для демонстрации результата

let testArray = [2, 4, 6, 8, 10];

function doubleFunc(inputArr) {
  for (let i = 0; i < inputArr.length; i++) {
    // inputEl = inputEl*2;
    inputArr[i] *= 2;
  }
}

doubleFunc(testArray);
console.log(testArray);

// Задача 2
// Напишите функцию, которая принимает строку и число n, а затем возвращает первые n символов строки. Для отображения результа работы функции,
// вызовите её три раза с различными параметрами, результат каждого вызова присвойте отдельной переменной и выведите переменные в консоль

function getSubstring(inputStr, n) {
  let newString = inputStr.substring(0, n);
  return newString;
}

const exampleStr = "Hello, world";

let newSubstring1 = getSubstring(exampleStr, 1);
let newSubstring2 = getSubstring(exampleStr, 20);
let newSubstring3 = getSubstring(exampleStr);

console.log(
  `1-я строка - ${newSubstring1}; 2-я строка - ${newSubstring2}; 3-я строка - ${newSubstring3};`
);

// Задача 3*
// У вас есть массив чисел [10, 15, 20, 25, 30]. Напишите функцию для вычисления среднего значения элементов массива (массив нужно передать аргументом)
// и вывода результата в консоль. Вызовите функцию для демонстрации результата
let exampleArr = [10, 15, 20, 25, 35];

function getArrayAvg(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }

  let result = sum / arr.length;
  return result;
}

console.log(getArrayAvg(exampleArr));
