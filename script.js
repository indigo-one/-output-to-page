
let push = document.querySelector('#btn');
push.onclick = x;

function x() {
document.querySelector('p').innerHTML += '<br>Пример span <b>HI</b> <br>';
//document.querySelector('p').innerText += 'Пример span <b>HI</b> ';
};
//------------------------------

let push2 = document.querySelector('#btn2');
push2.onclick = y;

function y() {
    document.querySelector('h1').outerHTML = '<h2>WTF?</h2>';
};

//---------------------------------



let push3 = document.querySelector('#btn3');
push3.onclick = z;
function z() {
   document.querySelector('#abra').insertAdjacentHTML('afterend', Math.random());
};

//----------------------------------------


let push4 = document.querySelector('#btn4');
push4.onclick = a;
function a() {
   document.querySelector('.one span').innerHTML += 99999;
};

//--------------------------------------

let push5 = document.querySelector('#btn5');
let lampa = document.querySelector('img');
let title = document.querySelector('title');
let css = document.querySelector('link');
let input = document.querySelector('input');
let imgMove = document.querySelector('#img-move');

function b() {
lampa.src = 'img/think.png';
lampa.style.marginLeft = '300px';
lampa.style.transition = '10s';
imgMove.style.paddingLeft = '300px';
lampa.insertAdjacentHTML('afterend', Math.random());
title.innerText = 'Lesson shmesson';
css.href = 'new.css';
input.placeholder = 'Отправлено';
input.type = 'search';
};

push5.onclick = b;



/*
window.onload = function(e) {
    let img = document.querySelectorAll('img');
    for( let i = 0; i < img.length; i++) {
img[i].onclick = function() {
    if (this.style.border != "1px solid red") {
        this.style.border = "1px solid red";
    }
    else {
        this.style.border = "none";
    }
}
    }
}

*/
