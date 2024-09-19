##  Homework

### Задание
Создать приложение "Сalc ideal weight", которое должно расчитывать идеальный вес в зависимости от пола и роста

Приложение включает в себя форму со следующими элементами:
  - Поле "Рост, см":
    - label - Рост, см*
    - placeholder - Введите свой рост
    - тип поля - number
    - обязательное поле
  - Селект "Выберете пол":
    - label - Выберете пол*
    - опции - Мужской, Женский
    - тип поля - select
    - обязательное поле
  - Кнопка "Рассчитать":
    - текст кнопки - Рассчитать

Общие требования:
  - Все лейблы находятся над полями
  - В соответствии с требованиями к полям, укажите валидацию с помощью атрибутов
  - Стилизуйте на своё усмотрения
  - формула расчета женского веса: рост - (100 + (рост - 100) : 10)
  - формула расчета мужского веса: рост - (100 + (рост - 100) : 20)
  - При клике на кнопку "Расчитать", под кнопкой показывается сообщение "Ваш идеальный вес: 'результат'"


#### Важно: задание нужно прислать мне в виде архива, в котором будут три файла: index.js, index.html, styles.css

##### Дедлайн: 10.09.2024 до 15.30

