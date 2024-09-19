// //---Промисы
// const myPromise = new Promise((resolve, reject) => {
//   //отправляем запрос
//   //пример успешного ответа
//   // const result = {
//   //   status: "200",
//   //   data: {
//   //     name: "Bob",
//   //     age: 43,
//   //   },
//   // };

//   const result = {
//     status: "400",
//     message: "Bad request",
//   };

//   setTimeout(() => {
//     if (result.status === "200") {
//       resolve(result.data);
//     } else {
//       reject(result.message);
//     }
//   }, 3000);
// });

// console.log(myPromise);

// myPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("end");
//   });

//Отправка запроса и обработка результата при нажатии на кнопку
const dataContainer = document.querySelector(".data-container");
const loadingId = document.querySelector("#load-ind");
const getDataButton = document.querySelector("#request-button");

//создаем функцию, которая отправляет запрос
const customFetch = () => {
  const promise = new Promise((resolve, reject) => {
    //отправка запроса
    //создаем пример положительного ответа от сервера
    const response = {
      status: "200",
      data: {
        firstName: "John",
        lastName: "Johnson",
        age: 34,
      },
    };

    // создаем пример отрицательного ответа от сервера
    // const response = {
    //   status: "400",
    //   error: "Bad request",
    // };

    setTimeout(() => {
      if (response.status === "200") {
        resolve(response.data);
      } else {
        reject(response.error);
      }
    }, 3000);
  });

  return promise;
};

// console.log(customFetch());

// const example = () => {
//   const message = "Hello";
//   return message;
// };

// console.log(example());

//функция для обработки результата
const getData = () => {
  loadingId.classList.remove("hidden");
  getDataButton.setAttribute("disabled", "");
  dataContainer.innerHTML = "";

  customFetch()
    .then((data) => {
      dataContainer.innerHTML = `
     <h2>User Data</h2>
     <div>Name: ${data.firstName}</div>
     <div>Surname: ${data.lastName}</div>
     <div>Age: ${data.age}</div>
    `;
    })
    .catch((error) => {
      dataContainer.classList.add("error");
      dataContainer.textContent = error;
    })
    .finally(() => {
      getDataButton.removeAttribute("disabled");
      loadingId.classList.add("hidden");
    });
};

// getDataButton.addEventListener("click", getData);

//----Отправка запроса - fetch (async await)
const getCatFactsButton = document.querySelector("#get-cats-fact");
const factsBlock = document.querySelector(".data-container");

const getCatFact = async () => {
  factsBlock.classList.remove("error");
  factsBlock.textContent = "";

  try {
    const response = await fetch("https://catfact.ninja/fact", {
      method: "GET",
    }); //метод GET по умолчанию, значит можно второй аргумент не указывать
    // console.log(response);

    const catFactData = await response.json();
    console.log(catFactData);

    //самостоятельное формирование исключения(ошибки), для перехода выполнения кода в блок catch
    if (response.ok) {
      factsBlock.textContent = `Fact: ${catFactData.fact}`;
    } else {
      throw Object.assign(new Error("Some error"), {
        responseError: catFactData,
      });
    }
  } catch (error) {
    console.log(error.responseError);
    factsBlock.classList.add("error");
    factsBlock.textContent = `${error.responseError.code} ${error.responseError.message}`;
  }
};

// setInterval(getCatFact, 50);

getCatFactsButton.addEventListener("click", getCatFact);
