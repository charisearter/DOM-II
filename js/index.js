// Your code goes here

//mouseover event DONE 1
const logo = document.querySelector('header > div > h1');

logo.addEventListener('mouseover', (event) => {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var randomColor = 'rgb(' + x + ',' + y + ',' + z + ')';
    logo.style.color = randomColor;
})

//dblclick event DONE 2
const btn1 = document.querySelector('section.content-pick > div:nth-child(1) > div');
const btn1txt = document.querySelector('section.content-pick > div:nth-child(1) > p');
btn1.addEventListener('dblclick', (event) => {
    btn1txt.style.backgroundColor = 'pink';
})

//mouse leave event DONE 3
const btn2 = document.querySelector('section.content-pick > div:nth-child(2) > div');

btn2.addEventListener('mouseleave', (event) => {
    btn2.style.backgroundColor = 'orange';
})

//mouse enter event DONE 4
const btn = document.querySelectorAll('.btn');
const btn3 = document.querySelector('section.content-pick > div:nth-child(3) > div');

btn3.addEventListener('mouseenter', (event) => {
    btn3.style.fontSize = '5rem';
})

//mouse up event DONE 5

const p1 = document.querySelector('section.content-section.inverse-content > div.text-content > p:nth-child(2)');

p1.addEventListener('mouseup', (event) => {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var randomColor = 'rgb(' + x + ',' + y + ',' + z + ')';
    p1.style.color = randomColor;
})

//mouse move DONE 6

const headerImg = document.querySelector('header > img');

headerImg.addEventListener('mousemove', (event) => {
    //do something
    headerImg.style.filter = 'grayscale(100%)';
})

//mouse down  7

const footer = document.querySelector('footer > p');


//event 8



//event 9



//event 10