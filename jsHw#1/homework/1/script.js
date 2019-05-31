"use strict";
let x = prompt("Введите номер квартиры (1-100)");
if (x < 1 || x > 100) {
	console.log("Такой квартиры нет");
} else
if (x <= 20 && x >= 1) {
	console.log("Подъезд №1");
} else
if (x <= 40 && x >= 21) {
	console.log("Подъезд №2");
} else
if (x <= 60 && x >= 41) {
	console.log("Подъезд №3");
} else
if (x <= 80 && x >= 61) {
	console.log("Подъезд №4");
} else
if (x <= 100 && x >= 81) {
	console.log("Подъезд №5");
}