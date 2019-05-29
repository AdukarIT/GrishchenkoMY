//window.addEventListener('DOMContentLoaded', function() {
//Task 1
document.getElementsByTagName('button')[0].addEventListener('click', function() {alert('Hello');})
//Task 2
document.getElementsByTagName('button')[0].addEventListener('click', function(evt) {
	evt.currentTarget.innerText = 'button'
});
//Task 3
document.getElementsByTagName('button')[0].addEventListener('click', function() {
	document.getElementsByTagName('input')[0].setAttribute('disabled', true);
});
document.getElementsByTagName('button')[1].addEventListener('click', function() {
	document.getElementsByTagName('input')[0].removeAttribute('disabled', false);
});
//});
//Task 4
document.getElementsByTagName('div')[0].addEventListener('mousemove', function onclick(event) {
  showRect(this)
})
function showRect(elem) {
	var r = elem.getBoundingClientRect();
	console.log("top:"+r.top+", left:"+r.left+", right:"+r.right+", bottom:"+r.bottom+",");
}

/* Определяем тип браузера */
  var ie = 0;
  var op = 0;
  var ff = 0;
  var browser = navigator.userAgent;
  if (browser.indexOf("Opera") != -1) op = 1;
  else {
    if (browser.indexOf("MSIE") != -1) ie = 1;
    else {
      if (browser.indexOf("Firefox") != -1) ff = 1;
    }
  }
  var block = document.getElementById("block");
  delta_x = 0;
  delta_y = 0;
  /* Ставим обработчики событий на нажатие и отпускание клавиши мыши */
  block.onmousedown = saveXY;
  if (op || ff) {
    block.addEventListener("onmousedown", saveXY, false);
  }
  document.onmouseup = clearXY;
  /* При нажатии кнопки мыши попадаем в эту функцию */
  function saveXY(obj_event) {
    /* Получаем текущие координаты курсора */
    if (obj_event) {
      x = obj_event.pageX;
      y = obj_event.pageY;
    }
    else {
      x = window.event.clientX;
      y = window.event.clientY;
      if (ie) {
        y -= 2;
        x -= 2;
      }
    }
    /* Узнаём текущие координаты блока */
    x_block = block.offsetLeft;
    y_block = block.offsetTop;
    /* Узнаём смещение */
    delta_x = x_block - x;
    delta_y = y_block - y;
    /* При движении курсора устанавливаем вызов функции moveWindow */
    document.onmousemove = moveBlock;
    if (op || ff)
      document.addEventListener("onmousemove", moveBlock, false);
  }
  function clearXY() {
    document.onmousemove = null; // При отпускании мыши убираем обработку события движения мыши
  }
  function moveBlock(obj_event) {
    /* Получаем новые координаты курсора мыши */
    if (obj_event) {
      x = obj_event.pageX;
      y = obj_event.pageY;
    }
    else {
      x = window.event.clientX;
      y = window.event.clientY;
      if (ie) {
        y -= 2;
        x -= 2;
      }
    }
    /* Вычисляем новые координаты блока */
    new_x = delta_x + x;
    new_y = delta_y + y;
    block.style.top = new_y + "px";
    block.style.left = new_x + "px";
  }

document.oninput = function() {
    var input = document.querySelector('.input');
    input.value = input.value.replace (/[^\+\d]/g, '');
}
