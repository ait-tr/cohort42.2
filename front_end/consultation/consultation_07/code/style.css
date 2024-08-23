//Пример 1. Таблица умножения для работы с вложенными циклами
const rows = 10;
const cols = 10;

//внешний цикл по строкам
for (let i = 1; i <= rows; i++) {
  //переменная, которая будет хранить значение текущей строки с результатами в каждой итерации
  let row = "";

  //внутренний цикл по столбцам
  for (let j = 1; j <= cols; j++) {
    //i*j = 1*1 - 1-я итерация внешнего цикла и 1-я итерация внутреннего цикла
    //i*j = 1*2 - 1-я итерация внешнего цикла и 2-я итерация внутреннего цикла
    const result = i * j;
    row += " ";
    row += result; // 1 2 ...
  }

  console.log(row) // 1 2 3 4 5 6 7 8 9 10
}

//Пример 2. Поиск числа (первое совпадение) в матрице
const matrix = [
  [10, 10, 20, 25],
  [30, 15, 35, 40],
  [50, 40, 25],
  [10, 45, 40, 80],
];

// console.log(matrix[0].length);
// console.log(matrix[3][1]);

const target = 60;
let found = false;

//внешний цикл
for (let i = 0; i < matrix.length; i++) {
  //внутренний цикл
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] === target) {
      console.log(`Найдено число - ${target}`);
      found = true;
      break;
    }
  }
}

if (!found) {
  console.log(`Число ${target} не найдено`);
}

//Пример 3. Поиск числа (каждое совпадение) в матрице
const newMatrix = [
  [10, 70, 80],
  [30, 15, 35, 40],
  [70, 40, 25],
  [10, 45, 40, 80],
];

const luckyNumber = 70;

//внешний цикл
for (let i = 0; i < newMatrix.length; i++) {
  let foundInRow = false;

  //внутренний цикл
  for (let j = 0; j < newMatrix[i].length; j++) {
    if (newMatrix[i][j] === luckyNumber) {
      console.log(`Найдено число - ${luckyNumber} на позиции (${i} ${j})`);
      foundInRow = true;
      continue;
    }
  }

  if (!foundInRow) {
    console.log(`Число ${luckyNumber} не найдено в этой строке`);
  }
}

//Пример 4. Работа с пользователем (confirm)
const userConfirm = confirm("Вы уверены, что хотите продолжить?");
console.log(userConfirm);

//используем тернарный оператор, для определения сообщения
const message = userConfirm ? "Вы продолжаете работу" : "Вы закончили работу";

console.log(message);
