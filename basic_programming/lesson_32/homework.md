### Задание: Параметризированные тесты в JUnit по теме "Одежда"

#### Описание:
В этом задании вам предстоит создать параметризированные тесты для класса, который управляет коллекцией одежды. Вам нужно будет использовать JUnit для написания тестов и проверки корректности методов класса `ClothingManager`. Класс `ClothingManager` должен содержать методы для добавления, удаления и поиска одежды по различным параметрам.

#### Требования:
1. **Создать класс `ClothingItem`:**
    - Поля:
        - `String name` - название одежды
        - `String type` - тип одежды (например, "Футболка", "Джинсы", "Куртка")
        - `String size` - размер одежды (например, "S", "M", "L", "XL")
        - `double price` - цена одежды
    - Конструктор, геттеры и сеттеры

2. **Создать класс `ClothingManager`:**
    - Поля:
        - `List<ClothingItem> clothingItems` - список одежды
    - Методы:
        - `void addClothingItem(ClothingItem item)` - добавляет одежду в коллекцию
        - `boolean removeClothingItem(String name)` - удаляет одежду по названию и возвращает true, если удаление прошло успешно, иначе false
        - `List<ClothingItem> findClothingByType(String type)` - возвращает список одежды по указанному типу
        - `List<ClothingItem> findClothingBySize(String size)` - возвращает список одежды по указанному размеру
        - `ClothingItem findCheapestItem()` - возвращает самый дешевый элемент одежды

3. **Создать параметризированные тесты с использованием JUnit 5:**
    - Написать тесты для проверки методов класса `ClothingManager` с различными параметрами.
    - Использовать аннотации `@ParameterizedTest`, `@ValueSource`, `@CsvSource` и другие, чтобы проверить различные сценарии.