'use strict'

/*
  Напишите скрипт, который выводит через console.log все
  числа от min до max, с двумя исключениями:

    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'

    - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'

  PS: используйте цикл for
*/

const min = 1;
const max = 100;

for ( let i = min; i <= max; i++) {
	if (!(i % 3)) {
		console.log('Fizz');
		continue;
} else if (!(i % 5) && (i % 3)){
	console.log('Buzz')
	continue;
}