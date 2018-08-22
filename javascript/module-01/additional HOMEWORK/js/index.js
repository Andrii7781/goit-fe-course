/*
  ⚠️ ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ

  Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
  Кол-во мест в группах ограничено (создайте переменные для хранения мест в группах):
    * sharm - 15
    * hurgada - 25
    * taba - 6.
  Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
  результат сохранить в переменную.
  Необходимо проверить являются ли введенные данные целым положительным числом.

    - В случае неверного ввода от пользователя, скрипт показывает alert с текстом
      "Ошибка ввода" и больше ничего не делает.
    - В случае верного ввода, последовательно проверить кол-во мест в группах,
      и кол-во необходимых мест введенных пользователем.
  Если была найдена группа в которой количество мест больше либо равно необходимому,
  вывести сообщение через confirm, что есть место в группе такой-то, согласен ли
  пользоваетель быть в этой группе?
    * Если ответ да, показать alert с текстом 'Приятного путешествия в группе <имя группы>'
    * Если ответ нет, показать alert с текстом 'Нам очень жаль, приходите еще!'

  Если мест нигде нет, показать alert с сообщением 'Извините, столько мест нет ни в одной группе!'
*/

'use strict'

const travelTaba = 'Taba';
const travelSharm = 'Sharm';
const travelHurgada = 'Hurgada';

const numberSeatsTaba = 6;
const numberSeatsSharm = 15;
const numberSeatsHurgada = 25;

const userNumberSeats = prompt('Введите количество необходимых посадочных мест:', '');
let userMasseg;

if (userNumberSeats === null || userNumberSeats <= 0 ||
  parseInt(userNumberSeats) !== Number(userNumberSeats)) {
  alert('Ошибка ввода');
} else if (userNumberSeats >=1 && userNumberSeats <=25) {
  userMasseg = confirm(`Согласны ли Вы ехать в группе ${travelHurgada}`);
    if (userMasseg === true) {
      alert(`Приятного путешествия в группе ${travelHurgada}`);
    } else if (userMasseg === false && userNumberSeats >=1 && userNumberSeats <=15) {
      userMasseg = confirm(`Согласны ли Вы ехать в группе ${travelSharm}`);
        if (userMasseg === true) {
          alert(`Приятного путешествия в группе ${travelSharm}`);
        } else if (userMasseg === false && userNumberSeats >= 1 && userNumberSeats <= 6) {
          userMasseg = confirm(`Согласны ли Вы ехать в группе ${travelTaba}`);
            if (userMasseg === true) {
              alert(`Приятного путешествия в группе ${travelTaba}`);
            } else if (userMasseg === false) {
              alert('Нам очень жаль, приходите еще!');
            }
        } else if (userMasseg === false) {
          alert('Нам очень жаль, приходите еще!');
        }
    } else if (userMasseg === false) {
      alert('Нам очень жаль, приходите еще!');
    }
}