//Task 1 Создайте функцию, которая получает в качестве аргументов три числа и возвращает наименьшее из них.

function smallestNum(a, b, c) {
	if (a < b && b < c) {
		return a;
	} else if (b < a) {
		return b;
	} else {
		return c;
	}
}
console.log(smallestNum(245, 443, 789));


//Task 2 Создайте функцию, которая получает в качестве аргументов значения суток, часов и минут, а возвращает соответствующее им количество секунд.

function timeSec(day, hour, minutes) {
	let secDay;
	let secHour;
	let secMinutes;
		secDay = day * 86400;
		secHour = hour * 3600;
		secMinutes = minutes * 60;
	return secDay + secHour + secMinutes;
}
console.log(timeSec(5, 21, 30));


//Task 3 Напишите рекурсивную функцию для подсчёта факториала числа.

function factorial(n) {
	return n ? n * factorial(n - 1) : 1;
}
console.log(factorial(5));

//Task 4 Напишите рекурсивную функцию, которая разворачивает введённое число задом наперёд. Например, если на вход функция получает 1234, вернуть она должна 4321.

let num = 2345;

function getReversedNum(num) {
  let result = 0;
  while (num) {
    result = result * 10 + num % 10;
    num = Math.floor(num / 10);
  }
  return result;
}
console.log(getReversedNum(num));

//Task 5 Напишите функцию для решения квадратных уравнений. В качестве параметров она должна принимать коэффиценты a, b и c, возвращать – количество корней.
//Сами корни уравнения (или информацию о их отсутствии) функция должна выводить в консоль. Примечание 1. Ищем только решения в действительных числах,
//комплексные не нужны! Примечание 2. Для получения квадратного корня используйте стандартную функцию JS: Math.sqrt().

function quadraticEquation (a, b, c) {
	let D = (Math.pow(b, 2) - 4 * a * c);
		if (D > 0) {
			let x1;
			let x2;
			console.log(x1 = (-b + Math.sqrt(D)) / (2 * a));
			console.log(x2 = (-b - Math.sqrt(D)) / (2 * a));
				return('Два корня');
		}
		if (D == 0) {
			let x;
			console.log(x = (-b) / (2 * a));
				return('Один корень');
		}
		if (D < 0) {
				return('Нет корней');
		}
}
console.log(quadraticEquation(2, 9, -5));