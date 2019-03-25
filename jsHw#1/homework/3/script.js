let x = prompt("Введите год");
if (x % 4 != 0) {
	console.log("Этот год обычный");
} else if (x % 100 != 0) {
	console.log("Год високосный");
} else if (x % 400 != 0) {
	console.log("Этот год обычный");
} else 
	console.log("Год високосный");
