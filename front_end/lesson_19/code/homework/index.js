// - Создайте простой таймер на веб-странице, который будет отсчитывать время назад от 60 секунд. При достижении 0 секунд таймер должен остановиться.
// - Стилизуйте его

//Вариант 1 - без кнопки
// const timer = document.querySelector(".timer");

// const startTimer = () => {
//   let seconds = 60;

//   //функция уменьшает таймер на единицу при каждом вызове
//   const updateTimer = () => {
//     timer.textContent = seconds;
//     seconds--;

//     //проверяем условие для остановки таймера
//     if (seconds < 0) {
//       clearInterval(timerId);
//     }
//   };

//   //запускаем функцию updateTimer каждую секунду
//   const timerId = setInterval(updateTimer, 1000);
// };

// startTimer();

//Вариант 2 - c кнопкой
const timer = document.querySelector(".timer");
const buttonStart = document.querySelector(".timer-button");

const startTimer = () => {
  let seconds = 60;

  //функция уменьшает таймер на единицу при каждом вызове
  const updateTimer = () => {
    buttonStart.setAttribute("disabled", "");
    timer.textContent = seconds;
    seconds--;

    //проверяем условие для остановки таймера
    if (seconds < 0) {
      buttonStart.removeAttribute("disabled");
      clearInterval(timerId);
    }
  };

  //запускаем функцию updateTimer каждую секунду
  const timerId = setInterval(updateTimer, 1000);
};

buttonStart.addEventListener("click", startTimer);
