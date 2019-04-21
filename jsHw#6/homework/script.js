// Task 1 Напишите функцию, которая принимает массив случайных чисел (см. задачу 2 в практике) и создаёт на его основе новый.
//Элементы нового массива – объекты вида {initial: num1, sqrt: num2, floor: boolean1, ceil: boolean2}. 
//initial – значение элемента исходного массива с тем же индексом, sqrt – корень квадратный из этого значения. 
//Если округление sqrt по обычным математическим правилам сходится с его округлением через floor, то floor = true, а ceil = false. 
//Если сходится с округлением через ceil - наоборот. Например, пусть у исходного массива arr[0] = 19,тогда в новом массиве newArr[0] = {initial: 19, sqrt: 4.358898943540674, floor: true, ceil: false}.
//Task 2 Добавьте в каждый элемент массива из задачи 1 ещё одно свойство: значение sqrt, округлённое до сотых.
console.log('T   a   s   k   1, 2');

function randomArr(len, min, max) {
    let array = [];
    for (let i = 0 && i >= min; i < len; i++) {
        array[i] = Math.floor(Math.random() * max);  
    } return array;
}
function newArr(array) {
	for (let i = 0; i < array.length; i++) {
    array[i] = {
      initial: array[i],
      sqrt: Math.sqrt(array[i]),
      sqrt1: Math.round(Math.sqrt(array[i]) * 100) / 100,
      floor: Math.round(array[i]) === Math.floor(array[i]),
      ceil: Math.round(array[i]) === Math.ceil(array[i])
    }
  }
  return array;
}
console.log(newArr(randomArr(5, 0, 5)));

//Task 3 Напишите функцию, которая определяет, является ли строка палиндромом.
console.log('____________________________________________');
console.log('T   a   s   k   3');

function isPalindrome(str) {
    var strLen = str.length;
    var result = '';
    for (var i = 0; i < strLen; i++) {
      if (str[i] === str[strLen - 1 - i]) {
        result = 'yes';
      } else {
        result = 'no';
        return result;
      }
    }
    return result;
  }

  console.log(isPalindrome('abcdedcba'));
  console.log(isPalindrome('abcded'));

//Task 4 Напишите функцию, которая принимает строку и возвращает символ, который встречается в ней чаще всего. Если таких символов несколько, функция должна возвращать строку из этих символов.
console.log('____________________________________________');
console.log('T   a   s   k   4');

function duplicateCharacter(str) {
let double = "";
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== str.indexOf(str[i])) {
      double += str[i];
    }
  } return double;
}
console.log(duplicateCharacter("йцуюкенгшщзхъааапролджэююячсми".toLowerCase()));

//Task 5 Напишите функцию, которая получает в аргументы три строки – str, search, replace. Функция ищет ВСЕ вхождения search в str, заменяет каждую подстроку search на подстроку replace и возвращает результат.
console.log('____________________________________________');
console.log('T   a   s   k   5');

function replace(str, search, replace) {
	while( str.indexOf(search) > -1) {
		str = str.replace(search, replace);
	}
	return str;
}
console.log(replace("Что-нибудь", "нибудь", "то"));
//Task 6 Напишите функцию, которая замяняет первую букву каждого слова в строке на такую же большую.
console.log('____________________________________________');
console.log('T   a   s   k   6');

function capitalLetter(str){
	let res = "";
	for (let i = 0; i < str.length; i++) {
		if (i == 0 || str.charAt(i) !== " " && str.charAt(i - 1) == " ") {
			res += str[i].toUpperCase();
		} else {
			res += str.charAt(i);
		}
 }
 return res;
}
console.log(capitalLetter("все слова с большой буквы"));

//Task 7 Напишите функцию, которая заменяет все повторяющиеся символы в строке на звёздочки. Например, строка "я учусь программированию" должна преобразоваться в "я уч*сь прог*ам*и**в*н*ю".
console.log('____________________________________________');
console.log('T   a   s   k   7');

function insertingStars(str) {
	for (let i = 0; i < str.length - 1; i++) {
		for (let j = i + 1; j < str.length; j++) {
			if (str[i] === str[j] && str[j] != "*" && str[j] != " ") {
				str = str.slice(0, j) + "*" + str.slice(j + 1, str.length);
			}
		}
	}
	return str;
}
console.log(insertingStars("я учусь программированию"));

//Task 8 Напишите функцию, которая возвращает текущий день недели на русском языке.
console.log('____________________________________________');
console.log('T   a   s   k   8');

function getWeekDay(){
	var day = new Date();
	var numberOfDay = day.getDay();

	switch (numberOfDay){
		case 1: 
			console.log('Понедельник');
			break;
		case 2: 
			console.log('Вторник');
			break;
		case 3: 
			console.log('Среда');
			break;
		case 4: 
			console.log('Четверг');
			break;
		case 5: 
			console.log('Пятница');
			break;
		case 6:
			console.log('Суббота');
			break;
		case 0: 
			console.log('Воскресенье');
			break;
	}
}
getWeekDay();

//Task 9 Напишите функцию, которая принимает у пользователя дату в формате "ДД-ММ-ГГГГ" и, используя функцию из задачи 8, выдаёт в консоль день недели для этой даты.
console.log('____________________________________________');
console.log('T   a   s   k   9');

function whatDay() {
	let userDate = prompt("Введите дату dd-mm-yyyy");
	let getDate = new Date(+userDate.slice(6, 10), +userDate.slice(3, 5) - 1, +userDate.slice(0, 2));
    let day = getDate.getDay();
    switch (day){
		case 1: 
			console.log('Понедельник');
			break;
		case 2: 
			console.log('Вторник');
			break;
		case 3: 
			console.log('Среда');
			break;
		case 4: 
			console.log('Четверг');
			break;
		case 5: 
			console.log('Пятница');
			break;
		case 6:
			console.log('Суббота');
			break;
		case 0: 
			console.log('Воскресенье');
			break;
	}
}
whatDay();

//Task 10 Примите у пользователя день его рождения в формате "ДД-ММ-ГГГГ". Напишите функцию, которая выводит в консоль количество дней, оставшихся до его дня рождения.
//Напишите функцию, которая возвращает дату, в которую пользователь отметит ближайший 1000-дневный юбилей (например, 11000 дней).
console.log('____________________________________________');
console.log('T   a   s   k   10');

function theDaysQuantity() {
	let userDate = prompt("Введите день рождения dd-mm-yyyy");
	let first = new Date(+userDate.slice(6, 10), +userDate.slice(3, 5) - 1, +userDate.slice(0, 2));
	let second = new Date();
	var third = new Date(second.getFullYear(), +userDate.slice(3, 5) - 1, +userDate.slice(0, 2));
	let before = Math.round((third - second) / 1000 / 60 / 60 / 24);
	console.log(before + " дней осталось до ближайшего дня рождения");
	let celebration = Math.round((second - first) / 1000 / 3600 / 24 / 365);
	let a = Math.round(100 - celebration);
	console.log(a + " лет осталось до 100-летнего юбилея");
}
theDaysQuantity();

//Task 11 Напишите функцию, которая принимает число, проверяет, является ли оно квадратом целого числа. Если это так, функция возвращает квадратный корень исходного числа; в ином случае генерирует ошибку.
//Используя задачу 2 из практики, создайте массив целых чисел. Вызовите написанную функцию для каждого элемента, отлавливая ошибки и выводя в консоль сообщения и о них, и об успешных результатах.
//Массив должен быть пройден до конца, несмотря на ошибки!
console.log('____________________________________________');
console.log('T   a   s   k   11');

function sqrt(n) {
	try {
		if (Math.sqrt(n) == Math.round(Math.sqrt(n))) {
			console.log(Math.sqrt(n));
		} else {
			throw new Error("Из "+ n + " нет корней");
		}
	} catch (e) {
		console.log(e.message);
	}
}
sqrt();
function getRandomArray(len, min, max) {
    let array = [];
    for (let i = 0 && i >= min; i < len; i++) {
        array[i] = Math.floor(Math.random() * max);  
    } console.log(array);
    for (let i = 0; i < array.length; i++) {
    	array[i] = sqrt(array[i]);
    }
}
getRandomArray(7, 1, 7);