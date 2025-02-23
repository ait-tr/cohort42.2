<details>
  <summary style="cursor: pointer;"><b>English</b></summary>

# Working with TV Program Data Using Stream API

In this assignment, we will work with the `TVProgram` class, which describes television programs, and perform several tasks using the Stream API. We will use the `TVProgramTestData` class to provide test data.

## `TVProgram` Class

```java
public class TVProgram {
    private String channel;      // Channel name
    private String programName;  // Program name
    private int duration;        // Program duration (in minutes)
    private boolean isLive;      // Live broadcast flag
    private double rating;       // Program rating (e.g., from 0.0 to 10.0)

    public TVProgram(String channel, String programName, int duration, boolean isLive, double rating) {
        this.channel = channel;
        this.programName = programName;
        this.duration = duration;
        this.isLive = isLive;
        this.rating = rating;
    }

    public String getChannel() {
        return channel;
    }

    public String getProgramName() {
        return programName;
    }

    public int getDuration() {
        return duration;
    }

    public boolean isLive() {
        return isLive;
    }

    public double getRating() {
        return rating;
    }

    @Override
    public String toString() {
        return String.format(
                "TVProgram{channel='%s', programName='%s', duration=%d, isLive=%b, rating=%.1f}",
                channel, programName, duration, isLive, rating
        );
    }
}
```

## Test Data in `TVProgramTestData` Class

```java
import java.util.Arrays;
import java.util.List;

public class TVProgramTestData {

    public static List<TVProgram> getTVProgramList() {
        return Arrays.asList(
                new TVProgram("Channel One", "Morning News", 30, true, 7.8),
                new TVProgram("Channel One", "Late Show", 45, false, 8.1),
                new TVProgram("SportsTV", "Football Match", 120, true, 9.0),
                new TVProgram("MovieMax", "Action Movie", 110, false, 8.5),
                new TVProgram("MovieMax", "Romantic Comedy", 100, false, 6.9),
                new TVProgram("EduChannel", "Science Doc", 60, false, 7.5),
                new TVProgram("ComedyFun", "Stand-up Special", 90, false, 8.2),
                new TVProgram("ComedyFun", "Improv Show", 25, true, 7.3)
        );
    }
}
```

## Tasks

### 1. Filtering by Rating

Find all programs with a rating above a specified threshold (e.g., > 8.0).

**Hint:** Use the `filter` method to filter programs where `rating > 8.0`.

---

### 2. Transforming Data Using `map`

Transform `TVProgram` objects into user-friendly strings. For example, format the string as:

```
"Channel: [channel] | Program: [programName] | Rating: [rating]"
```

**Hint:** Use `String.format` (or concatenation) and the `map` method.

---

### 3. Checking a Condition

Check if there is at least one program that is broadcast live (`isLive == true`).

**Hint:** Use the `anyMatch` method.

---

### 4. Finding the Maximum Value

Determine the longest program (maximum value of the `duration` field).

**Hint:** Use the `max` method with `Comparator.comparingInt(TVProgram::getDuration)`.

---

## Additional Ideas (Optional)

### Calculating the Average Rating

Use `mapToDouble` and `average` to calculate the average rating of all programs.

---

### Grouping by Channel

Use `Collectors.groupingBy(TVProgram::getChannel)` to create a map where the key is the channel name and the value is a list of programs on that channel.

---

### Sorting

Sort the list of programs by channel name or by rating (e.g., in descending order).

---

## Execution Format

1. Create a method (e.g., `main`) or use a testing framework (e.g., JUnit).
2. Retrieve the list of programs by calling `TVProgramTestData.getTVProgramList()`.
3. Perform the required operations (`filter`, `map`, `anyMatch`, `max`, etc.).
4. Print or verify the results.


<hr>
</details>

<details style="padding-top: 18px">
  <summary style="cursor: pointer;"><b>На русском</b></summary>

# Задание: Работа с данными о телевизионных передачах с использованием Stream API

В этом задании мы будем работать с классом `TVProgram`, который описывает телевизионные передачи, и выполним несколько задач с использованием Stream API. В качестве тестовых данных будем использовать класс `TVProgramTestData`.

## Класс `TVProgram`

```java
public class TVProgram {
    private String channel;      // Название канала
    private String programName;  // Название передачи
    private int duration;        // Длительность передачи (в минутах)
    private boolean isLive;      // Признак прямого эфира
    private double rating;       // Рейтинг передачи (например, от 0.0 до 10.0)

    public TVProgram(String channel, String programName, int duration, boolean isLive, double rating) {
        this.channel = channel;
        this.programName = programName;
        this.duration = duration;
        this.isLive = isLive;
        this.rating = rating;
    }

    public String getChannel() {
        return channel;
    }

    public String getProgramName() {
        return programName;
    }

    public int getDuration() {
        return duration;
    }

    public boolean isLive() {
        return isLive;
    }

    public double getRating() {
        return rating;
    }

    @Override
    public String toString() {
        return String.format(
            "TVProgram{channel='%s', programName='%s', duration=%d, isLive=%b, rating=%.1f}",
            channel, programName, duration, isLive, rating
        );
    }
}
```

## Тестовые данные в классе `TVProgramTestData`

```java
import java.util.Arrays;
import java.util.List;

public class TVProgramTestData {

    public static List<TVProgram> getTVProgramList() {
        return Arrays.asList(
            new TVProgram("Channel One", "Morning News", 30, true, 7.8),
            new TVProgram("Channel One", "Late Show", 45, false, 8.1),
            new TVProgram("SportsTV", "Football Match", 120, true, 9.0),
            new TVProgram("MovieMax", "Action Movie", 110, false, 8.5),
            new TVProgram("MovieMax", "Romantic Comedy", 100, false, 6.9),
            new TVProgram("EduChannel", "Science Doc", 60, false, 7.5),
            new TVProgram("ComedyFun", "Stand-up Special", 90, false, 8.2),
            new TVProgram("ComedyFun", "Improv Show", 25, true, 7.3)
        );
    }
}
```

## Задания

### 1. Фильтрация по рейтингу

Найдите все передачи, рейтинг которых выше заданного порога (например, > 8.0).

**Подсказка:** Используйте метод `filter` для фильтрации по условию `rating > 8.0`.

---

### 2. Преобразование данных с помощью `map`

Преобразуйте объекты `TVProgram` в удобные для вывода строки. Например, сформируйте строку в формате:

```
"Канал: [channel] | Передача: [programName] | Рейтинг: [rating]"
```

**Подсказка:** Используйте `String.format` (или конкатенацию) и метод `map`.

---

### 3. Проверка условия

Узнайте, есть ли среди всех передач хотя бы одна, которая идёт в прямом эфире (`isLive == true`).

**Подсказка:** Используйте метод `anyMatch`.

---

### 4. Нахождение максимального значения

Определите, какая из передач самая длительная (максимальное значение поля `duration`).

**Подсказка:** Используйте метод `max` с `Comparator.comparingInt(TVProgram::getDuration)`.

---

## Дополнительные идеи (необязательно)

### Подсчёт среднего рейтинга

Используйте `mapToDouble` и `average` для вычисления среднего рейтинга всех передач.

---

### Группировка по каналу

Используйте `Collectors.groupingBy(TVProgram::getChannel)` для создания карты, где ключ — это название канала, а значение — список передач этого канала.

---

### Сортировка

Отсортируйте список передач по названию канала или по рейтингу (например, в убывающем порядке).

---

## Формат выполнения

1. Создайте метод (например, `main`) или используйте тестовый фреймворк (например, JUnit).
2. Получите список передач, вызвав `TVProgramTestData.getTVProgramList()`.
3. Выполните требуемые операции (`filter`, `map`, `anyMatch`, `max` и т.д.).
4. Выведите или проверьте полученные результаты.



</details>
