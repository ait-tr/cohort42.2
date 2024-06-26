### Лекция: Stream API в Java

#### Введение
Stream API в Java — это современный способ обработки последовательностей данных (коллекций, массивов и т.д.) в декларативном стиле. Введённый в Java 8, Stream API представляет функциональный подход к обработке данных, позволяя писать компактный, эффективный и легко читаемый код.

#### Основные концепции
1. **Stream:** Последовательность элементов, поддерживающая различные методы для выполнения вычислительных операций над элементами.
2. **Stream operations:** Операции, которые можно выполнять над потоками, делятся на промежуточные (intermediate) и терминальные (terminal) операции.
3. **Intermediate operations:** Такие операции, как `filter`, `map`, `sorted`, возвращают новый stream и могут быть связаны в цепочки (chaining).
4. **Terminal operations:** Такие операции, как `forEach`, `reduce`, `collect`, завершают поток и возвращают результат.
5. **Laziness:** Большинство промежуточных операций ленивы, т.е., они не выполняются, пока не будет вызвана терминальная операция.

#### Работа со Stream API
##### Создание Stream
Stream можно создать несколькими способами:
- Из коллекций: `Collection.stream()`
- Из массивов: `Arrays.stream(array)`
- Из значений: `Stream.of(value1, value2, ...)`
- Из файлов: `Files.lines(path, charset)`
- Инфинитивные стримы: `Stream.iterate` или `Stream.generate`

##### Промежуточные операции
Примеры промежуточных операций:
- `filter(Predicate<T>)`: фильтрует элементы, возвращая только те, которые удовлетворяют заданному условию.
- `map(Function<T, R>)`: преобразует элементы из одного типа в другой.
- `sorted()`: сортирует элементы на основе их естественного порядка или компаратора.

##### Терминальные операции
Примеры терминальных операций:
- `forEach(Consumer<T>)`: выполняет действие для каждого элемента потока.
- `collect(Collector<T, A, R>)`: трансформирует элементы потока в другую форму, например, в список или множество.
- `reduce(BinaryOperator<T>)`: комбинирует элементы потока в одно значение на основе заданной операции.

#### Примеры использования

##### Фильтрация и вывод данных
```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");
names.stream()
     .filter(name -> name.startsWith("A"))
     .forEach(System.out::println); // Выводит "Alice"
```

##### Преобразование и сбор данных
```java
List<String> names = Arrays.asList("1", "2", "3");
List<Integer> numbers = names.stream()
                             .map(Integer::parseInt)
                             .collect(Collectors.toList());
```

##### Сложение всех чисел в списке
```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
int sum = numbers.stream()
                 .reduce(0, (a, b) -> a + b);
System.out.println("Sum: " + sum); // Выводит "Sum: 15"
```


- **Поиск элемента с максимальным/минимальным значением:**
  ```java
  Optional<String> longestString = Stream.of("apple", "banana", "cherry")
      .max(Comparator.comparingInt(String::length));
  ```

- **Частота элементов:**
  ```java
  Map<String, Long> frequency = Stream.of("apple", "banana", "apple")
      .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
  ```
