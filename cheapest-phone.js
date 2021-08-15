const phones = [
    { name: 'samsung s2', price: 45000, camera: 64, storage: 512 },
    { name: 'I phone 12 pro max', price: 120000, camera: 12, storage: 256 },
    { name: 'oppo reno3', price: 35000, camera: 108, storage: 32 },
    { name: 'xiomi note 10', price: 20000, camera: 8, storage: 32 },
    { name: 'realme 8 pro', price: 26000, camera: 8, storage: 32 },
];

// let cheapest = phones[0];
// for (const phone of phones) {
//     if (phone.price < cheapest.price) {
//         cheapest = phone;
//     }
// }
// console.log(cheapest);

let expensive = phones[0];
for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price > expensive.price) {
        expensive = phone;
    }
}
console.log('Expensive phone is:', expensive);