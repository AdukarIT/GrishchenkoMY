// Task 1 Создайте функцию, которая принимает три числа: два первых должны быть длиной сторон катетов прямоугольного треугольника,
//а третье – длиной гипотенузы. Функция возвращает true, если такой прямоугольный треугольник возможен, и false, если нет.

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

function repeatStr(str, n) {
	for (i = 1; i <= n; i++) {
		console.log(str);
	}
}

repeatStr("empty", 2);

//Task 3 Создайте функцию, которая принимает два аргумента – количество учеников в классе и количество парт в кабинете.
//Функция возвращает строку вида «не хватает 2 парт» / «1 лишняя парта».


//Task 4 Создайте функцию, которая получает в качестве аргумента оценку по 10-балльной шкале.
//Для ошибочных аргументов (0, «B») функция возвращает текстовую ошибку, для верных – их текстовое описание: https://en.wikipedia.org/wiki/Academic_grading_in_Belarus

let mark;

function grade(mark) {
	switch(mark) {
		case 1:
		case 2:
			return 'label: Unsatisfactory, level: Low'
		break;

		case 3:
		case 4:
			return 'label: Satisfactory, level: Satisfactory'
		break;

		case 5:
			return 'label: Almost good, level: Average'
		break;

		case 6:
			return 'label: Good, level: Average'
		break;

		case 7:
			return 'label: Very good, level: Good'
		break;

		case 8:
			return 'label: Almost excellent, level: Good'
		break;

		case 9:
			return 'label: Excellent, level: High'
		break;

		case 10:
			return 'label: Brilliant, level: High'
		break;

		default:
			return 'err'
	}
}
	console.log(grade(7));