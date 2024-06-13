# Лекция по теме Java IO (Input/Output)

## Введение

Java IO (Input/Output) представляет собой набор классов и интерфейсов, обеспечивающих различные способы ввода и вывода данных. Эти классы являются частью пакета `java.io`. Основная цель этих классов – обеспечить стандартные методы для работы с потоками данных, файлами, буферами и другими средствами ввода-вывода.

## Основные понятия

### Потоки

Потоки в Java представляют собой абстракцию для чтения и записи данных. Они бывают двух типов:

1. **Потоки байтов (Byte Streams)** – предназначены для работы с байтовыми данными (например, для ввода-вывода файлов). Они являются подклассами `InputStream` и `OutputStream`.
2. **Потоки символов (Character Streams)** – предназначены для работы с текстовыми данными (например, для ввода-вывода текстовых файлов). Они являются подклассами `Reader` и `Writer`.

### Основные классы

#### Потоки байтов

- `InputStream`: абстрактный класс для чтения байтовых данных.
- `OutputStream`: абстрактный класс для записи байтовых данных.
- `FileInputStream`: читает данные из файла в виде байтов.
- `FileOutputStream`: записывает данные в файл в виде байтов.
- `BufferedInputStream` и `BufferedOutputStream`: обеспечивают буферизированное чтение и запись байтов, что повышает производительность.

#### Потоки символов

- `Reader`: абстрактный класс для чтения текстовых данных.
- `Writer`: абстрактный класс для записи текстовых данных.
- `FileReader`: читает данные из файла в виде символов.
- `FileWriter`: записывает данные в файл в виде символов.
- `BufferedReader` и `BufferedWriter`: обеспечивают буферизированное чтение и запись символов.

## Примеры использования

### Чтение из файла и запись в файл (байтовые потоки)

```java
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class ByteStreamExample {
    public static void main(String[] args) {
        try (FileInputStream fis = new FileInputStream("input.txt");
             FileOutputStream fos = new FileOutputStream("output.txt")) {

            int byteData;
            while ((byteData = fis.read()) != -1) {
                fos.write(byteData);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### Чтение из файла и запись в файл (символьные потоки)

```java
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class CharacterStreamExample {
    public static void main(String[] args) {
        try (FileReader fr = new FileReader("input.txt");
             FileWriter fw = new FileWriter("output.txt")) {

            int charData;
            while ((charData = fr.read()) != -1) {
                fw.write(charData);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### Буферизированное чтение и запись

Использование буферов может значительно улучшить производительность при работе с потоками.

#### Пример использования `BufferedReader` и `BufferedWriter`

```java
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class BufferedStreamExample {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new FileReader("input.txt"));
             BufferedWriter bw = new BufferedWriter(new FileWriter("output.txt"))) {

            String line;
            while ((line = br.readLine()) != null) {
                bw.write(line);
                bw.newLine();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### Обработка исключений

Работа с потоками ввода-вывода требует обработки исключений, так как операции с файлами могут вызвать различные ошибки (например, файл может не существовать, быть недоступным и т.д.). В примерах выше используются блоки `try-with-resources`, которые автоматически закрывают ресурсы после завершения блока.


