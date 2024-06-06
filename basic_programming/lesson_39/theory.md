## 1. InputStream

### 1.1 Описание
`InputStream` — это абстрактный класс, который представляет поток ввода байтов. Он является базовым классом для всех классов, которые читают байты данных из различных источников, таких как файлы, массивы байтов и т.д. Все методы `InputStream` либо читают байты, либо манипулируют положением в потоке.

### 1.2 Основные методы
- `int read()`: Читает один байт данных из входного потока. Возвращает следующий байт данных, или -1, если достигнут конец потока.
- `int read(byte[] b)`: Читает до `b.length` байтов из входного потока в массив байтов `b`. Возвращает количество прочитанных байтов или -1, если достигнут конец потока.
- `int read(byte[] b, int off, int len)`: Читает до `len` байтов из входного потока в массив `b`, начиная с `off` позиции. Возвращает количество прочитанных байтов или -1, если достигнут конец потока.
- `long skip(long n)`: Пропускает и пропускает `n` байтов в этом входном потоке.
- `int available()`: Возвращает оценку количества байтов, которые могут быть прочитаны из этого входного потока без блокировки.
- `void close()`: Закрывает входной поток и освобождает все системные ресурсы, связанные с этим потоком.

### 1.3 Примеры

#### Пример 1: Чтение байтов из файла
```java
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

public class InputStreamExample {
    public static void main(String[] args) {
        try (InputStream inputStream = new FileInputStream("example.txt")) {
            int data;
            while ((data = inputStream.read()) != -1) {
                System.out.print((char) data);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

#### Пример 2: Чтение данных в массив байтов
```java
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

public class InputStreamArrayExample {
    public static void main(String[] args) {
        try (InputStream inputStream = new FileInputStream("example.txt")) {
            byte[] data = new byte[1024

];
            int bytesRead;
            while ((bytesRead = inputStream.read(data)) != -1) {
                String text = new String(data, 0, bytesRead);
                System.out.print(text);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

#### Пример 3: Пропуск байтов в потоке
```java
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

public class InputStreamSkipExample {
    public static void main(String[] args) {
        try (InputStream inputStream = new FileInputStream("example.txt")) {
            inputStream.skip(10); // Пропускаем первые 10 байтов
            int data;
            while ((data = inputStream.read()) != -1) {
                System.out.print((char) data);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```