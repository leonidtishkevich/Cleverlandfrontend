'use strict';

let x = +prompt('Введите натуральное число');


for(let i = 0; i <= x; i++) {
  if(x % i === 0) {
  alert(i); 
  }
}