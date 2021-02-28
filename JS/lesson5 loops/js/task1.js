'use strict';

// task1

// for (let i = 1; i < 10; i++) {
//   alert(`Квадрат ${i} = ${i**2}`);
// }

//task2

// let n = +prompt('Введите число n первых четных чисел');
// let m = 0;

// for(let i = 0; i < n; i++) {
//   m+=2;
//   if(m % 5 === 0) continue;
//   console.log(m); 
// }

//task3



let sum = 0;

while(true) {
  let n = +prompt('Введите числа', '');
  if(!n) break;
  sum += n;
}

alert(sum);