<details>
  <summary style="cursor: pointer;"><b>English</b></summary>

# Introductory Lecture on the Topic: **Controllers in Spring Boot**

---

## 1. Introduction to Spring Boot and Controllers

**Spring Boot** is a framework for building modern Java applications that significantly simplifies development through automatic configuration and built-in solutions for creating web applications, microservices, and REST APIs. One of the key concepts in Spring Boot is the **MVC (Model-View-Controller)** architecture, where controllers play a central role.

A **controller** is a component that handles HTTP requests from the client (e.g., a browser or another service) and returns HTTP responses. In Spring Boot, controllers are implemented using annotations, making them easy to use and configure.

---

## 2. Key Responsibilities of a Controller

Controllers in Spring Boot perform the following tasks:
1. **Request Handling**: Accept HTTP requests (GET, POST, PUT, DELETE, etc.).
2. **Routing**: Determine which controller method should handle the request based on the URL and HTTP method.
3. **Interaction with Business Logic**: Pass data from the request to the service layer for processing.
4. **Response Formation**: Return data to the client in JSON, XML, or HTML format.

---

## 3. Annotations for Creating Controllers

Spring Boot provides a set of annotations for creating controllers:

1. **@RestController**:
    - Indicates that the class is a controller.
    - Combines the `@Controller` and `@ResponseBody` annotations, meaning that all methods return data in JSON or XML format by default.

2. **@RequestMapping**:
    - Defines the base URL for all methods in the controller.
    - For example, `@RequestMapping("/api")` means that all methods will be accessible under the `/api/...` path.

3. **@GetMapping, @PostMapping, @PutMapping, @DeleteMapping**:
    - Specify which HTTP method the controller method handles.
    - For example, `@GetMapping("/users")` handles GET requests to `/users`.

4. **@PathVariable**:
    - Used to extract data from the URL.
    - For example, in the URL `/users/{id}`, `{id}` will be extracted and passed to the method as a parameter.

5. **@RequestParam**:
    - Used to extract query parameters from the URL.
    - For example, in the URL `/users?name=John`, the `name` parameter will be extracted.

6. **@RequestBody**:
    - Used to extract data from the request body (usually in JSON format).

---

## 4. Example of a Simple Controller

Let's look at an example of a controller for managing a list of users:

```java
@RestController
@RequestMapping("/users")
public class UserController {

    private List<String> users = new ArrayList<>();

    // Get all users
    @GetMapping
    public List<String> getUsers() {
        return users;
    }

    // Get a user by ID
    @GetMapping("/{id}")
    public String getUserById(@PathVariable int id) {
        return users.get(id);
    }

    // Add a new user
    @PostMapping
    public String addUser(@RequestBody String user) {
        users.add(user);
        return "User added: " + user;
    }

    // Update a user by ID
    @PutMapping("/{id}")
    public String updateUser(@PathVariable int id, @RequestBody String user) {
        users.set(id, user);
        return "User updated: " + user;
    }

    // Delete a user by ID
    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable int id) {
        users.remove(id);
        return "User deleted";
    }
}
```

---

## 5. How Does a Controller Work?

1. The client sends an HTTP request to the server (e.g., `GET /users`).
2. Spring Boot analyzes the URL and HTTP method to determine which controller method should handle the request.
3. The controller method executes the necessary logic (e.g., retrieves data from the database).
4. The controller returns a response to the client (e.g., a list of users in JSON format).

---

## 6. Advantages of Using Controllers in Spring Boot

1. **Simplicity**: Annotations make the code clear and concise.
2. **Flexibility**: Supports various HTTP methods and data formats (JSON, XML, HTML).
3. **Integration**: Easily integrates with other Spring components (services, repositories, databases).
4. **Scalability**: Enables the creation of both small applications and complex microservices.

---

## 7. Practical Applications

Controllers are used for:
- Creating REST APIs for mobile and web applications.
- Handling forms and user data.
- Integrating with external systems via HTTP requests.
- Building microservice architectures.

---

## 8. Conclusion

Controllers are the heart of any Spring Boot application. They facilitate interaction between the client and server by handling requests and returning responses. The use of annotations makes developing controllers simple and efficient, allowing developers to focus on implementing business logic.


---
</details>

<hr>

<details style="padding-top: 18px">
  <summary style="cursor: pointer;"><b>На русском</b></summary>

# Вводная лекция по теме: **Контроллеры в Spring Boot**

---

## 1. Введение в Spring Boot и контроллеры

**Spring Boot** — это фреймворк для создания современных Java-приложений, который значительно упрощает разработку за счёт автоматической настройки и встроенных решений для создания веб-приложений, микросервисов и REST API. Одной из ключевых концепций Spring Boot является **MVC (Model-View-Controller)** архитектура, где контроллеры играют центральную роль.

**Контроллер** — это компонент, который обрабатывает HTTP-запросы от клиента (например, браузера или другого сервиса) и возвращает HTTP-ответы. В Spring Boot контроллеры реализуются с помощью аннотаций, что делает их простыми в использовании и настройке.

---

## 2. Основные задачи контроллера

Контроллеры в Spring Boot выполняют следующие задачи:
1. **Обработка запросов**: Принимают HTTP-запросы (GET, POST, PUT, DELETE и другие).
2. **Маршрутизация**: Определяют, какой метод контроллера должен обработать запрос на основе URL и типа HTTP-метода.
3. **Взаимодействие с бизнес-логикой**: Передают данные из запроса в сервисный слой для обработки.
4. **Формирование ответа**: Возвращают данные клиенту в формате JSON, XML или HTML.

---

## 3. Аннотации для создания контроллеров

Spring Boot предоставляет набор аннотаций для создания контроллеров:

1. **@RestController**:
    - Указывает, что класс является контроллером.
    - Объединяет в себе аннотации `@Controller` и `@ResponseBody`, что означает, что все методы по умолчанию возвращают данные в формате JSON или XML.

2. **@RequestMapping**:
    - Определяет базовый URL для всех методов контроллера.
    - Например, `@RequestMapping("/api")` означает, что все методы будут доступны по пути `/api/...`.

3. **@GetMapping, @PostMapping, @PutMapping, @DeleteMapping**:
    - Указывают, какой HTTP-метод обрабатывает метод контроллера.
    - Например, `@GetMapping("/users")` обрабатывает GET-запросы на `/users`.

4. **@PathVariable**:
    - Используется для извлечения данных из URL.
    - Например, в URL `/users/{id}`, `{id}` будет извлечён и передан в метод как параметр.

5. **@RequestParam**:
    - Используется для извлечения параметров запроса из URL.
    - Например, в URL `/users?name=John`, параметр `name` будет извлечён.

6. **@RequestBody**:
    - Используется для извлечения данных из тела запроса (обычно в формате JSON).

---

## 4. Пример простого контроллера

Рассмотрим пример контроллера для управления списком пользователей:

```java
@RestController
@RequestMapping("/users")
public class UserController {

    private List<String> users = new ArrayList<>();

    // Получить всех пользователей
    @GetMapping
    public List<String> getUsers() {
        return users;
    }

    // Получить пользователя по ID
    @GetMapping("/{id}")
    public String getUserById(@PathVariable int id) {
        return users.get(id);
    }

    // Добавить нового пользователя
    @PostMapping
    public String addUser(@RequestBody String user) {
        users.add(user);
        return "User added: " + user;
    }

    // Обновить пользователя по ID
    @PutMapping("/{id}")
    public String updateUser(@PathVariable int id, @RequestBody String user) {
        users.set(id, user);
        return "User updated: " + user;
    }

    // Удалить пользователя по ID
    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable int id) {
        users.remove(id);
        return "User deleted";
    }
}
```

---

## 5. Как работает контроллер?

1. Клиент отправляет HTTP-запрос на сервер (например, `GET /users`).
2. Spring Boot анализирует URL и HTTP-метод, чтобы определить, какой метод контроллера должен обработать запрос.
3. Метод контроллера выполняет необходимую логику (например, извлекает данные из базы данных).
4. Контроллер возвращает ответ клиенту (например, список пользователей в формате JSON).

---

## 6. Преимущества использования контроллеров в Spring Boot

1. **Простота**: Аннотации делают код понятным и лаконичным.
2. **Гибкость**: Поддержка различных HTTP-методов и форматов данных (JSON, XML, HTML).
3. **Интеграция**: Легко интегрируется с другими компонентами Spring (сервисы, репозитории, базы данных).
4. **Масштабируемость**: Позволяет создавать как небольшие приложения, так и сложные микросервисы.

---

## 7. Практическое применение

Контроллеры используются для:
- Создания REST API для мобильных и веб-приложений.
- Обработки форм и данных от пользователей.
- Интеграции с внешними системами через HTTP-запросы.
- Построения микросервисной архитектуры.

---

## 8. Заключение

Контроллеры — это сердце любого Spring Boot приложения. Они обеспечивают взаимодействие между клиентом и сервером, обрабатывая запросы и возвращая ответы. Использование аннотаций делает разработку контроллеров простой и эффективной, что позволяет сосредоточиться на реализации бизнес-логики.

---




</details>
