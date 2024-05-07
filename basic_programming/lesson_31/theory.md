Unit тестирование — это метод тестирования, при котором отдельные блоки исходного кода программы, называемые "юнитами", проверяются на корректность работы. В контексте Java для unit тестирования часто используются библиотеки, такие как JUnit, которая является стандартом де-факто для таких тестов.

### Основы unit тестирования

Unit тесты должны быть:
1. **Независимыми** - Каждый тестовый случай должен быть независим от других.
2. **Повторяемыми** - Тесты должны возвращать одинаковый результат каждый раз, когда они выполняются при неизменных условиях.
3. **Автоматизированными** - Тесты должны выполняться автоматически без вмешательства пользователя.
4. **Быстрыми** - Тесты должны выполняться быстро.

### Пример простого класса и его unit теста в Java

Допустим, у нас есть простой класс `Calculator`, который умеет выполнять базовые арифметические операции. Вот как может выглядеть этот класс:

```java
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public int subtract(int a, int b) {
        return a - b;
    }

    public int multiply(int a, int b) {
        return a * b;
    }

    public double divide(int a, int b) {
        if (b == 0) {
            throw new IllegalArgumentException("Divider cannot be zero.");
        }
        return (double) a / b;
    }
}
```

Теперь напишем несколько unit тестов для этого класса, используя библиотеку JUnit:

```java
import static org.junit.Assert.*;
import org.junit.Test;

public class CalculatorTest {

    private Calculator calculator = new Calculator();

    @Test
    public void testAdd() {
        assertEquals("10 + 5 must be 15", 15, calculator.add(10, 5));
    }

    @Test
    public void testSubtract() {
        assertEquals("10 - 5 must be 5", 5, calculator.subtract(10, 5));
    }

    @Test
    public void testMultiply() {
        assertEquals("10 * 5 must be 50", 50, calculator.multiply(10, 5));
    }

    @Test
    public void testDivide() {
        assertEquals("10 / 5 must be 2.0", 2.0, calculator.divide(10, 5), 0.00001);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testDivideByZero() {
        calculator.divide(10, 0);
    }
}
```

### Подходы к написанию тестов

1. **Тестирование исключений**: Как показано в последнем тесте, мы проверяем, что метод `divide` генерирует исключение `IllegalArgumentException` при делении на ноль.
2. **Параметризованные тесты**: JUnit позволяет создавать параметризованные тесты, когда один и тот же тестовый метод выполняется несколько раз с разными данными.
3. **Использование моков**: Для тестирования кода, зависящего от внешних систем, часто используются мок-объекты (например, с помощью библиотеки Mockito), чтобы имитировать поведение этих систем.
