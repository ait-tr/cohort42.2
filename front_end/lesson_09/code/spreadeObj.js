// Spread object

const user = {
    name:"Igor"
};
const userWithEmail = {...user, email:"example@mail.com"};
console.log(userWithEmail); // { name: 'Igor', email: 'example@mail.com' }
