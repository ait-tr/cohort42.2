// вывод в консоль
console.log("Hello JS");

// Создание переменных
let  dog = "Sharik";
dog = "Tuzik";
console.log(dog);

const cat = "Barsik";
const cat2= cat
console.log(cat);

//Примитивные типы данных
// 1 string

let str1 = "Можно в двойных";
let str2 = 'Можно в одинарных';
let str3 = "13"; // это строка
let str4 = str1 + " " + str2;
console.log(str4);

console.log(str1.toUpperCase()); // перевод в верхний регистр

// 2 Number

let num1 = 9;
let num2 = 9.6;

// 3 bigInt
let num3 = 1239n;

// bigint — низкий поклон в сторону крипро- валют, токенов, контрактов.
// Они оперируют большими числами, и там этот тип данных очень пригождается.
// Скорее всего, не пригодится в вашем обычном фронтенде.

// 4 Boolean
let isDrunk = true;
//условная конструкция

if (isDrunk){
    console.log("Ты пьян!")
}
const result = isDrunk ? "Ты пьян!": "Ты не пьян!";
console.log(result);

// 5 undefined
let str5;
str5 = 12;
console.log(str5);

// 6 null 
// null - отсутствие значения

let empty = null;
console.log(empty);
// Можем присвоить null вручную


// 7 symbol
let s1 = Symbol("что-то")
//symbol — специальный тип данных.
// Задача значений типа symbol — служить специальными именами для обозначения специальных свойств объектов.


// ПРЕОБРАЗОВАНИЕ ТИПОВ
// 1 Преобразование в строку

// неявное преобразование

let str7 = ''+9// "9"
console.log(typeof str7);

// явное преобразование

const num4 = 10;
let str8 = String(num4); // "10"
console.log(typeof str8);
// пример

const res = 9 + 12 + "5"; // "215"
console.log(typeof res);
const res2 = "5" + 9 + 12; // "5912"

// Преобразование в число неявное

const num5 = +"6";// 6
const res3 = +"9" + +"10";
console.log(typeof res3);

// Явное преобразование в число

const num6 = Number("117");// 117
const num7 = Number("129*#") // NaN - not a number появляется при неудачном преобразовании или
// неудачной мат операции
console.log(typeof num7)

// Преобразование в булевое значение
// число в булевое 

const res4 = Boolean(9); // True
const res5 = Boolean(0); // False
const test5 = Boolean (-1) // True

// строка в булевое
const res6 = Boolean(""); // False
const res7 = Boolean(" "); // True
const res8 = Boolean(null) // False
const res9 = Boolean(undefined) // False

// Равенство строгое и нестрогое
// === строгое равенство
// == нестрогое равенство
// = присвоение

console.log( 9 === "9"); // false
console.log( 9 == "9") // true - - число преобразуется в стринг

console.log(('b' + 'a' + + 'a' + 'a').toLowerCase())


let age = 18;
if (age < 18){
    console.log("Вы еще несовершеннолетний")
} else if (age >= 18 && age < 65){
    console.log("Вы взрослый человек")
} else {
    console.log("Вы пенсионер");
}

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Понедельник";
    break;
  case 2:
    dayName = "Вторник";
    break;
  case 3:
    dayName = "Среда";
    break;
  case 4:
    dayName = "Четверг";
    break;
  case 5:
    dayName = "Пятница";
    break;
  case 6:
    dayName = "Суббота";
    break;
  case 7:
    dayName = "Воскресенье";
    break;
  default:
    dayName = "Некорректный номер дня";
}
console.log(dayName);



// Использования шаблонных строк

const firstName = "Михаил";
const lastName = "Иванов";
const age1 = 30;
const city = "Лондон";


// Использование шаблонных строк
const greeting = `Привет, меня зовут ${firstName} ${lastName}.  Мне ${age1} лет,я живу в городе ${city}. `;
console.log(greeting);


//Массив - динамический массив
// Длина не фиксирована

// Два способа создания массива

const arr1 = []; // 1 способ
const arr2 = new Array() // 2 способ

// Как добавить значение по индексу

const fruits = [];
fruits[0] = "Banana";// Banana
fruits[1] = "Apple";
console.log(fruits);

// Как получить значение по индексу

console.log(fruits[0]);
console.log(fruits.length);

//Как создать массив сразу со значениями


const cars = ["Lada","Mercedes","Opel","Audi","VW","Tesla"];

// Методы работы с массивами

const students = [];
students.push("John"); // добавили элемент справа
console.log(students);
students.push("Tom"); // добавили элемент справа
console.log(students);
students.unshift("Alex"); // добавили слева
console.log(students);
// pop - удалил элемент с конца массива
const vik = students.pop();
console.log(students);
console.log(vik);
// shift - удаляет элемент слева массива(начало)

students.shift();
console.log(students);



// Примеры явного и неявного преобразования типов данных в JavaScript

// 1. Преобразование строки в число (Явное)
// javascript
// Копировать код
// let str = "42";
// let num = Number(str);
// console.log(num); 

// 2. Преобразование строки в число (Неявное)
// javascript
// Копировать код
// let str = "42";
// let num = +str;
// console.log(num); 

// 3. Преобразование числа в строку (Явное)
// javascript
// Копировать код
// let num = 123;
// let str = String(num);
// console.log(str); 

// 4. Преобразование числа в строку (Неявное)
// javascript
// Копировать код
// let num = 123;
// let str = num + "";
// console.log(str); 

// 5. Преобразование логического значения в строку (Явное)
// javascript
// Копировать код
// let isTrue = true;
// let str = String(isTrue);
// console.log(str); 

// 6. Преобразование логического значения в строку (Неявное)
// javascript
// Копировать код
// let isTrue = true;
// let str = isTrue + "";
// console.log(str); 

// 7. Преобразование массива в строку (Явное)
// javascript
// Копировать код
// let arr = [1, 2, 3];
// let str = String(arr);
// console.log(str); 

// 8. Преобразование массива в строку (Неявное)
// javascript
// Копировать код
// let arr = [1, 2, 3];
// let str = arr + "";
// console.log(str); 

// 9. Преобразование undefined в строку (Явное)
// javascript
// Копировать код
// let value;
// let str = String(value);
// console.log(str); 

// 10. Преобразование undefined в строку (Неявное)
// javascript
// Копировать код
// let value;
// let str = value + "";
// console.log(str); 

// 11. Преобразование объекта в строку (Явное)
// javascript
// Копировать код
// let obj = { a: 1 };
// let str = String(obj);
// console.log(str); 

// 12. Преобразование объекта в строку (Неявное)
// javascript
// Копировать код
// let obj = { a: 1 };
// let str = obj + "";
// console.log(str); 

// 13. Преобразование логического значения в число (Явное)
// javascript
// Копировать код
// let isTrue = true;
// let num = Number(isTrue);
// console.log(num); 

// 14. Преобразование логического значения в число (Неявное)
// javascript
// Копировать код
// let isTrue = true;
// let num = +isTrue;
// console.log(num); 

// 15. Преобразование числа в логическое значение (Явное)
// javascript
// Копировать код
// let num = 1;
// let isTrue = Boolean(num);
// console.log(isTrue); 

// 16. Преобразование числа в логическое значение (Неявное)
// javascript
// Копировать код
// let num = 1;
// let isTrue = !!num;
// console.log(isTrue); 

// 17. Преобразование null в строку (Явное)
// javascript
// Копировать код
// let value = null;
// let str = String(value);
// console.log(str); 

// 18. Преобразование null в строку (Неявное)
// javascript
// Копировать код
// let value = null;
// let str = value + "";
// console.log(str); 

// 19. Преобразование NaN в строку (Явное)
// javascript
// Копировать код
// let value = NaN;
// let str = String(value);
// console.log(str); 

// 20. Преобразование NaN в строку (Неявное)
// javascript
// Копировать код
// let value = NaN;
// let str = value + "";
// console.log(str); 








