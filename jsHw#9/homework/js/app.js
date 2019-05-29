//Task2
var countClicks = 0;

//Task1
function cloneInput() {
 	var parent = document.getElementById('task1');
	var elem = parent.querySelector('.task1_input');
	var clone = elem.cloneNode(true);
	parent.appendChild(clone);
}

//Task2
function handleTableClick() {
 	var element = document.getElementById("task2_table");
  	if (countClicks === 0) {
		  element.classList.add("bordered");
		  countClicks++;
	} else if (countClicks === 1) {
		element.classList.remove("bordered");
		element.classList.add("stripped");
		countClicks++;
	} else if (countClicks === 2) {
		element.classList.remove("stripped");
		element.classList.add("highlight");
		countClicks++;
	}
}

//Task3
const radios = document.querySelectorAll('input[type=radio]');
radios.forEach(radio => radio.addEventListener('change', e => {
	var element = document.getElementById("task3_table");
	switch (radio.value) {
		case 'Bordered':
			element.classList.add("bordered");
			element.classList.remove("stripped");
			element.classList.remove("highlight");
			break;
		case 'Stripped':
			element.classList.remove("bordered");
			element.classList.add("stripped");
			element.classList.remove("highlight");
			break;
		case 'Highlighted':
			element.classList.remove("bordered");
			element.classList.remove("stripped");
			element.classList.add("highlight");
			break;
	}
}));

//Task4
function removeOnClickHandler() {
	var element = document.getElementById("button_with_text");
	element.onclick = null;
}

//Task5
const elems = document.querySelectorAll('.task4_elem');
elems.forEach(elem => elem.addEventListener('click', e => {
	alert(elem.nodeName);
}));

//Task6
function handleMouseOverEvent(element) {
	element.setAttribute('src', 'image/70611.jpg');
}

function handleMouseOutEvent(element) {
	element.setAttribute('src', 'image/0038.jpg');
}

//Task7 
function openLightbox(element) {
	var element = document.getElementById("img1");
	element.classList.add('lightbox__clicked');
}