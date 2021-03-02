'use strict';

// function sayAge (age) {
//     if (age > 16) { alert('Добро пожаловать');
//     }
//     else { alert('Вы еще молоды');
//     }
// }

// let userAge;

// while (true) {
//     if ((isNaN)(userAge)) {
//         userAge = +prompt('Введите возраст');
//     } else break;
// }

// sayAge(userAge);


// task3

// function calcMin(a, b, c) {
//     if (a === b || b ===c || a === c) {return;}
//     if (a <= b && a <= c) {
//         return a;
//     } else if (b <= c && b <= a) {
//         return b;
//     }
//     return c;
// }

// function getNum() {
//     let num = +prompt('Введите число');
//     while (true) {
//         if (isNaN(num) || !num) {
//             num = +prompt('Введите число');
//          } else return num;
//     }
// }

// function getThreeNum() {
//     let x = getNum ();
//     let y = getNum ();
//     let z = getNum ();

//     return calcMin(x, y, z);
// }

// let minmin = getThreeNum();

// console.log(minmin);

//task8
function multiply(n, m) {
    return n*m;
}

//task9
function foo(a, b, c) {
    let mul = multiply(a, b);
    return mul**c;
}

console.log (foo(2, 3, 6));