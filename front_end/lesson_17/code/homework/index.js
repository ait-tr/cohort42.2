// Задание

// Предположим вы получили объект с данными (создайте переменную, в которой будет храниться объект) - spaceship,
// в котором находятся характеристики космического корабля, такие как:
// name
// manufacturer
// crew
// maxSpeed
// Необходимо отобразить их на странице.
// Стилизация на ваше усмотрение

// Дополнительная задача: Создайте кнопку "Hide Manufacturer",
// которая будет скрывать manufacturer корабля на странице

//Предположительно данные с сервера (тестовые данные)
const spaceship = {
  name: "Star",
  manufacturer: "SpaceX",
  crew: 50,
  maxSpeed: "10km/s",
};

//Выбираем элементы на странице
let spaceshipName = document.querySelector("#spaceship-name");
let spaceshipManufacturer = document.querySelector("#spaceship-manufacturer");
let spaceshipCrew = document.querySelector("#spaceship-crew");
let spaceshipMaxSpeed = document.querySelector("#spaceship-max-speed");
let hideManufacturerButton = document.querySelector(
  "#hide-manufacturer-button"
);

//Заполняем элементы на странице данными
spaceshipName.textContent = `Name: ${spaceship.name}`;
spaceshipManufacturer.textContent = `Manufacturer: ${spaceship.manufacturer}`;
spaceshipCrew.textContent = `Crew: ${spaceship.crew}`;
spaceshipMaxSpeed.textContent = `Max Speed: ${spaceship.maxSpeed}`;

//Создаём функцию для скрытия элемента manufacturer
const hideManufacturer = () => {
  spaceshipManufacturer.classList.add("hidden");
};

//Привязка функции к кнопке
hideManufacturerButton.addEventListener("click", hideManufacturer);
