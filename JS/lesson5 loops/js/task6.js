'use strict';

let n = +prompt('Введите натуральное число');

for(let i = 10; i < 100; i++) {
  if((Math.floor(i / 10) + (i % 10)) % n === 0) {
  alert(i); 
  }
}