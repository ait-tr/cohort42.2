--CREATE DATABASE consult_db
CREATE TABLE
  department (
    id serial PRIMARY KEY,
    department_name varchar(40)
  );


  CREATE TABLE
  employee (
    id serial PRIMARY KEY,
    employee_name varchar(40),
    -- через () когда задаем внешний ключ или ограничения, через .  в SELECT
    department_id int REFERENCES department (id)
  );


INSERT INTO
  department (department_name)
VALUES
  ('hr'),
  ('it'),
  ('finance');


INSERT INTO employee (employee_name, department_id)
VALUES
('Musterman Karl', 1),
('Badaev Aleksandr' , 2),
('Yulia Dietz', 4),
('Umut Kamaeva', NULL);


DROP TABLE employee;


CREATE TABLE
  employee (
    id serial PRIMARY KEY,
    employee_name varchar(40),
    -- через () когда задаем внешний ключ или ограничения, через .  в SELECT
    department_id int
  );


 INSERT INTO employee (employee_name, department_id)
VALUES
('Musterman Karl', 1),
('Badaev Aleksandr' , 2),
('Yulia Dietz', 4),
('Umut Kamaeva', NULL);


--INNER JOIN = JOIN
SELECT * FROM department
JOIN employee ON department.id = employee.department_id;


--LEFT JOIN
SELECT * FROM employee
LEFT JOIN department ON department.id = employee.department_id;


--RIGHT JOIN
SELECT employee_name AS имя_сотрудника, department_name FROM department
RIGHT JOIN employee ON department.id = employee.department_id;


-- FULL OUTER JOIN
SELECT employee_name, department_name FROM department
FULL OUTER JOIN employee ON department.id = employee.department_id;


-- CROSS JOIN
SELECT employee_name, department_name FROM department, employee
ORDER BY employee_name;


INSERT INTO employee (employee_name, department_id)
VALUES
('Ilon Musk', 3),
('Harry Potter', 2)


--RIGHT JOIN
SELECT employee_name AS имя_сотрудника, department_name FROM department
RIGHT JOIN employee ON department.id = employee.department_id;


--Переименовать столбец
ALTER TABLE employee RENAME COLUMN employe_name TO employee_name;