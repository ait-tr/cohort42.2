1. **Калькулятор Суммы**: Напишите программу, которая запрашивает у пользователя два числа и выводит их сумму.


2. **Проверка Чётных и Нечётных Чисел**: Напишите программу, которая запрашивает у пользователя целое число и сообщает, является ли это число чётным или нечётным.

3. **Калькулятор Оценок**: Создайте программу, которая запрашивает у пользователя оценки по пяти предметам, затем рассчитывает и выводит средний балл.

4. **Комбинированный налог**: Создайте программу для расчёта налога, который зависит от категории товара и региона покупателя. Налог на электронику 10%, на одежду 5%. Если покупатель из региона A, применяется дополнительный налог 2%.



**Задание со звездочкой: Расписание уроков**

Вы разрабатываете систему для школы, которая помогает определять, идет ли в данный момент урок, перемена или пора обедать. В школе есть следующий режим:

- Уроки идут с 8:00 до 13:00.
- Каждый урок длится 45 минут.
- После каждого урока (кроме последнего) идет перемена длительностью 15 минут.
- Обеденный перерыв начинается в 13:00 и длится ровно 30 минут.

Напишите программу, которая принимает в качестве входных данных текущее время (часы и минуты) и выводит одно из следующих сообщений:

- "Урок" - если сейчас идет урок.
- "Перемена" - если сейчас перемена между уроками.
- "Обед" - если сейчас обеденный перерыв.
- "Свободное время" - если сейчас не уроки, перемены и не время обеда.

**Указания:**
1. Используйте логические операторы (`&&`, `||`, `!`) для определения текущего статуса времени.
2. Учитывайте, что время представляется в 24-часовом формате.
3. Рассмотрите все возможные случаи и убедитесь, что ваша программа корректно обрабатывает крайние случаи (например, ровно 8:00 или 13:00).