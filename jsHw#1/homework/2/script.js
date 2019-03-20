let x = prompt("Назовите марку автомобиля")
switch (x) {
	case "BMW":
		console.log("BMW - Страна происхождения Германия");
		break;
	case "Ford":
		console.log("Ford – страна происхождения США");
		break;
	case "Peugeot":
		console.log("Peugeot – страна происхождения Франция");
		break;
	case "LandRover":
		console.log("LandRover – страна происхождения Великобритания");
		break;
	case "Skoda":
		console.log("Skoda – страна происхождения Чехия");
		break;
	case "Toyota":
		console.log("Toyota – страна происхождения Япония");
		break;
	case "Geely":
		console.log("Geely – страна происхождения Китай");
		break;
	default:
		console.log("Страна происхождения неизвестна");
}