'use strict';

let x = prompt('Введите число x');
let y = prompt('Введите число y');
let z = prompt('Введите число z');

if(x >= y && x >= z) {
    alert(x);
} else if (y >= x && y >= z) {
    alert(y);
} else {
    alert(z);
}
