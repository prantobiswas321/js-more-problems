// const names = ['abul', 'babul', 'cabul', 'gabul', 'kabul', 'babul', 'ebul', 'abul', 'rabul', 'cabul'];
// function duplicate(name) {
//     const uniqueName = [];
//     for (let i = 0; i < name.length; i++) {
//         const element = name[i];
//         if (uniqueName.indexOf(element) == -1) {
//             uniqueName.push(element);
//         }
//         else {
//             console.log(uniqueName.indexOf(element), element);
//         }
//     }
//     return uniqueName;
// }

// const qName = duplicate(names);
// console.log(qName);

const names = ['abul', 'babul', 'cabul', 'gabul', 'kabul', 'babul', 'ebul', 'abul', 'rabul', 'cabul'];
function duplicate(name) {
    const uniqueName = [];
    for (const element of name) {
        if (uniqueName.indexOf(element) == -1) {
            uniqueName.push(element);
        }
        else {
            console.log(uniqueName.indexOf(element), element);
        }
    }
    return uniqueName;
}

const qName = duplicate(names);
console.log(qName);