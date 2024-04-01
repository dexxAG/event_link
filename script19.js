'use strict'


//                           ---       Event       ---

//               ---       Основы работы с объектом Event       ---

/* let elem = document.querySelector('#elem');

elem.addEventListener('click', function(event) {
   console.log(event);
}) */


//              ---       Координаты события в JavaScript       ---

/* let elem = document.querySelector('#elem')
let elem2 = document.querySelector('#elem2')
let button = document.getElementsByTagName('button')

document.addEventListener('mousemove', function(event) {
   elem.innerHTML = event.clientX + ':' + event.clientY;
});

document.addEventListener('mousemove', function(event2) {
   elem2.innerHTML = event2.pageX + ':' + event2.pageY;
});
 */

//                ---       Тип события в объекте Event       ---

/* document.addEventListener('click', function(event) {
   console.log(event.type);
}) */

/* let elem = document.querySelector('#elem');

elem.addEventListener('click', func);
elem.addEventListener('dblclick', func);

function func(event) {
	if (event.type == 'click') {
      elem.style.color = 'green'
      console.log(event);
   } else {
      elem.style.color = 'red'
   }
} */


//              ---       Элемент события в объекте Event       ---

/* let elem = document.querySelector('#elem');

elem.addEventListener('click', function(event) {
	console.log(event.target); 
	console.log(this);         
}); */

/* let elem = document.getElementById('elem');

elem.addEventListener('click', function(event) {
   if (event.target === elem) {
      console.log('!');
   } else {
      event.target.innerHTML += '!'
   }
}) */


//            ---       Получение нажатых клавиш в JavaScript       ---

/* let inp = document.querySelector('input');
let parag = document.querySelector('p');

inp.addEventListener('keypress', function(event) {
   // console.log(event.key, event.code);
   if (event.key === 'Enter') {
      parag.innerHTML += inp.value;
      inp.value = ''
   }
}) */


//            ---       Отслеживание клавиш-модификаторов       ---

/*
let button = document.getElementById('elem');

button.addEventListener('click', function(event) {
   if (event.ctrlKey) {
      console.log('ctrl');
   } 
   if (event.altKey) {
      console.log('alt');
   }
   if (event.shiftKey) {
      console.log('shift');
   }
})
*/

/*
let elem = document.getElementById('elem');

elem.addEventListener('click', function(event) {
   if (event.target !== elem) {
      if (event.ctrlKey) {
         event.target.innerHTML += 1;
      }
      if (event.shiftKey) {
         event.target.innerHTML += 2;
      }
      if (event.altKey) {
         event.target.innerHTML += 3;
      }
   } else {
      if (event.target.style.backgroundColor !== 'gray') {
         event.target.style.backgroundColor = 'gray'
      } else {
         event.target.removeAttribute('style')
      }
   }
})
*/


//            ---       Отмена действия по умолчанию       ---

let elem = document.querySelector('#elem');

elem.addEventListener('click', function(event) {
   elem.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
   // event.preventDefault();
   console.log('kekw');
})