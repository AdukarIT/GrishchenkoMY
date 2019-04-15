//Task 1 Создайте массив и в цикле заполните его чётными числами от 2 до 20.

/*let array = [];
	for (let i = 2; i <= 20; i++) {
			if (i % 2 == 0) {
				array.push(i);
			}
	}
console.log(array);*/

/*let array = [];
	for (let i = 2; i <= 20; i+=2) {
				array.push(i);
	}
console.log(array);*/

//Task 2 Преобразуйте массив из задачи 1 так, чтобы его элементы стали равны своему индексу, умноженному на 5.

/*let array = [];
	for (let i = 2; i <= 20; i+=2) 
				array.push(i);
console.log(array);

for (let i = 0; i < array.length; i++)
array[i] = i * 5;
console.log(array);*/

//Task 3 Получите от пользователя три числа, создайте из них массив. Используя циклы, найдите наибольшее из чисел и разделите на него каждый элемент массива.

/*let a = +prompt('First');
let b = +prompt('Second');
let c = +prompt('Third');

let arr = [a, b, c];

console.log(arr);

let more;
	if (a >= b && a >= c) {
		console.log(a);
		more = a;
	} else if (b >= c) {
		console.log(b);
		more = b;
	} else {
		console.log(c);
		more = c;
	}

let newArray = [];
for (i = 0; i <= arr.length - 1; i++) {
	newArray.push(arr[i] / more);
}
console.log(newArray);*/

//Task 4 Преобразуйте массив из задачи 2 так, чтобы его элементы расположились в обратном порядке.

let arr = [1, 3, 5, 6, 7, 9];
let result = [];
for (var i = arr.length - 1; i >= 0; i--) {
	result.push(arr[i]);
}
console.log(result);

