'use strict';

let date = new Date();
let  h = date.getHours();
let nameUser = prompt('Как ваше имя?', '');

switch (h) {
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        alert(`Доброе утро, ${nameUser}!`);
        break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        alert(`Добрый день, ${nameUser}!`);
        break;
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        alert(`Добрый вечер, ${nameUser}!`);
        break; 
    default:
        alert(`Доброй ночи, ${nameUser}!`);      
}
