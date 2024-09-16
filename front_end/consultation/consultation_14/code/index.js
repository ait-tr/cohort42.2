//глубокое копирование массива и объекта
const getDeepClone = (obj) => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  //проверка: является ли переданный аргумент массивом
  if (Array.isArray(obj)) {
    const arrCopy = [];
    for (let item of obj) {
      arrCopy.push(getDeepClone(item));
    }

    return arrCopy;
  }

  //копирование объекта
  const objCopy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      objCopy[key] = getDeepClone(obj[key]); //objCopy.name = 'Tom'
    }
  }

  return objCopy;
};

// {
//   name: 'Tom'
//   age: 23
// }

//баг оператора typeof, так как здесь он вернёт object
// console.log(typeof null);

//проверка
const original = { a: 1, b: { c: 2 }, d: [3, 4] };
const copy = getDeepClone(original);
console.log(copy);
copy.b.c = 3;
console.log(copy);
console.log(original);
