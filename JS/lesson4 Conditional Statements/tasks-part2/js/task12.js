'use strict';

let N = +prompt('Введите номер единицы длины: 1 – дециметр, 2 – километр, 3 – метр, 4 – миллиметр, 5 – сантиметр');
let L = +prompt('Введите длину отрезка:');

switch (N) {
    case 1:
        alert(L / 10 + ' метров');
        break;
    case 2:
        alert(L * 1000 + ' метров');
        break;
    case 3:
        alert(L + ' метров');
        break; 
    case 4:
        alert(L / 1000 + ' метров');
        break;
    case 5:
        alert(L / 100 + ' метров');
        break;
    default:
        alert('Нет таких значений');      
}
