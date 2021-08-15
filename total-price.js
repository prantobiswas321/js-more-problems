// const products = [
//     { name: 'laptop', price: 90000 },
//     { name: 'shirt', price: 600 },
//     { name: 'watch', price: 1200 },
//     { name: 'mobile', price: 55000 },
// ];

// let totalPrice = 0;
// for (const product of products) {
//     totalPrice = totalPrice + product.price;
// }
// console.log(totalPrice);

const cart = [
    { name: 'laptop', price: 90000, quantity: 1 },
    { name: 'shirt', price: 600, quantity: 8 },
    { name: 'watch', price: 1200, quantity: 3 },
    { name: 'mobile', price: 55000, quantity: 1 },
];
let totalPrice = 0;
for (const product of cart) {
    const price = product.price * product.quantity;
    totalPrice = totalPrice + price;
}
console.log(totalPrice);