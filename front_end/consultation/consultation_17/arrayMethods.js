/* Задача 1. Задан массив чисел. 
Вернуть массив только с нечетными числами - 
[3, 5, 8, 10, 13, 121, 5, 12, 14] */
let array = [3, 5, 8, 10, 13, 121, 5, 12, 14];

let negativeArray = array.filter((number)=> number % 2 !==0);
console.log(negativeArray);

/* Задача 2. Вернуть массив, в который будут входить слова 
с длиной строго больше 5 символов и кроме слова "orange". 
["apple", "banana", "orange", "grape", "kiwi"] */

let newArray =["apple", "banana", "orange", "grape", "kiwi"];

let fruits = newArray.filter((fruit) => fruit.length>5 && fruit !== 'orange');
console.log(fruits);

/* Задача 3. Вернуть сумму всех чисел массива, которые больше 10. 
[3, 5, 8, 10, 13, 121, 5, 12, 14]; */

let numberArray = [3, 5, 8, 10, 13, 121, 5, 12, 14];

let sumNumber =  numberArray.filter((number)=>number>10).reduce((sum, number)=> sum + number);
console.log(sumNumber);

