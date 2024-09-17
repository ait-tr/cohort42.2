// - Вы получили массив с ценами на товар (создайте переменную, в которой будет храниться массив). Значения массива [100, 400, 900, 300, 500].
// - Необходимо отобразить каждый из элементов массива на странице в отдельном блоке
// - Стилизация на ваше усмотрение

// Дополнительная задача:
// Создайте кнопку "Filter", при нажатии на которую на странице будут отображаться только блоки с ценами > 450

const priceContainer = document.querySelector(".prices-container");
const filterButton = document.querySelector(".filter-button");

const prices = [100, 400, 900, 300, 500];

//Создаём функцию, которая будет отображать элементы массива в блоках на странице, в зависимости от переданного массива
const renderPrices = (pricesArray) => {
  pricesArray.forEach((price) => {
    const priceBlock = document.createElement("div");
    priceBlock.textContent = price;
    priceContainer.append(priceBlock);
  });
};

renderPrices(prices);

const filterPrices = () => {
  priceContainer.innerHTML = ``;

  const filterArr = prices.filter((price) => price > 450);
  renderPrices(filterArr);
};

filterButton.addEventListener("click", filterPrices);
