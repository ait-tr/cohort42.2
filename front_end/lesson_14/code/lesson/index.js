//---Обработчики событий для кнопок
//выбор элементов
let infoCard = document.querySelector(".info-card");
let addButton = document.querySelector(".add-button");
let hideButton = document.querySelector(".hide-button");

//написание логики для кнопок
let addCardFunction = () => {
  // console.log("Add");
  //Изменение видимости карточки

  //1 вариант - style
  // infoCard.style.display = "flex";
  // infoCard.style.opacity = "1";

  //2 вариант - удалении класса через removeAttribute
  // infoCard.removeAttribute("class");

  //3 вариант - добавление дополнительного класса
  infoCard.classList.remove("hide");
};

let hideCardFuction = () => {
  // console.log("Hide");

  //Изменение видимости карточки

  //1 вариант - style
  // infoCard.style.display = "none";
  // infoCard.style.opacity = "0";

  //2 вариант - добавление класса через setAttribute
  // infoCard.setAttribute("class", "hide");

  //3 вариант - добавление дополнительного класса
  infoCard.classList.add("hide");
};

//привязка обработчиков к кнопкам
addButton.addEventListener("click", addCardFunction);
hideButton.addEventListener("click", hideCardFuction);

//---Обработчик события для поля
let searchField = document.querySelector("#search-input");

let changeInput = (event) => {
  console.log(event.target.value);
};

// searchField.addEventListener("change", (event) => {
//   console.log(event.target.value);
// });

searchField.addEventListener("change", changeInput);

//---Изменение поведения по умолчанию
let link = document.querySelector("#link");

let showAlert = (event) => {
  event.preventDefault();

  alert("Отмена перехода");
};

link.addEventListener("click", showAlert);

//---Получения данных из форм

// Вариант 1 - click
// let sendButton = document.querySelector(".send-button");
// let mainForm = document.querySelector("#main-form");
// let resultBlock = document.querySelector(".result");

// let getData = () => {
//   // Способ 1 - с помощью формы и атрибута name для поля
//   let userNameValue = mainForm.userName.value;
//   console.log(userNameValue);

//   // Способ 2 - свойство value для элемента
//   let userSurnameValue = document.querySelector("#surname").value;
//   console.log(userSurnameValue);

//   // Способ 3 - через свойство elements у формы
//   let userAgeValue = mainForm.elements["age"].value;
//   console.log(userAgeValue);

//   resultBlock.textContent = `User data - ${userNameValue}, ${userSurnameValue}, ${userAgeValue}`
// };

// sendButton.addEventListener("click", getData);

// Вариант 2 - submit
//Правила
// 1-кнопка type='submit',
// 2-addEventListener привязываем к форме,
// 3- тип события submit
let sendButton = document.querySelector(".send-button");
let mainForm = document.querySelector("#main-form");
let resultBlock = document.querySelector(".result");

let getData = (e) => {
  e.preventDefault();

  // Способ 1 - с помощью формы и атрибута name для поля
  let userNameValue = mainForm.userName.value;
  console.log(userNameValue);

  // Способ 2 - свойство value для элемента
  let userSurnameValue = document.querySelector("#surname").value;
  console.log(userSurnameValue);

  // Способ 3 - через свойство elements у формы
  let userAgeValue = mainForm.elements["age"].value;
  console.log(userAgeValue);

  resultBlock.textContent = `User data - ${userNameValue}, ${userSurnameValue}, ${userAgeValue}`;
};

mainForm.addEventListener("submit", getData);
