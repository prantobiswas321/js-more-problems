// const greet = 'Hello!!! How are you?';
// function reverse(text) {
//     let reverse = '';
//     for (const letter of text) {
//         console.log(letter);
//         reverse = letter + reverse;
//     }
//     return reverse;
// }

// const retext = reverse(greet);
// console.log(retext);

const greet = 'Hello!!! How are you?';
function reverse(text) {
    let reverse = '';
    for (let i = 0; i < text.length; i++) {
        const letter = text[i];
        console.log(letter);
        reverse = letter + reverse;
    }
    return reverse;
}

const retext = reverse(greet);
console.log(retext);