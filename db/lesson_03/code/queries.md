 -- Создание базы данных
CREATE DATABASE
  db_lesson3_42;


-- Создаём таблицу со список фермеров
CREATE TABLE
  farmer (
    id serial PRIMARY KEY,
    farmer_name varchar(80),
    age int,
    height int,
    number_of_children int,
    country varchar(80)
  )


  -- Заполняем таблицу данными
INSERT INTO
  farmer (
    farmer_name,
    age,
    height,
    number_of_children,
    country
  )
VALUES
  ('Joanes', 47, 180, 5, 'Germany'),
  ('Pierre', 40, 175, 2, 'France'),
  ('Gerard', 60, 184, 4, 'Germany'),
  ('Juan', 35, 164, 1, 'Ecuador'),
  ('Marek', 30, 186, 0, 'Poland');


-- Вывод всех фермеров из таблицы возраст которых не равен 60
SELECT
  *
FROM
  farmer
WHERE
  age != 60;


-- Вывести имена фермеров, у которых имена начинаются на букву j
SELECT
  farmer_name
FROM
  farmer
WHERE
  farmer_name LIKE 'J%';


SELECT
  farmer_name
FROM
  farmer
WHERE
  farmer_name ILIKE 'j%';


SELECT
  farmer_name
FROM
  farmer
WHERE
  farmer_name ILIKE '%ar%';


-- Выбрать фермеров, у которых страна Germany и возраст больше 35
SELECT
  *
FROM
  farmer
WHERE
  country = 'Germany'
  AND age > 35;


-- Выбрать фермеров, у которых страна Germany или возраст больше 35
SELECT
  *
FROM
  farmer
WHERE
  country = 'Germany'
  OR age > 35;


-- Выбрать фермеров, которые живут в одной из стран Germany, Poland, France
SELECT
  *
FROM
  farmer
WHERE
  country IN ('Germany', 'Poland', 'France');
-- country='Germany' OR country='Poland' OR country='France'


-- Выбрать фермеров, которые не живут ни в одной из стран Germany, Poland, France
SELECT
  *
FROM
  farmer
WHERE
  country NOT IN ('Germany', 'Poland', 'France');


-- Выбрать фермеров, рост которых входит в промежуток от 180 до 185
SELECT
  *
FROM
  farmer
WHERE
  height BETWEEN 180 AND 185;


-- Выбрать фермеров у которых нет детей
SELECT
  *
FROM
  farmer
WHERE
  number_of_children = 0
  OR number_of_children IS NULL;


INSERT INTO
  farmer (
    farmer_name,
    age,
    height,
    number_of_children,
    country
  )
VALUES
  ('Joanes', 27, 190, NULL, 'Poland');


-- Найти средний рост всех фермеров
SELECT
  ROUND(AVG(height), 2) AS avg_height
FROM
  farmer;


-- Найти суммарный возраст всех фермеров
SELECT
  SUM(age) AS age_sum
FROM
  farmer;


-- Найти фермера с максимальным количеством детей
SELECT
  MAX(number_of_children)
FROM
  farmer;


-- Найти фермеров с минимальным количеством детей по разным странам
SELECT
  country,
  MIN(number_of_children)
FROM
  farmer
GROUP BY
  country;


-- Найти фермеров с максимальным ростом по странам
SELECT
  country,
  MAX(height) AS max_height
FROM
  farmer
GROUP BY
  country;


-- Вывести страны, в которых есть более или равно двум фермеров
SELECT
  country,
  COUNT(id) AS farmer_count
FROM
  farmer
GROUP BY
  country
HAVING
  COUNT(id) >= 2;


-- Ограничения
CREATE TABLE
  dress (
    id serial PRIMARY KEY,
    title varchar(80),
    price int CHECK (price > 0)
  );


INSERT INTO
  dress (title, price)
VALUES
  ('black dress', 100),
  ('red mini dress', 100);


INSERT INTO
  dress (title, price)
VALUES
  ('green dress', -10);


DROP TABLE
  dress;


--Ограничение с пользовательским текстом ошибки 
CREATE TABLE
  dress (
    id serial PRIMARY KEY,
    title varchar(80),
    price int CONSTRAINT must_be_positive_number CHECK (price > 0)
  );


INSERT INTO
  dress (title, price)
VALUES
  ('black dress', 100),
  ('red mini dress', -100);


--Ограничение для нескольких полей, которые зависят друг от друга
CREATE TABLE
  dress (
    id serial PRIMARY KEY,
    title varchar(80),
    price int CONSTRAINT price_must_be_positive_number CHECK (price > 0),
    discount_price int CONSTRAINT must_be_positive_number CHECK (discount_price > 0),
    CONSTRAINT discount_price_must_not_be_more_than_price CHECK (price > discount_price)
  );


INSERT INTO
  dress (title, price, discount_price)
VALUES
  ('black dress', 100, 10),
  ('red mini dress', 100, 80);


DROP TABLE
  dress;


--Пример ограничений UNIQUE и NOT NULL
CREATE TABLE
  dress (
    id serial PRIMARY KEY,
    title varchar(80) UNIQUE,
    brand varchar(80) NOT NULL,
    price int CONSTRAINT price_must_be_positive_number CHECK (price > 0),
    discount_price int CONSTRAINT must_be_positive_number CHECK (discount_price > 0),
    CONSTRAINT discount_price_must_not_be_more_than_price CHECK (price > discount_price)
  );


INSERT INTO
  dress (title, brand, price, discount_price)
VALUES
  ('black dress', 'prada', 100, 10),
  ('black dress', 'prada', 100, 80);


-- Пример создания таблицы с PRIMARY KEY и FOREIGN KEY
CREATE TABLE
  truck (
    id int PRIMARY KEY,
    brand varchar(80),
    farmer_id int,
    FOREIGN KEY (farmer_id) REFERENCES farmer (id)
  )
  
  
INSERT INTO
  truck ( brand, farmer_id)
VALUES
  ('Cross', 1),
  ('Super truck', 6);
  
