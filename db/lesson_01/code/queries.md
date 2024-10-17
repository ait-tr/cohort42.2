 [ссылка на таблицу](https://docs.google.com/spreadsheets/d/139bE_sHx1xo_438XsryjrHS_SYwy-JRFqkzo9reo3Ms/edit?gid=0#gid=0)

-- Создаем базу данных
CREATE DATABASE test_db OWNER kate_test;

-- Создаем пользователя
CREATE USER kate_test WITH PASSWORD 'qwerty';

-- Удаление БД
DROP DATABASE test_db;

-- Создание таблицы
CREATE TABLE students(
  id serial PRIMARY KEY,
  name varchar(40),
  age integer,
  hobby varchar(40)
);

-- Удаление таблицы
DROP TABLE students;

-- (CREATE) Добавление строк в таблицу
INSERT INTO 
   students (name, age, hobby)
 VALUES 
  ('Aleksandr', 32, 'guitar'),
  ('Umut', 28, 'art'),
  ('Yulya', 40, 'piano');


-- (READ) Получение  данных из таблицы

SELECT * FROM students;

SELECT name FROM students;

SELECT name, age FROM students WHERE age>30;

SELECT * FROM students WHERE age<31 OR name='Yulya';

-- Сортировка по возрастанию (ASC - по умолчанию)
-- SELECT * FROM students ORDER BY age ASC;
SELECT * FROM students ORDER BY age;

-- Сортировка по убыванию
SELECT * FROM students ORDER BY age DESC;


-- (UPDATE) Обновление данных по условию
-- UPDATE students SET age=29;
UPDATE students SET age=29 WHERE id=2;

-- (DELETE) Удаление данных из таблицы по условию
DELETE FROM students WHERE id=3;
