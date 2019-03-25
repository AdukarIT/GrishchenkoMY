let x = 0;
let y = 1;
let f = 0;

console.log(x);
console.log(y);

for (i = 2; i < 15; i++) {
	f = x + y;
	console.log(f);
	x = y;
	y = f;
}