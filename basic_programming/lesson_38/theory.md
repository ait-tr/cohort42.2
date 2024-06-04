Лекция: Основы API Time для Java

### Введение
С появлением Java 8 был введен новый API для работы с датой и временем в пакете `java.time`, который предлагает улучшенные возможности по сравнению со старым API из `java.util.Date` и `java.util.Calendar`. Эти улучшения включают в себя неизменяемость объектов, поддержку часовых поясов и удобные методы для манипуляции датами и временем.

### Основные принципы
API `java.time` основан на следующих ключевых принципах:
- **Неизменяемость**: Все основные классы неизменяемы, что обеспечивает безопасность использования в многопоточных средах.
- **Ясность**: API предназначен для предотвращения путаницы с часовыми поясами и форматами.
- **Расширяемость**: API легко расширяется для поддержки новых календарных систем.

### Ключевые классы и их использование
#### 1. Основные классы дат и времени
- **`LocalDate`**: Представляет только дату (год, месяц, день). Пример создания объекта:
  ```java
  LocalDate today = LocalDate.now();
  LocalDate specificDate = LocalDate.of(2024, Month.JANUARY, 31);
  ```
- **`LocalTime`**: Представляет только время (часы, минуты, секунды, наносекунды). Пример создания объекта:
  ```java
  LocalTime now = LocalTime.now();
  LocalTime specificTime = LocalTime.of(13, 30, 15);
  ```
- **`LocalDateTime`**: Комбинирует дату и время, но без учета часового пояса. Пример создания объекта:
  ```java
  LocalDateTime dateTimeNow = LocalDateTime.now();
  LocalDateTime specificDateTime = LocalDateTime.of(2024, Month.JANUARY, 31, 13, 30, 15);
  ```

#### 2. Работа с часовыми поясами
- **`ZonedDateTime`**: Содержит всю информацию `LocalDateTime` плюс информацию о часовом поясе. Пример создания объекта:
  ```java
  ZonedDateTime zonedNow = ZonedDateTime.now();
  ZonedDateTime zonedSpecific = ZonedDateTime.of(specificDateTime, ZoneId.of("America/New_York"));
  ```

#### 3. Моменты времени и продолжительность
- **`Instant`**: Представляет момент времени в формате UTC. Пример создания и использования:
  ```java
  Instant now = Instant.now();
  Instant later = now.plus(Duration.ofHours(3));
  ```
- **`Duration` и `Period`**:
    - **`Duration`**: Измеряет продолжительность в часах, минутах и секундах.
      ```java
      Duration duration = Duration.between(LocalTime.NOON, LocalTime.MIDNIGHT);
      ```
    - **`Period`**: Измеряет продолжительность в годах, месяцах и днях.
      ```java
      Period period = Period.between(LocalDate.of(2020, 1, 1), LocalDate.of(2024, 1, 1));
      ```

### Форматирование и анализ
API `java.time.format.DateTimeFormatter` позволяет форматировать и анализировать даты в различных форматах:
```java
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm:ss");
String formattedDateTime = specificDateTime.format(formatter);
LocalDateTime parsedDateTime = LocalDateTime.parse("31.01.2024 13:30:15", formatter);
```ы