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

//mouse down event DONE 7

const footer = document.querySelector('footer > p');

footer.addEventListener('mousedown', (event) => {
    footer.style.letterSpacing = '4rem';
} )


//mouse out event  DONE 8

const lastImg = document.querySelector('section.content-destination > img');

lastImg.addEventListener('mouseout', (event) => {
    lastImg.style.filter = 'blur(5px)';
})



//key down ESCAPE  event 9 ??

const img2 = document.querySelector('section:nth-child(2) > div.img-content > img');

img2.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        img2.style.filter = 'sepia(100%)';
      }
})



//event 10