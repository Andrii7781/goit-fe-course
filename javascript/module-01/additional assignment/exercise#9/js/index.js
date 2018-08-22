'use strict'

/*
  Время состоит из:
    часов(hours)
    минут (minutes)
    секунд(seconds).

  Время должно всегда выводиться в формате xx:xx:xx
  Например: 01:12:04 или 14:03:45

  Составляющие времени не гарантированно состоят из 2-х цифр!

  Напишите скрипт который проверяет каждую составляющую,
  тоесть значения переменных hours, minutes, seconds
  и добавлят впереди 0 если необходимо.
*/

let hours = 6;
let minutes = 2;
let seconds = 59;

let time;

if ( hours < 10 ) {
	hours = '0' + hours;
}

if (minutes < 10) {
	minutes = '0' + minutes;
}

if (seconds < 10) {
	seconds = '0' + seconds;
}

time = `${hours}:${minutes}:${seconds}`;

if ( hours > 24 ) {
	time = false;
}

if ( minutes >= 60 || seconds >= 60 ) {
	time = false;
}

console.log('Time is: ', time);