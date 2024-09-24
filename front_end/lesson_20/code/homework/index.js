// Требования:
//  - Нужно создать кнопку "Get Joke", при клике на которую, будет выполняться GET запрос(используйте fetch). В ответе на запрос будет приходить случайная шутка
//  - url: https://official-joke-api.appspot.com/random_joke
//  - После того как вы получите успешный ответ, разместите шутку на странице
//  - Если запрос завершиться ошибкой, её нужно разместить на странице и выделить красным цветом
//  - Каждый раз, когда происходит клик на кнопку, должен выполняться новый запрос и приходить новая шутка
//  - Стилизуйте на ваше усмотрение

const getJokeButton = document.querySelector("#get-joke-button");
const dataContainer = document.querySelector(".data-container");

const getJoke = async () => {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    console.log(response);

    const result = await response.json();
    console.log(result);

    if (response.ok) {
      dataContainer.classList.remove("error");
      dataContainer.textContent = `${result.setup} - ${result.punchline}`;
    } else {
      throw Object.assign(new Error("Some error"), { serverError: result });
    }
  } catch (error) {
    dataContainer.classList.add("error");
    //временная обработка, так как нет примера объекта ошибки с сервера
    dataContainer.textContent = error.responseError.message;
  }
};

getJokeButton.addEventListener("click", getJoke);
