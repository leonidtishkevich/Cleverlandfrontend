'use strict';

let date = new Date();
let  h = date.getHours();
let nameUser = prompt('Как ваше имя?', '');

let message = (h < 12) ? `Доброе утро, ${nameUser}!` :
  (12 <= h <= 18) ? `Добрый день, ${nameUser}!` :
  (h > 18) ? `Добрый вечер, ${nameUser}!` :
  `Доброй ночи, ${nameUser}!`;

alert(message);
