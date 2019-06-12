//Task 1 Используя встроенную функцию Math.random(), напишите собственную функцию getRandomArray(len), которая возвращает массив случайных чисел длиной len.
console.log('T   a   s   k   1');

function getRandomArray(len) {
	let array = [];
	for (let i = 0; i < len; i++)
		array[i] = Math.random();
	return array;
}
console.log(getRandomArray(5));

//Task 2 Выведите в консоль элементы массива, которые больше среднего арифметического всех элементов.
console.log('____________________________________________');
console.log('T   a   s   k   2');

let randomArray = getRandomArray(5);
function elementsOfArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let average = sum / arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > average) {
      console.log(arr[i]);
    }
  }
}
elementsOfArr(randomArray);

//Task 3 Найдите два наименьших элемента массива.
console.log('____________________________________________');
console.log('T   a   s   k   3');

function twoSmallElem(array) {
	let numMin = array.sort(function(a, b) {
  	return a - b;
  })
  console.log("Наименьшие числа: " + array[0] + " и " + array[1]);
}
twoSmallElem(getRandomArray(5));

//Task 4 Удалите из массива все элементы, меньшие 0.3. Сдвиньте все оставшиеся элементы вперёд, а на освободившиеся места вставьте нули.
console.log('____________________________________________');
console.log('T   a   s   k   4');

function removeItemArray() {
  let mass = getRandomArray(5);
  let newMass = [];
  for (let i = 0; i < mass.length; i++) {
    if (mass[i] < 3) {
      mass.splice(i,1);
      mass.push(0);
    }
  }
  console.log(mass);
}
removeItemArray();

//Task 5 Попарно сложите элементы двух массивов равной длины: первый массива 1 с последним массива 2, второй массива 1 с предпоследним массива 2 и так далее. Верните массив с результатами сложения.
console.log('____________________________________________');
console.log('T   a   s   k   5');

function ArrSum(firstArray, secondArray) {
	let array = new Array(firstArray.length);
	for (i = 0; i < firstArray.length; i++) {
		array[i] = firstArray[i] + secondArray[firstArray.length - 1 - i];
	}
	return array;
}
console.log(ArrSum(getRandomArray(5), getRandomArray(5)));

//Task 6 Отсортируйте массив методом пузырька. О самом алгоритме можно почитать на википедии. А ещё можно посмотреть, как его танцуют в Венгрии.
console.log('____________________________________________');
console.log('T   a   s   k   6');

function arraySort(array) {
    for (i = 0; i < array.length - 1; i++) {
    	for (j = 0; j < array.length - 1 - i; j++) { 
	      	if (array[j + 1] < array[j]) {
	      	 	let swap = array[j + 1]; 
	      	 	array[j + 1] = array[j];
	      	 	array[j] = swap; 
	      	}
    	}
    }                    
    return array;
    }
console.log(arraySort(getRandomArray(5)));

//Task 7 (*) Проверьте, есть ли в массиве два числа, сумма которых очень близка к 1 (0.999 < sum < 1.001). Если такая пара (или такие пары) есть, выведите их в консоль.
console.log('____________________________________________');
console.log('T   a   s   k   7');

function sumOfTwo() {
	let array = getRandomArray(5);
	for (i = 0; i < array.length - 1; i++) {
		for (j = i + 1; j < array.length; j++) {
			let summ = array[i] + array[j];
			if ((summ > 0.999) && (summ < 1.001)) {
				return "Числа " + array[i] + " и " + array[j];
			} else {return "Таких чисел нет"}
		}
	}
}
console.log(sumOfTwo());

//Task 8 (*) Создайте массив той же длины, что исходный. На месте самого большого числа исходного массива в новом вставьте число 1, на месте второго по величине – 2 и так далее.
console.log('____________________________________________');
console.log('T   a   s   k   8');

function swapArrNums() {
	let array = getRandomArray(5);
	let arr = new Array(array.length);
	console.log(array);
	for (i = 0; i < array.length; i++) {
		let count = 1;
		for (j = 0; j < array.length; j++) {
		if (array[j] > array[i]) {
			count++;
			}
		}
		arr[i] = count;
	}
	console.log(arr);
}
swapArrNums();

//Task 9 (*) Сделайте сдвиг массива вправо на X позиций (X передайте в функцию в качестве аргумента).
//Элементы, которые после сдвига "уходят" за пределы его длины, переместите на освободившиеся первые Х позиций.
console.log('____________________________________________');
console.log('T   a   s   k   9');

function moveRight(x) {
    let dynamicArray = [1, 2, 3, 4, 5, 6, 7, 8];
    dynamicArray = dynamicArray.concat(dynamicArray.splice(0, dynamicArray.length - x));
    	console.log(dynamicArray);
    }
moveRight(3);