let x = prompt("Введите число от 1 до 20");
if (x < 1 || x > 20) {
	console.log("Ошибка");
} else {
	let i; 
	console.log("Таблица умножения для числа", x);
		for (i = 1; i <= 10; i++) {
			console.log(x + "*" + i + "=" + x * i);
	}
}