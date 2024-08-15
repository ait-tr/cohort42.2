// Округление числа вверх
let roundedUp = Math.ceil(4.2);
console.log(roundedUp); // 5
// Округление числа вниз
let roundedDown = Math.floor(4.8);
console.log(roundedDown);// 4
// Возведение в степень
let power = Math.pow(2,3);
console.log(power);// 8 
// Генерация случайного числа от 0 до 1
let random  = Math.random();// 0.5188114240186514
console.log(random);

h1 = ("qwerty")


// Массив JAVA vs JS

// Динамическое изменение размера в JavaScript:
// JS:

// Массивы в JavaScript 
// динамически изменяют свой 
// размер. Вы можете добавлять или 
// удалять элементы в массиве без 
// явного указания размера.


// Java:

// В Java размер массива 
// определяется при его создании и не 
// может быть изменен. Если вам 
// нужно изменить размер массива, 
// вам придется создать новый массив

// Динамическая типизация в JavaScript:

// JS:
// Переменные в JavaScript 
// могут хранить значения разных 
// типов, и массивы не ограничены 
// определенным типом данных. Вы 
// можете хранить в массиве 
// значения различных типов, таких 
// как числа, строки, объекты и 
// другие массивы.


// Java:

// В Java массивы строго 
// типизированы. Это означает, что 
// при создании массива вы должны 
// указать тип данных, который он 
// будет содержать, и массив будет 
// принимать только значения этого 
// типа.



// Интерфейс и методы:

// JS:
// В JavaScript массивы 
// предоставляют богатый набор 
// методов для работы с данными, 
// таких как push, pop, shift, unshift, 
// splice и другие.


// Java:
// В Java массивы 
// предоставляют ограниченный набор 
// методов, и большинство операций с 
// массивами выполняются с 
// использованием стандартных 
// циклов.

function universalGreeting(name,greetingFunction){
    return greetingFunction(name);
}
function englishGreeting(name){
    return `Heello, ${name}`; //  шаблонная строка - бэктикс
}
const res2 = universalGreeting("John",englishGreeting);
console.log(res2);
const res3 = universalGreeting("Sayochi", (name =>`Konnichiwa, ${name}`) );
console.log(res3);

const years = prompt("Сколько вам лет?");
alert("Вам"+ " " + years + " " + "лет")

const isAdmin = confirm("Вы администратор?");
alert(isAdmin);