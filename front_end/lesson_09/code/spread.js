// ...

const fruits = ["apple"," orange"," mango"]
const fruits2 = fruits;
console.log(fruits2);


const cars = ["Mercedes","Lada","Tesla","Opel"];
//spread

const carsCopy = [...cars];
carsCopy[0]= "Porsche";
console.log(cars)
console.log(carsCopy);

const cities1 = ["Koeln","New York"];
const cities2 = ["London","Paris"];
const joinedCities = [...cities1, ...cities2];
console.log(joinedCities)

const vegitables = ['cucumber', "tomato"];
const newVegitables = [...vegitables, "carrot"];
console.log(newVegitables);
