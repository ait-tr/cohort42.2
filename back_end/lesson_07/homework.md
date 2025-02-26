<details>
  <summary style="cursor: pointer;"><b>English</b></summary>

# Parameterized Test Tasks in Java

## Task 1: Testing the Addition Method
**Description:**  
Write a parameterized test for the `add(int a, int b)` method, which takes two integers and returns their sum.

**What to Do:**
1. Create a class with the method `add(int a, int b)`.
2. Write a parameterized test in JUnit 5.
3. Use the `@ParameterizedTest` annotation and `@CsvSource`.
4. Verify the correctness of calculations with various input data.

---

## Task 2: Checking if a Number is Even
**Description:**  
Write a parameterized test for the `isEven(int number)` method, which checks if a number is even.

**What to Do:**
1. Create a class with the method `isEven(int number)`, which returns `true` if the number is even and `false` otherwise.
2. Write a parameterized test in JUnit 5.
3. Use the `@ParameterizedTest` annotation and `@ValueSource`.
4. Verify that the method correctly determines even numbers.

---

## Task 3: Testing Division Method Correctness
**Description:**  
Write a parameterized test for the `divide(int a, int b)` method, which performs division of two numbers and returns the result.

**What to Do:**
1. Create a class with the method `divide(int a, int b)`, which returns the result of `a / b`.
2. Write a parameterized test in JUnit 5.
3. Use `@CsvSource` to check various input sets.
4. Verify the correctness of calculations and handle division by zero.

---

## Task 4: Checking String Length
**Description:**  
Write a parameterized test for the `getLength(String str)` method, which takes a string and returns its length.

**What to Do:**
1. Create a class with the method `getLength(String str)`.
2. Write a parameterized test in JUnit 5.
3. Use `@CsvSource` to pass strings of different lengths.
4. Verify the correctness of length calculation, including empty and `null` strings.

---

## Task 5: Checking if a String Contains a Specific Word
**Description:**  
Write a parameterized test for the `containsWord(String text, String word)` method, which checks if a string contains a given word.

**What to Do:**
1. Create a class with the method `containsWord(String text, String word)`, which returns `true` if `text` contains `word`.
2. Write a parameterized test in JUnit 5.
3. Use `@CsvSource` to pass different combinations of `text` and `word`.
4. Verify that the method correctly determines word presence in a string.



<hr>
</details>

<details style="padding-top: 18px">
  <summary style="cursor: pointer;"><b>На русском</b></summary>

# Задания по параметризованным тестам в Java

## Задание 1: Тестирование метода сложения
**Описание:**  
Написать параметризованный тест для метода `add(int a, int b)`, который принимает два целых числа и возвращает их сумму.

**Что нужно сделать:**
1. Создать класс с методом `add(int a, int b)`.
2. Написать параметризованный тест в JUnit 5.
3. Использовать аннотацию `@ParameterizedTest` и `@CsvSource`.
4. Проверить корректность вычислений на различных входных данных.

---

## Задание 2: Проверка чётности числа
**Описание:**  
Написать параметризованный тест для метода `isEven(int number)`, который проверяет, является ли число четным.

**Что нужно сделать:**
1. Создать класс с методом `isEven(int number)`, который возвращает `true`, если число четное, и `false` в противном случае.
2. Написать параметризованный тест в JUnit 5.
3. Использовать аннотацию `@ParameterizedTest` и `@ValueSource`.
4. Проверить, что метод корректно определяет четные числа.

---

## Задание 3: Проверка корректности работы деления
**Описание:**  
Написать параметризованный тест для метода `divide(int a, int b)`, который выполняет деление двух чисел и возвращает результат.

**Что нужно сделать:**
1. Создать класс с методом `divide(int a, int b)`, который возвращает результат деления `a / b`.
2. Написать параметризованный тест в JUnit 5.
3. Использовать `@CsvSource` для проверки различных наборов входных данных.
4. Проверить корректность вычислений и обработку деления на ноль.

---

## Задание 4: Проверка длины строки
**Описание:**  
Написать параметризованный тест для метода `getLength(String str)`, который принимает строку и возвращает её длину.

**Что нужно сделать:**
1. Создать класс с методом `getLength(String str)`.
2. Написать параметризованный тест в JUnit 5.
3. Использовать `@CsvSource` для передачи строк разной длины.
4. Проверить корректность вычисления длины строки, включая пустую строку и `null`.

---

## Задание 5: Проверка, содержит ли строка определенное слово
**Описание:**  
Написать параметризованный тест для метода `containsWord(String text, String word)`, который проверяет, содержит ли строка заданное слово.

**Что нужно сделать:**
1. Создать класс с методом `containsWord(String text, String word)`, который возвращает `true`, если `text` содержит `word`.
2. Написать параметризованный тест в JUnit 5.
3. Использовать `@CsvSource` для передачи различных комбинаций `text` и `word`.
4. Проверить, что метод корректно определяет наличие слова в строке.



</details>
