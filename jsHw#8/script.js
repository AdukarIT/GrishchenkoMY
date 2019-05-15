//Task 1 Дан элемент #elem. Добавьте ему класс "www".

let el = document.getElementById('elem');
elem.classList.add('www');

//Task 2 Дан элемент #elem. Проверьте наличие у него класса "www", если есть - удалите класс

let elm = document.getElementById('elem');
let check = elem.classList.contains('www');
if (check == true) {
  elem.classList.remove('www');
} else {
  alert(check);
}

//Task 3 Напишите функцию поиска recursiveSearchTags, которая принимает на вход document и имя тега, а возвращает массив из всех элементов соответствующих этому тегу. Поиск идет в теге body

function recursiveSearchTags(document, tagName) {
  let result = document.getElementsByTagName(tagName);
  return result = [].slice.call(result);
}
console.log(recursiveSearchTags(document.body, 'p'));

//Task 4 Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li. Сделайте так, чтобы четные позиции имели красный фон.

let array = ["Первый", "Второй", "Третий", "Четвертый", "Пятый"];

function addFromArray(arr) {
  let parent = document.body;
  let ul = document.createElement("ul");
  for (i = 0; i < arr.length; i++) {
    let li = document.createElement("li");
    let text = document.createTextNode(arr[i]);
    if (i % 2) {
      li.setAttribute("style", "background-color: red;");
    }
    li.appendChild(text);
    ul.appendChild(li);
    parent.appendChild(ul);
  }
}
addFromArray(array);

//Task 5 Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'

let elemm = document.getElementById('elem');
let prev = elemm.previousElementSibling;
prev.innerHTML = prev.innerHTML + '!';

//Task 6 Реализуйте функцию wrapInParagraph, которая находит текст (дочерние текстовые ноды) внутри элемента div и оборачивает текст в параграф

function wrapInParagraph() {
  let p = document.createElement('p');
  let div = document.getElementById('div1');
  let text = div.firstChild;
  div.insertBefore(p, text);
  p.appendChild(text);
}
wrapInParagraph();

//Task 7 Реализуйте функцию normalizeClassNames, которая нормализует имена классов для всех элементов на странице.
//В данном случае это означает что происходит преобразование всех классов написанных используя kebab нотацию в camelCase нотацию: text-center => textCenter

function normalizeClassNames() {
  let searchClass = document.body.getElementsByTagName("*");
  for (var i = 0; i < searchClass.length; i++) {
    let item = searchClass[i];
    if (item.classList.length > 0) {
      for (var j = 0; j < item.classList.length; j++) {
        let tempClass = item.classList[j];
        let arrClassName = tempClass.split("");
        for (var k = 0; k < arrClassName.length; k++) {
          if (arrClassName[k] == "-") {
            delete arrClassName[k];
            let tempStr = arrClassName[k + 1];
            let tempSrtUpper = String(tempStr.toUpperCase());
            arrClassName[k + 1] = tempSrtUpper;
          }
        }
        let strClass = arrClassName.join("");
        item.className = strClass;
      }
    }
  }
}
normalizeClassNames();