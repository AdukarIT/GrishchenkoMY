let x = prompt("Введите число Х");
for (let i = 2; i <=x; i++) {
	let j;
	for (j = 2; j < i; j++) {
		if (!(i % j)) {
			break;
		}
	}
	if (j == i) {
		console.log(j);
	}
}