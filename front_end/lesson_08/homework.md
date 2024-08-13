## Задание 1. Явное преобразование типов

```
/* to string */
console.log('17 to string is ');
console.log('-17.17 to string is ');
console.log('false to string is ');
console.log('null to string is ');
console.log('undefined to string is ');
console.log('0 to string is ');

/* to number */
console.log("'17' to number is ");
console.log('true to number is ');
console.log('false to number is ');
console.log('null to number is ');
console.log('undefined to number is ');
console.log("'   20   ' to number is ");
console.log("'      ' to number is ");
console.log("'   30d   ' to number is ");

/* to boolean */
console.log('null to boolean is ');
console.log('undefined to boolean is ');
console.log('0 to boolean is ');
console.log('-0 to boolean is ');
console.log('NaN to boolean is ');
console.log("'' to boolean is ");
console.log("' ' to boolean is ");
console.log('17 to boolean is ');
console.log("'Hello' to boolean is ");
```

Преобразуйте следующие значения к строке или числу или
логическому значению и выведите в консоль результат, пример:
```
console.log('-17.17 to string is ' + String(-17.17));)
```
Изучите результаты.

## Задание 2. Операторы сравнения

```
const a = 17;
const b = 5;
a > b;
a <= b;
a == b;
a != b;

'a' < 'b';
'ab' > 'a';


'17' > 1;

17 === 1;
17 === 17;
17 === '17';
17 === true;
'0' === '';
true === false;
true === true;
null === undefined;
false === 0;

17 == '17';
'0' == '';
0 == '';
null == undefined;
false == 0;

undefined == null;
undefined == 0;
null == 0;
undefined < 0;
undefined > 0;
```

Выведите в консоль результаты этих выражений.
Изучите результаты.
