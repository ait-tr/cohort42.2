### Задание: Калькулятор операций

**Цель**: Разработать программу на Java, которая использует циклы и условные операторы для выполнения арифметических операций с вводимыми пользователем числами. Программа должна предложить пользователю выбрать операцию (сложение, вычитание, умножение, деление) и ввести два числа, с которыми будет проведена операция. После вывода результата программа должна спросить пользователя, хочет ли он продолжить выполнение операций. Если пользователь отвечает утвердительно, программа должна снова предложить выбрать операцию и ввести числа.

#### Часть 1: Ввод данных
1. Запросить у пользователя выбор операции.
2. Запросить у пользователя ввод двух чисел.

#### Часть 2: Выполнение операции
1. Использовать условные операторы (`if`, `else if`, `else`) для определения выбранной операции.
2. Выполнить выбранную арифметическую операцию с введенными числами.
3. Вывести результат операции.

#### Часть 3: Цикл выполнения
1. Использовать цикл (`while` или `do-while`), чтобы повторять выполнение операций, пока пользователь не решит выйти.
2. После вывода результата спросить пользователя, хочет ли он продолжить выполнение операций.
3. Если пользователь отвечает утвердительно, повторить процесс. Если отрицательно — завершить программу.

#### Дополнительное условие
- Убедитесь, что программа обрабатывает деление на ноль, выводя сообщение об ошибке и предлагая пользователю повторить ввод чисел для операции.

Давайте создадим более сложное задание, которое будет включать работу с циклами и условными операторами в Java, углубляя понимание этих конструкций и требуя от студентов более сложного решения без использования массивов.

### Задание: Программа "Угадай число" (со звездочкой)

**Цель**: Разработать консольную игру, в которой пользователь должен угадать случайно сгенерированное число в пределах от 1 до 100. Программа должна давать подсказки после каждой попытки, сообщая, больше или меньше введенное число, чем загаданное. Игра продолжается до тех пор, пока число не будет угадано. После угадывания, программа должна вывести количество попыток, потраченных на угадывание, и предложить пользователю сыграть еще раз.

#### Шаги реализации:

1. **Генерация случайного числа.**
   - Использовать `Math.random()` для генерации случайного числа в заданном диапазоне (1-100).

2. **Основной игровой цикл.**
   - Использовать цикл (`do-while` или `while`), чтобы запросить у пользователя ввод числа до тех пор, пока не будет угадано загаданное число.
   
3. **Сравнение чисел и подсказки.**
   - Использовать условные операторы для сравнения введенного числа с загаданным и вывода подсказок ("слишком большое", "слишком маленькое").

4. **Подсчет попыток.**
   - Вести подсчет числа попыток, которые пользователь сделал для угадывания числа.

5. **Окончание игры и предложение повторить.**
   - После угадывания числа вывести количество попыток и спросить пользователя, хочет ли он сыграть еще раз.
   - Если да, игра начинается заново с генерации нового случайного числа; если нет — программа завершается.

#### Дополнительные условия:
- Обеспечить обработку ввода, чтобы программа принимала только числа и корректно реагировала на некорректный ввод (например, буквы или символы).
- Можно добавить функционал для ограничения максимального количества попыток.