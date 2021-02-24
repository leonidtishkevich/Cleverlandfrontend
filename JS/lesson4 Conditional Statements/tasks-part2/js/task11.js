'use strict';

let num = +prompt('Введите целое число от 1 до 5:');

switch (num) {
    case 1:
        alert('плохо');
        break;
    case 2:
        alert('неудовлетворительно');
        break;
    case 3:
        alert('удовлетворительно');
        break; 
    case 4:
        alert('хорошо');
        break;
    case 5:
        alert('отлично');
        break;
    default:
        alert('Нет таких значений');      
}
