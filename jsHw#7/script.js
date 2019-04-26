//Task 1 Напишите функцию, которая принимает в качестве параметра номер символа в таблице Unicode.
//Подсчитайте количество таких символов во всех элементах массива, как в задаче 3 из первой части практики.
console.log('T   a   s   k   1');

let str = "Разбейте текст этой задачи на отдельные слова, удаляя по пути точки и запятые, а полученные слова сложите в массив. Напишите функцию, которая возвращает массив из тех же слов, но развёрнутых задом наперёд, причём массив должен быть отсортирован по количеству букв в слове. Напишите другую функцию, которая считает общее количество букв с во всех элементах массива.";
let arrayStr = str.split("");

function symbolQuantity(arrOfWords, symbol) {
   let result = arrOfWords.filter(function(item) {
     return item.charCodeAt() == symbol;

   });
   console.log(result.length);
 }
symbolQuantity(arrayStr,1090); // буква т

//Task 2 Напишите функцию, которая будет возвращать частичную функцию от функции из задачи 1, фиксируя искомый символ.
console.log('____________________________________________');
console.log('T   a   s   k   2');

let letterCounter = symbolQuantity(arrayStr,1090);
console.log(letterCounter);

//Task 3 Отфильтруйте массив городов так, чтобы в нём остались только города из штата Калифорния, которые с 2000 по 2013 выросли в населении.
console.log('____________________________________________');
console.log('T   a   s   k   3');

let stateCalifornia = data.filter(
	function(item) {
	return item.state === "California" && parseInt(item.growth_from_2000_to_2013) > 0
});
console.log(stateCalifornia);

//Task 4 Подсчитайте, сколько миллионов населения живёт во всех городах на широте от 25 до 30 градусов.
console.log('____________________________________________');
console.log('T   a   s   k   4');

function population() {
   let people = 0;
   let array = data.filter(function(item) {
     return parseInt(item.latitude) > 25 && parseInt(item.latitude) < 30;
   });
   array.forEach(function(item) {
     return people += parseInt(item.population);
   });
   return people;
 }
console.log(population());

//Task 5 Создайте массив только из тех городов, которые начинаются на букву D, при этом отсортируйте элементы этого массива по названию города.
console.log('____________________________________________');
console.log('T   a   s   k   5');

let arr = [];
let array = data.reduce(function(a, b) {
	if (b.city[0] === "D") {
		arr.push(b);
	} return arr.sort(function(a, b) {
		b.city - a.city;
	});
});
console.log(array);

//Task 6 Преобразуйте представленный массив "Города" в объект "Штаты": 
    //для каждого штата – отдельное свойство объекта (ключ = название штата);
    //значение каждого свойства – массив городов;
    //каждый элемент массива – название города, население и место в общем рейтинге (rank).
console.log('____________________________________________');
console.log('T   a   s   k   6');

function objectState() {
   let states = {};
   for (var i = 0; i < data.length; i++) {
     states[data[i]["state"]] = [];
     states[data[i]["state"]].push(data[i]["city"]);
   }
   for (var key in states) {
     for (var j = 0; j < data.length; j++) {
       if (key == data[j]["state"]) {
         states[data[j]["state"]].push(data[j]["city"]);
       }
     }
   }
   console.log(states);
 }
objectState();