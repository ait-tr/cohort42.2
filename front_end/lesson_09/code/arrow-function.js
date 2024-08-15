// simple function

function sum( a,b){
    return a+b;
}
console.log(sum(20,10));// 30

// Arrow function
const sum2 = (a,b) =>{
    return a+b;
}
const sum3 = (a,b) => a+b;
const res = sum3(10,20);
console.log(res);

function calculate(a,b,operation){
    return operation(a,b)
}
function subtract(a,b){
    return a-b;
}
calculate(9,3,subtract)// 6
calculate(9,3,(a,b)=>a/b);//3


// Эта функция calculate принимает три параметра: a, b и operation.
// a и b — это числа, которые будут участвовать в операции.
// operation — это функция, которая принимает два аргумента
// (в данном случае a и b) и выполняет с ними какое-то действие.

// calculate ожидает, что в качестве третьего аргумента
// будет передана функция (например, сложение, вычитание и т.д.).

// Затем функция calculate вызывает переданную функцию operation,
// передавая ей значения a и b в качестве аргументов.

// Результат выполнения функции operation возвращается
// как результат выполнения функции calculate.

console.log(calculate(9, 3, (a, b) => a / b));