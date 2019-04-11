// Task 1 Создайте функцию, которая принимает три числа: два первых должны быть длиной сторон катетов прямоугольного треугольника,
//а третье – длиной гипотенузы. Функция возвращает true, если такой прямоугольный треугольник возможен, и false, если нет.
console.log('T   a   s   k   1');

function isItTriangle(x, y, z) {
	if (x <= 0 || y <= 0 || z <= 0) 
		return false;
	return (x*x + y*y == z*z);
}

let x = 3;
let y = 4;
let z = 5;

if (isItTriangle(x, y, z)) {
	console.log('Треугольник прямоугольный');
} else {
	console.log('Треугольник не очень');
}

//Task 2 Создайте функцию repeat(str, n), которая возвращает строку, состоящую из n повторений строки str. По умолчанию n=2, str — пустая строка.
console.log('____________________________________________');
console.log('T   a   s   k   2');

function repeatStr(str, n) {
	for (i = 1; i <= n; i++) {
		console.log(str);
	}
}

repeatStr("empty", 2);

//Task 3 Создайте функцию, которая принимает два аргумента – количество учеников в классе и количество парт в кабинете.
//Функция возвращает строку вида «не хватает 2 парт» / «1 лишняя парта».
console.log('____________________________________________');
console.log('T   a   s   k   3');

function studsDesks(realStuds, desks) {
let moreDesks;
let oddDesks;
let studs = Math.round(realStuds / 2);

	if (studs == desks) {
		console.log('парт хватает');
	} else if (studs > desks) {
		moreDesks = studs - desks;
		console.log('не хватает ' + moreDesks + ' парт');
	} else if (studs < desks) {
		oddDesks = desks - studs;
		console.log(oddDesks + ' лишние парты');
	}
}

studsDesks(15, 6);
studsDesks(3, 3);


//Task 4 Создайте функцию, которая получает в качестве аргумента оценку по 10-балльной шкале.
//Для ошибочных аргументов (0, «B») функция возвращает текстовую ошибку, для верных – их текстовое описание: https://en.wikipedia.org/wiki/Academic_grading_in_Belarus
console.log('____________________________________________');
console.log('T   a   s   k   4');

let mark;

function grade(mark) {
	switch(mark) {
		case 1:
		case 2:
			return 'label: Unsatisfactory, level: Low';
		break;

		case 3:
		case 4:
			return 'label: Satisfactory, level: Satisfactory';
		break;

		case 5:
			return 'label: Almost good, level: Average';
		break;

		case 6:
			return 'label: Good, level: Average';
		break;

		case 7:
			return 'label: Very good, level: Good';
		break;

		case 8:
			return 'label: Almost excellent, level: Good';
		break;

		case 9:
			return 'label: Excellent, level: High';
		break;

		case 10:
			return 'label: Brilliant, level: High';
		break;

		default:
			return 'err';
	}
}
	console.log(grade(7));


//Task 5 Используя цикл do..while, создайте функцию, которая принимает числа через prompt(), пока не будет введено число 0.
console.log('____________________________________________');
console.log('T   a   s   k   5');

/*let num;
function numZero(num) {
	do { 
		num = +prompt('Введите число');
	} while (num != 0);
	console.log('Введено число 0');
}
numZero(num);*/

//Task 6 Перепишите функцию из задачи 5 так, чтобы она принимала числа, пока их сумма остаётся меньше 100, выводила эту сумму в консоль,
//а возвращала количество введённых чисел.
console.log('____________________________________________');
console.log('T   a   s   k   6');

/*function sumOfNums() {
	let sum = 0;
	let count = 0;
	do { 
		count++;
		m = +prompt('Введите число');
		sum += m;
	} while (sum < 100);
	console.log(sum, count);
	return count;
}
sumOfNums();*/

//Task 7 Создайте функцию, которая принимает число в качестве аргумента и проверяет, является ли это число простым.
console.log('____________________________________________'); 
console.log('T   a   s   k   7');

function numSimpleCheck(x) {
	for (i = 2; i < x; i++) {
		let y = 1;
		if (x % y == 0 && x % i !== 0) {
			console.log('Число простое');
			return;                       
		} else {
			console.log('Число не простое');
			return;
		}
	}
}
numSimpleCheck(119);

//Task 8 Создайте функцию, которая принимает в качестве аргумента целое число, соответствующее порядковому номеру месяца.
//Если месяц с таким номером существует, функция возвращает имя сезона (лето, осень, зима, весна), к которому относится месяц. Если нет –сообщение об ошибке.
console.log('____________________________________________'); 
console.log('T   a   s   k   8');

function nameOfSeason(monthNumber) {
	switch (monthNumber){
		case 12:
		case 1:
		case 2:
			return 'Winter';
			break;
		case 3:
		case 4:
		case 5:
			return 'Spring';
			break;
		case 6:
		case 7:
		case 8:
			return 'Summer';
			break;
		case 9:
		case 10:
		case 11:
			return 'Autumn';
			break;
		default:
			return 'Error';
	}
}

console.log(nameOfSeason(11));

//Task 9 Создайте функцию, которая выводит в консоль числа от 10 до 99, заканчивающиеся на 7 или делящиеся на 7 (в убывающем порядке).
console.log('____________________________________________'); 
console.log('T   a   s   k   9');

function someNums() {
	for (i = 99; i >= 10; i--) {
		if (i % 7 == 0 || i % 10 == 7) {
			console.log(i);
		}
	}
}
someNums();

//Task 10 Создайте функцию, которая для чисел от 2 до 20 выводит в консоль все их делители.
console.log('____________________________________________'); 
console.log('T   a   s   k   10');

function getDividers() {
   for (i = 2; i <= 20; i++) {
     for (j = 1; j <= 20; j++) {
       if (!(i % j)) {
         console.log(j);
       }
     }
     console.log("↑ делители числа " + i);
   }
 }
 getDividers();

//Task 11 Решите задачу 10 в общем виде: вместо 2 и 20 – аргументы x и y.
console.log('____________________________________________'); 
console.log('T   a   s   k   11');

function getThisDividers(firstValue, secondValue) {
   if (firstValue < 2 || secondValue > 20){
      return console.log("Ошибка");
   }
   for (i = firstValue; i <= secondValue; i++) {
     for (j = 1; j <= secondValue; j++) {
       if (!(i % j)) {
         console.log(j);
       }
     }
     console.log("↑ делители числа " + i);
   }
 }
 getThisDividers(4,7);

//Task 12 Создайте функцию с параметрами size (число) и unit (строка). В unit передаются единицы измерения информации («Кб», «Мб», «Гб»), в size – количество таких единиц.
//Функция возвращает количество байт в size.
console.log('____________________________________________'); 
console.log('T   a   s   k   12');

function bytesInfo(size, unit) {
	switch (unit) {
		case 'Кб':
			return 'В ' + size + ' Кб - ' + size * 1024 + ' байт';
			break;
		case 'Мб':
			return 'В ' + size + ' Мб - ' + size * 1048576 + ' байт';
			break;
		case 'Гб':
			return 'В ' + size + ' Гб - ' + size * 1073741824 + ' байт';
			break;
		default:
			return 'Error';
	}

}
console.log(bytesInfo(150, 'Гб'));

//Task 13 Создайте функцию, которая ищет наибольший общий делитель двух чисел.
console.log('____________________________________________'); 
console.log('T   a   s   k   13');

function NOD(numFirst, numSecond) {
  if(numSecond > 0) { 
    var f = numFirst% numSecond;
    return nod(numSecond, f); 
  } 
  else { 
    return abs(numFirst);  
  }
}
console.log(NOD(72, 48));

//Task 14 Решите задачу 13 через рекурсию.
console.log('____________________________________________'); 
console.log('T   a   s   k   14');

function NOD(numFirst, numSecond) {
	if (numSecond > numFirst) return NOD(numSecond, numFirst);
	if (!numSecond) return numFirst;
	return NOD(numSecond, numFirst % numSecond);
}
console.log(NOD(72, 48));

//Task 15 Создайте функцию words(),  которая в зависимости от переданного в нее целого числа n, будет выводить слово «карандаш» в правильной форме («12 карандашей», но «22 карандаша»).
console.log('____________________________________________'); 
console.log('T   a   s   k   15');

function words(quantity) {
	if (quantity == 1 || quantity % 10 == 1 && quantity !== 11) {
		return quantity + ' карандаш';
	} else if (quantity > 1 && quantity < 5 || quantity % 10 == 2 && quantity !== 12 || quantity % 10 == 3 && quantity !== 13 || quantity % 10 == 4 && quantity !== 14 || !(quantity > 10) && !(quantity < 21)) {
		return quantity + ' карандаша';
	} else {
		return quantity + ' карандашей';
	}
}
console.log(words(12));
console.log(words(22));

/*function words() {
for (i = 0; i <= 100; i++) {
	if (i == 1 || i % 10 == 1 && i !== 11) {
		console.log(i + ' карандаш');
	} else if (i > 1 && i < 5 || i % 10 == 2 && i !== 12 || i % 10 == 3 && i !== 13 || i % 10 == 4 && i !== 14 || !(i > 10) && !(i < 21)) {
		console.log(i + ' карандаша');
	} else {
		console.log(i + ' карандашей');
	}
}
}
words();*/

//Task 16 Создайте функцию, которая проверяет, можно ли представить число в виде суммы квадратов двух целых однозначных чисел.
console.log('____________________________________________'); 
console.log('T   a   s   k   16');

function sumSquares(digit) {
	for (let i = 1; i < 10; i++) {
		for (let j = 1; j < 10; j++) {
			let frstN = i * i;
			let scndN = j * j;
			if (digit == frstN + scndN) {
 				return digit + ' = ' + frstN + ' + ' + scndN;
			}
		}
	}
}
console.log(sumSquares(10));