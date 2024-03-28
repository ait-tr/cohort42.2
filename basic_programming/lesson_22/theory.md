### HashSet в Java

#### Введение в HashSet

`HashSet` в Java является реализацией интерфейса `Set`, который использует хеш-таблицу для хранения элементов. Он обеспечивает быстрое выполнение операций добавления, удаления и поиска, гарантируя при этом уникальность элементов. Важной особенностью `HashSet` является отсутствие гарантии порядка хранения элементов.

#### Основные характеристики

- **Уникальность**: `HashSet` не допускает дублирование элементов.
- **Производительность**: благодаря использованию хеш-таблиц, `HashSet` обеспечивает быстрое выполнение основных операций.
- **Null-значения**: поддерживает хранение не более одного `null` элемента.

#### Внутреннее устройство

`HashSet` основан на `HashMap`, где каждый элемент хранится как ключ. Значения в этой `HashMap` фактически игнорируются. Эффективность `HashSet` зависит от качества реализации функции хеширования (`hashCode()`).

#### Создание и использование HashSet

```java
import java.util.HashSet;

public class DemoHashSet {
    public static void main(String[] args) {
        HashSet<String> set = new HashSet<>();
        
        // Добавление элементов
        set.add("Java");
        set.add("Python");
        set.add("C++");

        // Попытка добавить дубликат
        set.add("Java"); // Элемент не будет добавлен

        // Проверка наличия элемента
        if (set.contains("Java")) {
            System.out.println("Java присутствует в наборе");
        }

        // Удаление элемента
        set.remove("Python");

        // Итерация по элементам
        for (String language : set) {
            System.out.println(language);
        }
    }
}
```

#### Особенности работы с HashSet

- **Итерация**: порядок итерации элементов не фиксирован и может изменяться при добавлении или удалении элементов.
- **Производительность**: хотя `HashSet` обеспечивает быстрое выполнение операций, производительность может снижаться при увеличении количества элементов в хеш-таблице из-за коллизий.
- **Кастомные объекты**: при использовании кастомных объектов необходимо правильно переопределить методы `equals()` и `hashCode()`, чтобы обеспечить корректное сравнение и уникальность объектов.

#### Пример с кастомными объектами

```java
import java.util.Objects;
import java.util.HashSet;

class Person {
    private String name;
    private int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Person person = (Person) o;
        return age == person.age &&
               Objects.equals(name, person.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }

    @Override
    public String toString() {
        return "Person{name='" + name + '\'' + ", age=" + age + '}';
    }
}

public class CustomObjectHashSet {
    public static void main(String[] args) {
        HashSet<Person> set = new HashSet<>();

        set.add(new Person("Alice", 30));
        set.add(new Person("Bob", 25));
        // Добавление объекта с теми же значениями полей не приведет к дублированию
        set.add(new Person("Alice", 30));

        for (Person p : set) {
            System.out.println(p);
        }
    }
}
```

`HashSet` является мощным инструментом для хранения уникальных элементов в Java. Он обеспечивает высокую производительность за счет использования хеш-таблицы, однако требует внимательного подхода при работе с кастомными объектами из-за необходимости корректного переопределения методов `equals()` и `hashCode()`.