let a = +prompt('Введите первое число');
let b = +prompt('Введите второе число');
let c = +prompt('Введите третье число');

let less;
let mid;
let more;

	if (a < b && a < c) {
		less = a;
	} else if (b < c && b < a) {
		less = b;
	} else {
		less = c;
	}

	if (a > b && a > c) {
		more = a;
	} else if (b > c && b > a) {
		more = b;
	} else {
		more = c;
	}

	if (a > less && a < more) {
		mid = a;
	} else if (b > less && b < more) {
		mid = b;
	} else {
		mid = c;
	}

console.log(less, mid, more);