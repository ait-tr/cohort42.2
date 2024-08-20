//анонимные функции
const newFunc = (a, b, func) => {
  func(a, b);
};

newFunc(2, 3, (x, y) => x + y);

newFunc("Hello", "Tom", (greet, name) => {
  console.log(`${greet}, ${name}`);
});

// arr.push()

// const ob = {
//   newPush: ()=>{}
// }

// ob.newPush()

//Типы данных
// 1. String
// 2. Number (NaN, Infinity, дробные значения)
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. BigInt
// 7. Symbol
// примитивные типы данных (1-7)
// 8. Object (object, arrays, func)
// Сложные типы данных (8)

//Массивы
let newArray1 = [];
let newArray2 = ["apple", "grape"];

//заполнение массива
newArray1[0] = "red";
newArray1[2] = "blue";

// console.log(newArray1);
// console.log(newArray1[1]);

newArray1[3] = [123, 455, 65];
// console.log(newArray1);
// console.log(newArray1[3][2])

//метод
//push - добавляет элементы в конец массива и возвращает новую длину
// console.log(newArray1.push(1, "green"));
// console.log(newArray1);

//pop -удаляет элементы из конца массива и возвращает удалённый элемент
let deleteEl = newArray1.pop();
// console.log(deleteEl);
// console.log(newArray1);

//unshift - добавляет элементы в начало массива и возвращает новую длину
let result = newArray1.unshift("black", null);
console.log(result);
console.log(newArray1);

//shift
let delResult = newArray1.shift()
console.log(delResult);
console.log(newArray1);

//for of
let numbers = [3, 5, 6]

for(let number of numbers){
  console.log(number)
}