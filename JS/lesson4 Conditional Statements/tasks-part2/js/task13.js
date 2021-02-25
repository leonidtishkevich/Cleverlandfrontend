'use strict';

let dayNumber = prompt('Введите день недели:', 'понедельник');

switch (dayNumber) {
    case 'понедельник':
        alert('1, 8, 15, 22, 29');
        break;
    case 'вторник':
        alert('2, 9, 16, 23, 30');
        break;
    case 'среда':
        alert('3, 10, 17, 24');
        break;
    case 'четверг':
        alert('4, 11, 18, 25');
        break;
    case 'пятница':
        alert('5, 12, 19, 26');
        break;
    case 'суббота':
        alert('6, 13, 20, 27');
        break;
    case 'воскресенье':
        alert('7, 14, 21, 28');
        break;    
    default:
        alert('Нет таких значений');      
}
