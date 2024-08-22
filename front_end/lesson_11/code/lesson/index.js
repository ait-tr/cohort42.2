//-------------деструктурирующее присваивание
let colorsConfig = ["dark", "light"];

//1 вариант - без деструктуризации
// let theme = colorsConfig[0];
// let secondTheme = colorsConfig[1];
// console.log(theme, secondTheme);

// 2 вариант - с деструктуризацией
let [theme, secondTheme, size = "20px"] = colorsConfig;
console.log(theme, secondTheme, size);

//-----------Встроенные методы для взаимодействия с пользователем
//Метод alert
// let message = "Hello, User";
// let alertResult = alert(message);
// console.log(alertResult);

//Метод prompt
// При нажатии на кнопку Ok метод prompt вернёт значение из поля или пустую строку, если значения нет
// При нажатии на кнопку Cancel метод prompt вернёт null, даже если в поле есть значение
// let resultPrompt = prompt("Введите свой возраст", 100);
// console.log(resultPrompt);

//Метод confirm
// let resultConfirm = confirm('Вы являетесь администратором?')
// console.log(resultConfirm);

//--------- Функции. Основы
let message = "Hello";

function showMessage() {
  // let message = "Hello, User";
  console.log(message);
}

showMessage();
console.log(message);

//Функции с параметрами
// function newShowMessage(name, age) {
//   if (age === undefined) {
//     console.log("Возраст отсутствует");
//   } else {
//     let message = `Hello, ${name}. Age ${age}`;
//     console.log(message);
//   }
// }

function newShowMessage(name = "John", age = 20) {
  let message = `Hello, ${name}. Age ${age}`;
  console.log(message);
}

newShowMessage("Mary", 32);
newShowMessage("Tom", 30);
newShowMessage("Anna");
newShowMessage(undefined, 24);

//Возврат значения
function getFullName() {
  let name = "Bob";
  let surname = "Smith";
  let userName = `${name} ${surname}`;
  return userName;
}

let fullName = getFullName();
console.log(fullName);
