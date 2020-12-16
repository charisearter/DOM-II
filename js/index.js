// Your code goes here

//make variables of what you want events on
//logo
const logo = document.querySelector("header > div > h1");

//button and text
const btn1 = document.querySelector(
	"section.content-pick > div:nth-child(1) > div"
);
const btn1Txt = document.querySelector(
	"section.content-pick > div:nth-child(1) > p"
);

// header img
const headerImg = document.querySelector("header > img");

//add EventListeners

//header image event
headerImg.addEventListener("mousemove", () => {
	//do something
	headerImg.style.filter = "grayscale(100%)";
});

