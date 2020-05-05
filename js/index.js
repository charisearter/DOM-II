// Your code goes here
const logo = document.querySelector('header > div > h1');

logo.addEventListener('mouseover', (event) => {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var randomColor = "rgb(" + x + "," + y + "," + z + ")";
    logo.style.color = randomColor;
})