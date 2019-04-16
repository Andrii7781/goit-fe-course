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

const adminLogin = 'admin';
const adminPassword = 'm4ng0h4ckz';

const messageCancel = 'Отменено пользователем!';
const notEqual = 'Доступ запрещен!';
const messagePassword = 'Введите пароль:';
const welcome = 'Добро пожаловать!';

const userLogin = prompt('Введите логин:', '');

if ( userLogin === null ) {
  alert( messageCancel );
} else if ( userLogin !== adminLogin ) {
  alert( notEqual );
} else if ( userLogin === adminLogin ) {
  const userPassword = prompt ( messagePassword, '' );
    if ( userPassword === null ) {
      alert( messageCancel );
    } else if ( userPassword !== adminPassword ) {
      alert( notEqual );
    } else if ( userPassword === adminPassword ) {
     alert( welcome );
    }
}