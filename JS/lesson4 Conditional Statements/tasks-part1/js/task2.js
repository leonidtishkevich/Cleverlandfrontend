'use strict';

// let num = prompt('Введите число');

// if(num > 0) {
//     alert('Число положительное');
// } else if (num < 0) {
//     alert('Число отрицательное');
// } else {
//     alert('Число равно 0');
// }

let num = prompt('Введите число');

let message = (num > 0) ? 'Число положительное' :
(num < 0) ? 'Число отрицательное' : 
'Число равно 0';

alert(message);
