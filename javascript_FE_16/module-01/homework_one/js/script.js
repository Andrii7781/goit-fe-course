/*
  Напиши скрипт имитирующий авторизацию администратора в панели управления.

Есть переменная message в которую будет записано сообщение о результате.
При загрузке страницы у посетителя запрашивается пароль через prompt:

      Если нажали Cancel, записать в message строку 'Отменено пользователем!'

      В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD,
      записать в message строку 'Добро пожаловать!'

      В противном случае, то есть если ни одно из предыдущих условий не выполнилось,
      записать в message строку 'Доступ запрещен, неверный пароль!'

      После всех проверок вывести в alert значение переменной message.

const ADMIN_PASSWORD = 'm4ng0h4ckz';
let message;
*/

'use strict'

const adminPassword = 'm4ng0h4ckz';

let message;
const messageCancel = 'Отменено пользователем!';
const welcome = 'Добро пожаловать!';
const notEqual = 'Доступ запрещен, неверный пароль';

const userPassword = prompt('Введите логин администратора:', '');

if ( userPassword === null ) {
  message = messageCancel ;
} else if ( userPassword === adminPassword ) {
  message = welcome;
} else {
  message = notEqual
}

alert(message);