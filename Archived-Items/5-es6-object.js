// Object property shorthand:
const name = 'Dean';
const age = 42;

const user = {
    name,
    age,
    location: 'Saint George'
}

console.log(user);


// Destructuring:
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {price, stock} = product

product.price = 10;
console.log(price);
console.log(stock);

const transaction = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock);
}

transaction('order', product);
transaction('order');