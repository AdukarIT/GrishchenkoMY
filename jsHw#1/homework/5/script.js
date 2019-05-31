"use strict";
let sumOddNum = 0;
for (let i = 0; i <= 50; i++) {
	if (i % 2 == 0) 
	continue;
sumOddNum += i;
}
console.log(sumOddNum)