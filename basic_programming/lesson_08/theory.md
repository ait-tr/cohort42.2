### Разбор ДЗ
* `++` - оператор инкремента, увеличивает переменную на 1
* `--` - оператор декремента, уменьшает переменную на 1
* `переменная++` - суффиксный инкремент, пост-инкремент. `++переменная` - префиксный инкремент, пре-инкремент
* Разница в приоритетности, приоритетность пре-инкремента намного выше пост-инкремента

* Комбинированные операторы присвоения
* += -= *= /= %=
* Это просто сокращения для записей
* `переменная = переменная + значение` === `переменная += значение`
* Результат операции между двумя операндами записывают в левый операнд

### Тернарный оператор
* Условный тернарный оператор - единственный оператор с трема операндами. Иногда используется вместо условного оператора.
* Когда? Когда нужно использовать условие внутри выражения.
* Иными словами, условный оператор - это оператор управления потоком программы, который имеет свой блок кода и т.д.,
а тернарный оператор - просто обычный оператор.
* Синтаксис:
```
условие ? вариант1 : вариант2
```
* Вариант 1 будет выбираться как результат выражения если условие истинно, а вариант 2 если нет.

* Признаки того, что вместо условного нужно использовать тернарный оператор:
1. Есть простой if-else
2. Оба блока будут однострочными
3. Оба блока используют одинаковый код с разными значениями

### Циклы
* В процедурном программировании есть три вида алгоритмов - линейный, разветвленный и цикличный

![image](https://raw.githubusercontent.com/ait-tr/cohort42.2/main/basic_programming/lesson_08/img/1.png)

* Сегодня мы изучим цикличный вид алгоритмов и как их делать в джаве.
* Для такой реализации используются циклы либо рекурсия
* Циклы в Java делятся на условные, пост-условные, итеративные и for-each
* Блок кода в цикле называется телом цикла
* Одно выполнение тела цикла называют итерация
* Во всех случаях циклов, их нужно как-то контролировать. Т.е. переменные, принимающие участие в условии должны каким-то
образом обновляться, так, чтобы условие могло стать не истиной
* Циклы в которых такого контроля нет будут выполняться бесконечно, и поэтому называются бесконечными циклами
1. Условный цикл
  * Цикл, который выполняет код, пока его условие истинно
  * Это условие будет проверяться для каждого выполнения тела цикла, перед самим выполнением
  * Используется когда не известно количество итераций, и есть только условие окончания
```
while (условие) {
    //код для выполнения
}
```
2. Пост-условный цикл
   * Цикл, который также выполняет код, пока его условие истинно
   * Это условие проверяется после каждого выполнения тела цикла
   * Проверка условия проходит для выполнения следующей итерации
   * Гарантирует выполнение хотябы одной итерации, следовательно, используется когда надо обязательно выполнить тело цикла
   хотябы раз
```
do {
    //код для выполнения
} while (условие);
```
3. Итеративный
   * Цикл, который записывается довольно сложно, он сделан для того, чтобы можно было удобно настраивать циклы с
   определенным количеством итераций
   * Внутри цикла фор почти всегда создается переменная-счетчик, которая обязательно должна меняться на каждой итерации
   * Эта же переменная всегда используется в условии продолжения
   * Таким образом, у каждой итерации будет свой номер
```
for (объявление переменной; условие продолжения; изменение переменной) {
    //код для выполнения
}
```

### Комбинации клавиш
* Ctrl + Alt + L - выравнять код
* Shift (дважды) - поиск по Intellij IDEA

### Справка
* Последовательность Фибоначчи - это такая последовательность, в которой первые два элемента - 0 и 1, а каждый следующий
элемент это сумма предыдущих двух элементов
* Простые числа - такие натуральные числа, которые делятся нацело только на себя и на 1