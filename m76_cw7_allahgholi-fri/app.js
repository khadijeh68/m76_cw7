//Ex.1
// Use destructuring assignment with the rest
//  parameter sub-array of the original array source with
//   the first two elements omitted

// function omitted(array){
//     let [ , ,...rest] = array;
//     console.log(rest);
// }
// omitted([1,2,3,4,5]);

//Ex.2
// Keyboard Mistakes Find
// Examples
// keyboardMistakes("MUB45H1R") ➞ "MUBASHIR"
// keyboardMistakes("DUBL1N") ➞ "DUBLIN"
// 4-->A
// 5--->S
// 0--->O
// 1--->I
// function keyboardMistakes(str) {
//     let splittedStr= [...str];
//     let res = '';
//     // splittedStr.map(item => {
//     //     if (item === '4'){
//     //     res += 'A';
//     //     }else if (item === '5'){
//     //     res += 'S';
//     //     }else if (item === '0'){
//     //     res += 'O';
//     //     }else if (item === '1'){
//     //     res += 'I';
//     //     }else{
//     //     res += item;
//     //     }
//     //     })
//     // console.log(res);
//     }
// keyboardMistakes("MUB45H1R")
// function keyboardMistakes(res) {
//     res = res.replace("4", "A");
//     res = res.replace("5", "S");
//     res = res.replace("0", "O");
//     res = res.replace("1", "I");
//     console.log(res);
//     }
//     keyboardMistakes("MUB45H1R")

//EX.3
// Create a function that takes an array arr of numbers and moves all zeros to the end,
// preserving the order of the other elements.
// moveZeros([1, 0, 1, 2, 0, 1, 3]) ➞ [1, 1, 2, 1, 3, 0, 0]
// moveZeros([0, 1, null, 2, false, 1, 0]) ➞ [1, null, 2, false, 1, 0, 0]
// function moveZeros(array){
//     let res = [];
//     let zeros = [];
//     array.map(item => {
//         if (item === 0){
//             zeros.push(item);
//         }else if (item != 0){
//             res.push(item);
//         }
//     });
//     res.push(...zeros);
//     return res;
// }
// console.log(moveZeros([0, 1, null, 2, false, 1, 0]));

//Ex.4
// :In this challenge, you have to implement a function that returns the given distance
//  kilometers converted into miles. You have to round the result up to the fifth decimal digit.
// Examples
// kmtomiles(2) ➞ 1.24274
// kmtomiles(6) ➞ 3.72823
// kmtomiles(8) ➞ 4.97097
// function kmtomiles(number){
//     let miles = 0.62137;
//     number = number * miles;
//     return number.toFixed(5);
// }
// console.log(kmtomiles(2));

//Ex.5
// Create a function that returns the original value from a matrix with too many sub-arrays.
// Examples
// deNest([[[[[[[[[[[[3]]]]]]]]]]]]) ➞ 3
// deNest([[[[[[[true]]]]]]]) ➞ true
// deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]]) ➞ "edabit"
// function deNest(array){
//    array = array.flat(Infinity);
//    console.log(array[0]);
// }
// deNest([[[[[[[true]]]]]]]);

// Create a function based on the input and output. Look at the examples, there is a pattern.
// Examples
// secret("div*2") ➞ "<div></div><div></div>"
// secret("p*1") ➞ "<p></p>"
// secret("li*3") ➞ "<li></li><li></li><li></li>"
//Ex.6
function pattern1(string) {
    string = string.split('*');
    console.log(string);
    let num = +string[1];
    let stringRes = '';
    for (let i = 0; i < num ; i++){
        stringRes += '<' + string[0] + '>' + '</' + string[0] + '>';
    }

    console.log(stringRes);
    }
    pattern1("div*2");