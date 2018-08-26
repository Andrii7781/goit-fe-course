'use strict'

/*
  Попросить пользователя ввести произвольную строку
  и записать ее в переменную string

  PS: для перебора массива используте цикл for или for...of
*/

const string = prompt('Введите произвольную строку:', '');
let arr;

// Разбить строку в массив, пусть разделителем будет пробел, и записать в переменную arr
arr = string.split (" ");
console.log(arr);

// Вывести в консоли общую длину массива arr
console.log(arr.length);

// Используя цикл, выletти в консоль все индексы массива arr
for ( let item of arr ) {
	console.log(arr.indexOf(item));
}
console.log();

// Используя цикл, вывести в консоль все элементы массива arr
for ( let item of arr ) {
console.log(item);
}

// Используя цикл, bывести в консоли все пары индекс:значение массива arr
for ( let item of arr ) {
	console.log(`${arr.indexOf(item)}:${item}`);
}
