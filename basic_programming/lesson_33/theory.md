### Параметризованные тесты в JUnit 5

Параметризованные тесты в JUnit 5 позволяют запускать один и тот же тестовый метод с различными наборами данных. Это особенно полезно, когда вы хотите протестировать одну и ту же логику с разными входными данными и ожидать определенные результаты.

#### Основные аннотации для параметризованных тестов

1. **@ParameterizedTest**: Обозначает метод как параметризованный тест.
2. **@ValueSource**: Подает фиксированные наборы значений в тест.
3. **@EnumSource**: Подает значения перечислений (enum).
4. **@MethodSource**: Подает значения из статических методов.
5. **@CsvSource**: Подает значения из строк CSV.
6. **@CsvFileSource**: Подает значения из файлов CSV.
7. **@ArgumentsSource**: Подает значения из пользовательских источников аргументов.

#### Примеры параметризованных тестов

##### Пример 1: Использование @ValueSource
```java
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class ValueSourceTest {

    @ParameterizedTest
    @ValueSource(strings = {"racecar", "radar", "level"})
    void testIsPalindrome(String candidate) {
        assertTrue(isPalindrome(candidate));
    }

    boolean isPalindrome(String str) {
        int n = str.length();
        for (int i = 0; i < (n / 2); ++i) {
            if (str.charAt(i) != str.charAt(n - i - 1)) {
                return false;
            }
        }
        return true;
    }
}
```

##### Пример 2: Использование @EnumSource
```java
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.EnumSource;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class EnumSourceTest {

    enum Season {
        WINTER, SPRING, SUMMER, FALL
    }

    @ParameterizedTest
    @EnumSource(Season.class)
    void testWithEnumSource(Season season) {
        assertNotNull(season);
    }
}
```

##### Пример 3: Использование @MethodSource
```java
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;
import static org.junit.jupiter.api.Assertions.assertTrue;
import java.util.stream.Stream;

public class MethodSourceTest {

    @ParameterizedTest
    @MethodSource("stringProvider")
    void testWithMethodSource(String argument) {
        assertTrue(argument.length() > 0);
    }

    static Stream<String> stringProvider() {
        return Stream.of("apple", "banana", "cherry");
    }
}
```

##### Пример 4: Использование @CsvSource
```java
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class CsvSourceTest {

    @ParameterizedTest
    @CsvSource({
        "1, 1, 2",
        "2, 3, 5",
        "3, 5, 8"
    })
    void testAddition(int a, int b, int expected) {
        assertEquals(expected, a + b);
    }
}
```

##### Пример 5: Использование @CsvFileSource
```java
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class CsvFileSourceTest {

    @ParameterizedTest
    @CsvFileSource(resources = "/data.csv", numLinesToSkip = 1)
    void testWithCsvFileSource(int a, int b, int expected) {
        assertEquals(expected, a + b);
    }
}
```

Файл `data.csv`:
```
a,b,expected
1,1,2
2,3,5
3,5,8
```