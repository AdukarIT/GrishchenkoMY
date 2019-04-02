//Task 1 Напишите функцию, которая получает три числа и возвращает их сумму.

function sum(a, b, c) {
	return a + b + c;
}
console.log(sum(5, 7, 3));


//Task 2 Напишите функцию, которая подсчитывает сумму чисел от 1 до заданного X.

function sumX (x) {
	let sum = 0;
	let i;
		for (i = 1; i <= x; i++) {
			sum += i;
		}
		return sum;
}
console.log(sumX(5));

//Task 3 Напишите функцию, которая подсчитывает сумму цифр числа.

function sumNumber (num) {
	let sum = 0;
	let tmp;
		while (num) {
			tmp = num % 10;
			num = (num - tmp) / 10;
			sum += tmp;
		}
		return sum;
}
console.log(sumNumber(2019));

//Task 4 Напишите функцию, которая считает факториал числа.

function factorial(n) {
	return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(5));