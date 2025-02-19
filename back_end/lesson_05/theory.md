<details>
  <summary style="cursor: pointer;"><b>English</b></summary>

# Lecture: Maven in Java with IntelliJ IDEA Examples

## Introduction
**Maven** is a tool for automating the build process of Java projects (and more). It provides:
- Dependency management (external libraries).
- Simplified compilation, testing, and artifact packaging.
- A standardized project structure.

In this lecture, we will cover the basics of working with **Maven** in the **IntelliJ IDEA** development environment.

---

## Installing Maven
1. **Built-in Maven**: IntelliJ IDEA comes with built-in Maven support by default.
2. **External Maven** (optional): You can install it separately from the [official website](https://maven.apache.org/download.cgi) and configure the path in IntelliJ IDEA settings.

To verify that Maven is installed and available in your system, run the following command in the terminal:
```bash
mvn -version
```

---

## Creating a New Maven Project in IntelliJ IDEA
1. Open IntelliJ IDEA.
2. Click `File → New → Project...`.
3. Select `Maven` (if you don't see it, choose `New Project` and then `Maven` on the left).
4. If necessary, uncheck `Create from archetype` or select a suitable archetype (project template).
5. Specify the `GroupId` (usually in the format `com.example`) and `ArtifactId` (project name).
6. Click `Next`, then `Finish`.

---

## Default Maven Project Structure
The project structure will look like this:
```
project
 ┣ src
 ┃ ┣ main
 ┃ ┃ ┗ java
 ┃ ┗ test
 ┃   ┗ java
 ┗ pom.xml
```

---

## The `pom.xml` File
The main configuration file for Maven is `pom.xml`. It contains:
- Project coordinates (`groupId`, `artifactId`, `version`).
- Dependencies (libraries, modules).
- Plugins for building, testing, packaging, etc.

### Example of a Basic `pom.xml`
```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
                             http://maven.apache.org/xsd/maven-4.0.0.xsd">

    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>demo-project</artifactId>
    <version>1.0-SNAPSHOT</version>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <!-- Specify the Java version, e.g., 17 -->
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
    </properties>

    <dependencies>
        <!-- Example: JUnit for testing -->
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-api</artifactId>
            <version>5.9.2</version>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <!-- Maven Compiler Plugin -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.10.1</version>
                <configuration>
                    <source>17</source>
                    <target>17</target>
                </configuration>
            </plugin>
            <!-- Maven Surefire Plugin for running tests -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>2.22.2</version>
            </plugin>
        </plugins>
    </build>

</project>
```

---

## Adding Dependencies
1. Open the `pom.xml` file.
2. Find or add the following section:
```xml
<dependencies>
    <!-- Add your dependencies here -->
</dependencies>
```
3. To add a dependency, specify:
    - `groupId`
    - `artifactId`
    - `version`

### Example: Adding the Gson Library
```xml
<dependency>
    <groupId>com.google.code.gson</groupId>
    <artifactId>gson</artifactId>
    <version>2.10.1</version>
</dependency>
```

After adding a dependency, IntelliJ IDEA usually downloads it automatically from the Maven repository. If it doesn't, click the `Maven panel → Reload All Maven Projects` icon.

---

## Basic Maven Commands
In IntelliJ IDEA, you can run all basic commands from the Maven panel (usually on the right) or from the terminal in the project's root directory.

### Basic Goals/Phases:
1. **compile**  
   Compiles the code into `target/classes`.
   ```bash
   mvn compile
   ```

2. **test**  
   Runs tests (e.g., JUnit or others).
   ```bash
   mvn test
   ```

3. **package**  
   Compiles and packages the project (usually into a `.jar` or `.war`) in the `target` folder.
   ```bash
   mvn package
   ```

4. **clean**  
   Deletes compiled files and artifacts in the `target` folder.
   ```bash
   mvn clean
   ```

5. **install**  
   Installs (saves) your artifact into the local Maven repository (e.g., `~/.m2/repository`).
   ```bash
   mvn install
   ```

---

## Running Commands in IntelliJ IDEA
1. Click the `Maven` tab (on the right or left, depending on your IDE version).
2. Expand the `Lifecycle` tree.
3. Double-click the desired phase (e.g., `test`) to run the task.

---

## Example Code
For testing, let's create a simple `HelloWorld` class and a test for it.

### `src/main/java/com/example/HelloWorld.java`
```java
package com.example;

public class HelloWorld {
    public String getGreeting() {
        return "Hello, Maven!";
    }

    public static void main(String[] args) {
        System.out.println(new HelloWorld().getGreeting());
    }
}
```

### `src/test/java/com/example/HelloWorldTest.java`
```java
package com.example;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

class HelloWorldTest {

    @Test
    void testGetGreeting() {
        HelloWorld hello = new HelloWorld();
        Assertions.assertEquals("Hello, Maven!", hello.getGreeting());
    }
}
```

1. Run `mvn clean test` in the terminal or execute the `test` phase in IntelliJ IDEA using the Maven Tool Window.
2. Ensure the test passes successfully.

---

## Useful Tips
1. Regularly update plugin and dependency versions — Maven will download new versions from the central repository.
2. For dependency conflicts (different versions of the same library), use `<dependencyManagement>` or dependency analysis plugins (`mvn dependency:tree`).
3. If a class is not visible during compilation, ensure the `scope` (`compile`, `test`, `runtime`, etc.) is correctly configured in `pom.xml`.
4. Use Maven Wrapper to lock the Maven version in your project. Then, the command `./mvnw clean install` will use the version from the project itself.

---

## Conclusion
Maven simplifies project management and makes the build process repeatable and predictable. It makes it easy to manage dependencies, run tests, and package artifacts. By mastering the basic commands and the structure of `pom.xml`, you can efficiently work on Java projects in IntelliJ IDEA.


</details>

<hr>

<details style="padding-top: 18px">
  <summary style="cursor: pointer;"><b>На русском</b></summary>

# Лекция: Maven в Java на примерах IntelliJ IDEA

## Введение
**Maven** — это инструмент для автоматизации сборки проектов на Java (и не только). Он обеспечивает:
- Управление зависимостями (внешние библиотеки).
- Упрощённую компиляцию, тестирование и сборку артефактов.
- Стандартизированную структуру проекта.

В данной лекции мы рассмотрим основы работы с **Maven** в среде разработки **IntelliJ IDEA**.

---

## Установка Maven
1. **Встроенный Maven**: IntelliJ IDEA по умолчанию идёт со встроенной поддержкой Maven.
2. **Внешний Maven** (необязательно): можно установить отдельно с [официального сайта](https://maven.apache.org/download.cgi) и указать путь в настройках IntelliJ IDEA.

Чтобы проверить, что Maven установлен и доступен в системе, запустите в терминале:
```bash
mvn -version
```

---

## Создание нового Maven-проекта в IntelliJ IDEA
1. Откройте IntelliJ IDEA.
2. Нажмите `File → New → Project...`.
3. Выберите `Maven` (если не видите, то выберите `New Project` и слева — `Maven`).
4. При необходимости снимите галочку `Create from archetype` или выберите подходящий archetype (заготовку проекта).
5. Укажите `GroupId` (обычно формат `com.example`) и `ArtifactId` (название проекта).
6. Нажмите `Next`, затем `Finish`.

---

## Структура Maven-проекта по умолчанию
Структура проекта будет выглядеть так:
```
project
 ┣ src
 ┃ ┣ main
 ┃ ┃ ┗ java
 ┃ ┗ test
 ┃   ┗ java
 ┗ pom.xml
```

---

## Файл `pom.xml`
Главный файл конфигурации Maven — это `pom.xml`. Он содержит:
- Координаты проекта (`groupId`, `artifactId`, `version`).
- Зависимости (библиотеки, модули).
- Плагины для сборки, тестирования, упаковки и т.д.

### Пример базового `pom.xml`
```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
                             http://maven.apache.org/xsd/maven-4.0.0.xsd">

    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>demo-project</artifactId>
    <version>1.0-SNAPSHOT</version>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <!-- Указываем версию Java, например 17 -->
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
    </properties>

    <dependencies>
        <!-- Пример: JUnit для тестов -->
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter-api</artifactId>
            <version>5.9.2</version>
            <scope>test</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <!-- Плагин компиляции Maven -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.10.1</version>
                <configuration>
                    <source>17</source>
                    <target>17</target>
                </configuration>
            </plugin>
            <!-- Плагин запуска тестов -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
                <version>2.22.2</version>
            </plugin>
        </plugins>
    </build>

</project>
```

---

## Добавление зависимостей
1. Откройте файл `pom.xml`.
2. Найдите или добавьте раздел:
```xml
<dependencies>
    <!-- Здесь добавляйте нужные зависимости -->
</dependencies>
```
3. Чтобы добавить зависимость, нужно указать:
    - `groupId`
    - `artifactId`
    - `version`

### Пример: добавление библиотеки Gson
```xml
<dependency>
    <groupId>com.google.code.gson</groupId>
    <artifactId>gson</artifactId>
    <version>2.10.1</version>
</dependency>
```

После добавления зависимости IntelliJ IDEA обычно автоматически скачивает её из репозитория Maven. Если этого не произошло, нажмите `Maven-панель → иконку Reload All Maven Projects`.

---

## Основные команды Maven
В IntelliJ IDEA все основные команды можно запускать на Maven-панели (обычно справа), либо в терминале, находясь в корне проекта.

### Основные цели/фазы:
1. **compile**  
   Компилирует код в `target/classes`.
   ```bash
   mvn compile
   ```

2. **test**  
   Запускает тесты (классические JUnit или другие).
   ```bash
   mvn test
   ```

3. **package**  
   Компилирует и упаковывает проект (обычно в `.jar` или `.war`) в папку `target`.
   ```bash
   mvn package
   ```

4. **clean**  
   Удаляет скомпилированные файлы и артефакты в папке `target`.
   ```bash
   mvn clean
   ```

5. **install**  
   Устанавливает (сохраняет) ваш артефакт в локальный Maven-репозиторий (например `~/.m2/repository`).
   ```bash
   mvn install
   ```

---

## Запуск команд в IntelliJ IDEA
1. Нажмите вкладку `Maven` (справа или слева, в зависимости от версии IDE).
2. Раскройте дерево `Lifecycle`.
3. Двойным кликом по нужной фазе (например `test`) запустите задачу.

---

## Пример кода
Для теста возьмём небольшой класс `HelloWorld` и тест к нему.

### `src/main/java/com/example/HelloWorld.java`
```java
package com.example;

public class HelloWorld {
    public String getGreeting() {
        return "Hello, Maven!";
    }

    public static void main(String[] args) {
        System.out.println(new HelloWorld().getGreeting());
    }
}
```

### `src/test/java/com/example/HelloWorldTest.java`
```java
package com.example;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

class HelloWorldTest {

    @Test
    void testGetGreeting() {
        HelloWorld hello = new HelloWorld();
        Assertions.assertEquals("Hello, Maven!", hello.getGreeting());
    }
}
```

1. Выполните `mvn clean test` в консоли или запустите фазу `test` в IntelliJ IDEA через Maven Tool Window.
2. Убедитесь, что тест прошёл успешно.

---

## Полезные советы
1. Обновляйте версии плагинов и зависимостей регулярно — Maven будет скачивать новые версии из центрального репозитория.
2. При конфликте зависимостей (версии одних и тех же библиотек отличаются) используйте `<dependencyManagement>` или плагины анализа зависимостей (`mvn dependency:tree`).
3. Если какой-то класс не виден при компиляции, убедитесь, что `scope` (`compile`, `test`, `runtime` и т.д.) настроен правильно в `pom.xml`.
4. Используйте Maven Wrapper для фиксирования версии Maven в проекте. Тогда команда `./mvnw clean install` будет использовать версию из самого проекта.

---

## Заключение
Maven упрощает работу над проектом и делает процесс сборки повторяемым и предсказуемым. С ним легко управлять зависимостями, запускать тесты и собирать готовые артефакты. Освоив базовые команды и структуру `pom.xml`, вы сможете эффективно работать над Java-проектами в IntelliJ IDEA.
```




</details>
