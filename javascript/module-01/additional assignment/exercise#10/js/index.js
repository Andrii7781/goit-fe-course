'use strict'

/*
  Создайте срипт поиска отелей, где пользователь
  с помощью prompt должен ввести число от 1 до 5

  Проверить что пользователь ввел именно цифру от 1 до 5

  Если пользователь нажал Cancel, то вывести
  alert с текстом 'очень жаль, приходите еще!'

  Если было введено что либо кроме чисел 1-5,
  вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'

  Если же пользовател ввел валидное число,
  в зависимости от числа, используя switch,
  вывести alert с одной из строк:

    1 - "Каталог хостелов"
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/

const numberHotel = prompt('Какой отель ищете? (1-5): ', '');
const hotelOne = 'Каталог хостелов';
const hotelTwo = 'Каталог бюджетных отелей';
const hotelThree = 'Каталог отелей ***';
const hotelFour = 'Каталог отелей ****';
const hotelFive = 'Каталог лучших отелей';

if (numberHotel === null) {
	alert('Очень жаль, приходите еще!');
} else if (parseInt(numberHotel) !== Number(numberHotel) || Number(numberHotel) === 0 || Number(numberHotel) > 5 || Number(numberHotel) < 0) {
	alert('Неверный ввод, возможные варианты 1-5!');
}

switch (numberHotel) {
	case '1':
		alert(hotelOne);
		break;
	case '2':
		alert(hotelTwo);
		break;
	case '3':
		alert(hotelThree);
		break;
	case '4':
		alert(hotelFour);
		break;
	case '5':
		alert(hotelFive);
		break;
}