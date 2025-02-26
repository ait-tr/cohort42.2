<details>
  <summary style="cursor: pointer;"><b>English</b></summary>

# Introduction to Multithreading in Java

## 1. What are Threads in Java?
A thread is the smallest unit of execution in a program. Java supports multithreading, allowing multiple tasks to be executed in parallel.

### Advantages of Multithreading
- **Increased Performance**: Multithreading enables parallel execution, reducing overall execution time.
- **Better CPU Utilization**: Allows efficient use of processor resources.
- **More Responsive Applications**: GUI applications remain responsive during long-running operations.
- **Improved Management of Complex Tasks**: Useful for real-time data processing, network operations, and parallel tasks.

## 2. Creating Threads in Java
There are two ways to create threads in Java:

### 2.1. Implementing the `Runnable` Interface
```java
class MyRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("Thread running: " + Thread.currentThread().getName());
    }
}

public class RunnableExample {
    public static void main(String[] args) {
        Thread thread = new Thread(new MyRunnable());
        thread.start();
    }
}
```
**Advantage:** Allows extending another class.

### 2.2. Extending the `Thread` Class
```java
class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Thread running: " + getName());
    }
}

public class ThreadExample {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start();
    }
}
```
**Advantage:** Easier implementation if no other class needs to be extended.

## 3. Thread Management

### 3.1. Thread Control Methods
| Method | Description |
|--------|------------|
| `start()` | Starts the thread |
| `run()` | Defines the code executed by the thread |
| `sleep(ms)` | Suspends the thread for a specified time |
| `join()` | Waits for another thread to complete |
| `interrupt()` | Interrupts a running thread |
| `setDaemon(true/false)` | Sets the thread as a background (daemon) thread |
| `isAlive()` | Checks if the thread is currently running |

Example using `sleep()`:
```java
class SleepExample {
    public static void main(String[] args) {
        Thread thread = new Thread(() -> {
            try {
                System.out.println("Thread started");
                Thread.sleep(2000);
                System.out.println("Thread finished");
            } catch (InterruptedException e) {
                System.out.println("Thread was interrupted");
            }
        });
        thread.start();
    }
}
```

## 4. Multithreading Issues
- **Race Condition** – Incorrect results due to parallel access to shared data.
- **Shared Resource Access** – Requires `synchronized`, `Lock`, or `Concurrent` API to prevent conflicts.
- **Deadlock** – Situation where threads block each other and cannot proceed.
- **Starvation** – A thread receives insufficient CPU time due to higher-priority threads.
- **Livelock** – Threads keep changing states without making progress.

## 5. Thread Synchronization
To prevent conflicts when accessing shared resources, use `synchronized`:
```java
class Counter {
    private int count = 0;
    
    public synchronized void increment() {
        count++;
    }
    
    public int getCount() {
        return count;
    }
}
```
Alternatively, use `ReentrantLock`:
```java
import java.util.concurrent.locks.ReentrantLock;

class Counter {
    private int count = 0;
    private final ReentrantLock lock = new ReentrantLock();

    public void increment() {
        lock.lock();
        try {
            count++;
        } finally {
            lock.unlock();
        }
    }
}
```

## 6. Thread Pool (Thread Pooling)
Creating and destroying threads can be costly. `ExecutorService` allows efficient thread pool management:
```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ThreadPoolExample {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(3);

        for (int i = 0; i < 5; i++) {
            executor.execute(() -> {
                System.out.println("Thread running: " + Thread.currentThread().getName());
            });
        }
        executor.shutdown();
    }
}
```
**Advantages of Thread Pooling:**
- Limits the number of threads.
- Reduces overhead for thread creation/destruction.
- Improves resource management.

## Conclusion
Multithreading in Java is a powerful tool for improving performance, but it requires careful thread management and synchronization. `Thread` and `Runnable` are suitable for simple tasks, while `ExecutorService` and `Concurrent` API are recommended for more complex scenarios.


</details>

<hr>

<details style="padding-top: 18px">
  <summary style="cursor: pointer;"><b>На русском</b></summary>

# Введение в многопоточность в Java

## 1. Что такое потоки (Threads) в Java?
Поток (Thread) — это наименьшая единица выполнения в программе. Java поддерживает многопоточность, позволяя выполнять несколько задач параллельно.

### Преимущества многопоточности
- **Повышенная производительность**: многопоточные программы могут выполнять несколько задач одновременно, что снижает общее время выполнения.
- **Оптимальное использование ресурсов процессора**: многопоточность позволяет загружать процессор более эффективно.
- **Более отзывчивые приложения**: многопоточные программы (например, GUI-приложения) остаются отзывчивыми во время выполнения длительных операций.
- **Лучшее управление сложными задачами**: например, обработка данных в реальном времени, сетевое взаимодействие и другие параллельные задачи.

## 2. Создание потоков в Java
В Java есть два способа создания потоков:

### 2.1. Реализация интерфейса `Runnable`
```java
class MyRunnable implements Runnable {
    @Override
    public void run() {
        System.out.println("Поток выполняется: " + Thread.currentThread().getName());
    }
}

public class RunnableExample {
    public static void main(String[] args) {
        Thread thread = new Thread(new MyRunnable());
        thread.start();
    }
}
```
**Преимущество:** Позволяет использовать наследование от других классов.

### 2.2. Наследование от класса `Thread`
```java
class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Поток выполняется: " + getName());
    }
}

public class ThreadExample {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start();
    }
}
```
**Преимущество:** Более простая реализация, если не требуется наследовать другой класс.

## 3. Управление потоками

### 3.1. Методы управления потоками
| Метод | Описание |
|--------|----------|
| `start()` | Запускает поток |
| `run()` | Определяет код, который выполняется в потоке |
| `sleep(ms)` | Приостанавливает поток на указанное время |
| `join()` | Ожидает завершения другого потока |
| `interrupt()` | Прерывает выполнение потока |
| `setDaemon(true/false)` | Устанавливает поток как фоновый (демон) |
| `isAlive()` | Проверяет, выполняется ли поток в данный момент |

Пример использования `sleep()`:
```java
class SleepExample {
    public static void main(String[] args) {
        Thread thread = new Thread(() -> {
            try {
                System.out.println("Поток запущен");
                Thread.sleep(2000);
                System.out.println("Поток завершился");
            } catch (InterruptedException e) {
                System.out.println("Поток был прерван");
            }
        });
        thread.start();
    }
}
```

## 4. Проблемы многопоточности
- **Состояние гонки (Race condition)** – некорректные результаты из-за параллельного доступа к данным.
- **Доступ к общим ресурсам** – использование `synchronized`, `Lock` или `Concurrent` API для предотвращения конфликтов.
- **Взаимная блокировка (Deadlock)** – ситуация, когда потоки блокируют друг друга и не могут продолжить выполнение.
- **Голодание (Starvation)** – один поток получает недостаточно процессорного времени из-за приоритета других потоков.
- **Спин-блокировка (Livelock)** – потоки постоянно меняют состояние, но не выполняют полезной работы.

## 5. Синхронизация потоков
Для предотвращения конфликтов при доступе к общим ресурсам используется `synchronized`:
```java
class Counter {
    private int count = 0;
    
    public synchronized void increment() {
        count++;
    }
    
    public int getCount() {
        return count;
    }
}
```
Альтернативой является использование `ReentrantLock`:
```java
import java.util.concurrent.locks.ReentrantLock;

class Counter {
    private int count = 0;
    private final ReentrantLock lock = new ReentrantLock();

    public void increment() {
        lock.lock();
        try {
            count++;
        } finally {
            lock.unlock();
        }
    }
}
```

## 6. Пул потоков (Thread Pool)
Создание и уничтожение потоков может быть затратным. `ExecutorService` позволяет управлять пулами потоков:
```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ThreadPoolExample {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(3);

        for (int i = 0; i < 5; i++) {
            executor.execute(() -> {
                System.out.println("Поток выполняется: " + Thread.currentThread().getName());
            });
        }
        executor.shutdown();
    }
}
```
**Преимущества пула потоков:**
- Позволяет ограничить количество потоков.
- Уменьшает накладные расходы на создание/уничтожение потоков.
- Улучшает управление ресурсами.

## Заключение
Многопоточное программирование в Java – мощный инструмент для повышения производительности, но требует правильного управления потоками и синхронизации данных. Для простых задач подходят `Thread` и `Runnable`, а для сложных – `ExecutorService` и `Concurrent` API.





</details>
