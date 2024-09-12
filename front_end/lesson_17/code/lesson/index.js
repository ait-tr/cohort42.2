//Получить массив ключей/значений объекта color
const color = {
  name: "white",
  code: "fff",
  prices: {
    price: 100,
    sale: true,
  },
};

const colorKeysArray = Object.keys(color);
console.log(colorKeysArray);

const colorValuesArray = Object.values(color);
console.log(colorValuesArray);

const colorKey = Object.keys(color.prices);
console.log(colorKey);

//пример копирования с примитивными типами данных
let userName = "Tom";
console.log(userName);

let adminName = userName;
console.log(adminName);

adminName = "Bob";
console.log(userName, adminName);

//Ссылочный тип данных (в переменной будет храниться только ссылка на объект, массив или функцию)
const customerData = {
  customerName: "Mary",
  company: "Apple",
};

customerData.company = "Facebook";
console.log(customerData);

//так делать нельзя!
const userData = customerData;
console.log(userData);

userData.customerName = "John";
console.log(userData);
console.log(customerData);

//деструктуризация
const bookObj = {
  bookName: "Great Gatsby",
  price: 20,
  author: "Fitzgerald",
};

const newBookObj = { ...bookObj };
console.log(newBookObj);

newBookObj.price = 30;
console.log(newBookObj);
console.log(bookObj);

//передачу аргументов в функцию, с помощью деструктуризации (оператор расширения)
const numbersOperation = (a, b, c, d) => {
  return a - b + c / d;
};

const numbers = [3, -9, 23, 1];

console.log(numbersOperation(...numbers));

//деструктурирующее присваивание
const fruitObj = {
  nameFruit: "Apple",
  price: 30,
};

// let name = fruitObj.nameFruit;
// let fruitPrice = fruitObj.price;
// console.log(name, fruitPrice);

let { nameFruit, price: fruitPrice, shop: fruitShop = "Shop name" } = fruitObj;
console.log(fruitShop);

//деструктурирующее присваивание массива
// const [a, b] = arr

// ----Методы массивов
//map - немутирующий метод
const words = ["red", "grape", "note", "black"];

const newWords = words.map((word, index, arr) => {
  // console.log(`${index + 1} - ${word} in array ${arr}`);

  return word.length;
});

// console.log(newWords);
// console.log(words);

const wordsObjAr = words.map((word, i) => {
  return {
    index: i,
    position: i + 1,
    word: word,
    length: word.length,
  };
});

console.log(wordsObjAr);

//forEach (ничего не возвращает, в остальном работает как map) - немутирующий метод
const list = document.querySelector(".list");

const cars = ["BMW", "Tesla", "Aston Martin", "Toyota"];

// cars.forEach((car) => {
//   const listElement = document.createElement("li");
//   listElement.textContent = car;
//   list.append(listElement);
// });

//forEach с возвратом
const newArray = cars.forEach((car) => {
  return car.length;
});

console.log(newArray);

//filter - метод для фильтрации исходного массива (возвращает элементы, которые удовлетворяют условий в callback функции)
//немутирующий метод
const products = [
  { productName: "Milk", price: 100 },
  { productName: "Milk", price: 110 },
  { productName: "Bread", price: 120 },
  { productName: "Grape", price: 150 },
];

// const filteredProducts = products.filter((product) => product.price >= 120);
const filteredProducts = products.filter(
  (product) => product.productName === "Milk"
);

console.log(filteredProducts);

//Метод reverse (меняет массив на обратный порядок) - мутирующий метод
const productsNames = ["Milk", "Sugar", "Apples", "Bread"];
productsNames.reverse();
console.log(productsNames);

//Метод join - превращаем массив в строку с разделителем - немутирующий метод
const str = productsNames.join(":");
console.log(str);
console.log(productsNames);

//Метод includes - проверяет, есть ли переданный элемент в массиве(возвращает boolean) - немутирующий метод
const isElement = productsNames.includes("Brea");
console.log(isElement);
