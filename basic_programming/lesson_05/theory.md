### Логические операторы в Java

#### 1. Логическое И (&&)
Оператор `&&` используется для объединения двух условий. Он возвращает `true`, если оба условия истинны.

**Пример:**
```java
int a = 10;
int b = 20;
if (a > 5 && b > 15) {
    System.out.println("Оба условия истинны.");
}
```
Здесь программа выведет "Оба условия истинны.", потому что `a > 5` и `b > 15` оба истинны.

#### 2. Логическое ИЛИ (||)
Оператор `||` возвращает `true`, если хотя бы одно из условий истинно.

**Пример:**
```java
int a = 4;
int b = 20;
if (a > 10 || b > 15) {
    System.out.println("Хотя бы одно из условий истинно.");
}
```
Здесь программа выведет "Хотя бы одно из условий истинно.", потому что `b > 15` истинно, даже если `a > 10` ложно.

#### 3. Логическое НЕ (!)
Оператор `!` инвертирует булево значение своего операнда.

**Пример:**
```java
boolean isRaining = false;
if (!isRaining) {
    System.out.println("На улице сухо.");
}
```
Этот код выведет "На улице сухо.", поскольку `isRaining` ложно, и `!isRaining` становится истинным.

#### 4. Логическое исключающее ИЛИ (^)
Оператор `^` возвращает `true`, если операнды различны.

**Пример:**
```java
boolean isDay = true;
boolean isLightOn = false;
if (isDay ^ isLightOn) {
    System.out.println("Одно из условий истинно, но не оба.");
}
```
Этот код выведет "Одно из условий истинно, но не оба.", так как `isDay` истинно, а `isLightOn` ложно.

### Комбинирование логических и операторов сравнения

Логические операторы часто используются совместно с операторами сравнения для формирования сложных условий.

**Пример:**
```java
int age = 25;
double salary = 3000.0;
if (age > 18 && salary >= 3000.0) {
    System.out.println("Кредит одобрен.");
} else {
    System.out.println("Кредит не одобрен.");
}
```
Здесь программа проверяет, соответствует ли человек условиям получения кредита (возрасту и зарплате).

### Пример 1: Проверка баланса и статуса счета для совершения транзакции

```java
double accountBalance = 5000.0;
boolean accountIsActive = true;
double amountToWithdraw = 6000.0;

if (accountIsActive && accountBalance >= amountToWithdraw) {
    accountBalance -= amountToWithdraw;
    System.out.println("Транзакция успешно выполнена. Остаток на счете: " + accountBalance);
} else {
    System.out.println("Транзакция не может быть выполнена. Проверьте статус счета и баланс.");
}
```

В этом примере транзакция будет выполнена только если счет активен (`accountIsActive == true`) и на счету достаточно средств (`accountBalance >= amountToWithdraw`).

### Пример 2: Одобрение кредита на основе возраста и ежемесячного дохода

```java
int applicantAge = 30;
double monthlyIncome = 4000.0;

if (applicantAge >= 18 && applicantAge <= 65 && monthlyIncome >= 3000.0) {
    System.out.println("Кредит одобрен.");
} else {
    System.out.println("Кредит не одобрен.");
}
```

Здесь кредит одобряется, если заявитель находится в возрастной категории от 18 до 65 лет и его ежемесячный доход не менее 3000.0.

### Пример 3: Накопление процентов на банковском счете

```java
double accountBalance = 10000.0;
boolean isPremiumAccount = true;

if (accountBalance > 5000.0 || isPremiumAccount) {
    double interestRate = isPremiumAccount ? 0.05 : 0.03; // Больший процент для премиум счетов
    double interest = accountBalance * interestRate;
    accountBalance += interest;
    System.out.println("Проценты начислены. Новый баланс: " + accountBalance);
} else {
    System.out.println("Проценты не начислены. Недостаточный баланс и не премиум счет.");
}
```

В этом примере проценты начисляются, если баланс превышает 5000.0 или если счет является премиум счетом.

### Пример 4: Блокировка счета при подозрительной активности

```java
boolean isAccountActive = true;
int failedLoginAttempts = 3;
boolean isAccountFlaggedForFraud = false;

if (!isAccountActive || failedLoginAttempts > 2 || isAccountFlaggedForFraud) {
    System.out.println("Счет заблокирован.");
} else {
    System.out.println("Счет активен.");
}
```

Здесь счет блокируется, если он не активен, количество неудачных попыток входа превышает две, или счет помечен как подозрительный.
