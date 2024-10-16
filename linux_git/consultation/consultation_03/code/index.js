//Импортируем библиотеку express
const express = require("express");

//Создаём приложение Express
const app = express();

//Определяем порт, на котором будет работать приложение
const port = 3000;

//Создаем маршрут, который отвечает на запросы на главную страницу '/'
app.get("/", (req, res) => {
  res.send(JSON.stringify({ message: "Hello, cohort42.2" }));
});

//Запускаем сервер, который начинает слушать указанный порт
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
