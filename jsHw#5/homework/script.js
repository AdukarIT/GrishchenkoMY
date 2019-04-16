//Task 1 Напишите функцию, которая получает в качестве аргументов объект и строку и проверяет, есть ли в этом объекте свойство с именем, равным этой строке.
console.log('T   a   s   k   1');

let doggy = {};
	doggy.name = "Buddy";
	doggy.breed = "Rottweiller";
	doggy.age = 1;

function check(object, string) {
	if (string in object) {
		return true;
	} else {
		return false;
	}
}
console.log(check(doggy, "breed"));

//Task 2 Создайте объект для хранения своего любимого кулинарного рецепта. Он должен содержать название, ингредиенты и их необходимое количество (в виде вложенного объекта),
//а также количество порций (больше 1). Напишите функцию, которая получает "рецепт", подсчитывает, сколько каждого ингредиента нужно на одну порцию, и выводит информацию об этом в консоль.
console.log('____________________________________________');
console.log('T   a   s   k   2');

let favoriteRecipe = {
	name: "Shawarma",
	ingredients:{
		Pita: 200, 
		Chicken: 700, 
		Cabbage: 150, 
		Cucumbers: 200, 
		Tomato: 200, 
		Mayonnaise: 300,
		SourCream: 250, 
		Greens: 15,
		Garlic: 60, 
		RedPepper: 5,
		GroundPaprika: 10, 
		CayennePepper: 10, 
		SeasoningSalt: 10, 
		GroundBlackPepper: 5,
	},
	numberOfServings: 2,
};

let onePortions = {};

function portionIngredients(favoriteRecipe) {
	for(let key in favoriteRecipe.ingredients) {
		onePortions[key] = favoriteRecipe.ingredients[key];
			onePortions[key] = favoriteRecipe.ingredients[key] / 2;
		}
			onePortions.portions = favoriteRecipe.portions / 2;
		return onePortions;
}

console.log(portionIngredients(favoriteRecipe));

//Task 3 Создайте объект "Цилиндр" (свойства – радиус и высота). Добавьте в него метод, который считает объём цилиндра (используя this).
console.log('____________________________________________');
console.log('T   a   s   k   3');

let cylinder = {
	radius: 5,
	height: 10,
	getVolume: function () {
		return 3.14 * (this.radius * this.radius) * this.height}
	}
console.log(cylinder.getVolume());

//Task 4 Выберите пингвина из списка вымышленных пингвинов на Википедии и опишите его в виде объекта (не менее трёх полей; например, имя, создатель и источник).
//Добавьте этому объекту свойство canFly. Добавьте два метода: sayHello, который выводит в консоль приветствие и представление вашего пингвина,
//и fly, который в зависимости от значения свойства canFly (true или false) определяет, может ли пингвин летать, и сообщает об этом в консоль.

console.log('____________________________________________');
console.log('T   a   s   k   4');

let penguin = {
  name: "Tacky the Penguin ",
  origin: "Tacky the Penguin",
  author: "Helen Lester",
  notes: "A penguin who does things differently than other penguins. ",
  canFly: true,	
  sayHello: function() {
    return console.log("Привет, я " + penguin.name);
  },
  fly: function() { 
    if (!penguin.canFly) {
      return console.log("Я не умею летать");
    } else {
      return console.log("Я умею летать");
    }
  }
};
penguin.sayHello();
penguin.fly();