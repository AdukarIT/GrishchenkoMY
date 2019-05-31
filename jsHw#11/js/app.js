
//Task1
function User(name, surname) {
	this.name = name;
	this.surname = surname;

	this.getFullName = function () {
  		return this.name + ' ' + this.surname;
	}
}

function Student(name, surname, year) {
	User.apply(this, arguments);
	this.year = year;

	this.getCourse = function () {
		// if education started in the current year then printing 1 instead of 0
		return new Date().getFullYear() - this.year === 0 ? 1 : new Date().getFullYear() - this.year;
	}
}

Student.prototype = Object.create(User.prototype);
Student.prototype.constructor = Student;


function createStudent() {
	var name = document.getElementById("name_task1").value;
	var surname = document.getElementById("surname_task1").value;
	var year = document.getElementById("year_task1").value;
	var result = document.getElementById("resultId");

	var student = new Student(name, surname, year);
	result.value = 'ИМЯ СТУДЕНТА: ' + student.getFullName() + '  КУРС: ' + student.getCourse();
}

//Task2
function Burger(name, price, calories) {
	this.name = name;
	this.price = price;
	this.calories = calories;

	this.getName = function () {
  		return this.name;
	}

	this.getCalories = function () {
  		return this.calories;
	}

	this.setPrice = function (price) {
  		this.price = price;
	}
}

var bigTasty = new Burger('Big Tasty', 120, 300);
var chickenBurger = new Burger('Chicken Burger', 320, 500);
var menu = {};
menu['Big Tasty'] = bigTasty;
menu['Chicken Burger'] = chickenBurger;

function changePrice(name) {
	var price = document.getElementsByName(name)[0].value;
	menu[name].setPrice(price);
}

function calculate() {
	var big_number = document.getElementById('big_task2').value;
	var chicken_number = document.getElementById('chicken_task2').value;
	var result = document.getElementById('resultId_task2');
	var totalPrice = big_number * menu['Big Tasty'].price + chicken_number * menu['Chicken Burger'].price;
	var totalCalories = big_number * menu['Big Tasty'].getCalories() + chicken_number * menu['Chicken Burger'].getCalories();
	result.value = 'Total Price: ' + totalPrice + '$  Total Calories: ' + totalCalories + 'kcal';
}


//Task3
var bell = new Audio('audio/slow-spring-board.mp3');
function setTimer() {
	var now = new Date();
	var notes = document.getElementById('notes_task3').value;
	var datetime = document.getElementById('datetime_task3').value;
	let ms = new Date(datetime).getTime();
	console.log('now.getTime()  ' + now.getTime());
	console.log('ms  ' + ms);
	console.log('delta  ' + (ms - now.getTime()));
	setTimeout(function() { bell.play(); /*alert(notes);*/ }, ms - now.getTime());
}