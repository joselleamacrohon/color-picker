

let texts = document.getElementsByClassName("text");
console.log(texts);

// FIRST BOX
let color1 = document.querySelector("#color1");

color1.addEventListener ("click", function() {
	let userInput1 = prompt("what color do you want?");
	color1.style.backgroundColor = userInput1; 
	texts[0].innerHTML = userInput1;
});

// SECOND BOX
let color2 = document.getElementById("color2");

color2.addEventListener ("click", function() {
	let userInput2 = prompt("what color do you want?");
	color2.style.backgroundColor = userInput2; 
	texts[1].innerHTML = userInput2;
});

// THIRD BOX
let color3 = document.getElementById("color3");

color3.addEventListener ("click", function() {
	let userInput3 = prompt("what color do you want?");
	color3.style.backgroundColor = userInput3; 
	texts[2].innerHTML = userInput3;
});

// FOURTH BOX
let color4 = document.getElementById("color4");

color4.addEventListener ("click", function() {
	let userInput4 = prompt("what color do you want?");
	color4.style.backgroundColor = userInput4; 
	texts[3].innerHTML = userInput4;
});

// FIFTH BOX
let color5 = document.getElementById("color5");

color5.addEventListener ("click", function() {
	let userInput5 = prompt("what color do you want?");
	color5.style.backgroundColor = userInput5; 
	texts[4].innerHTML = userInput5;
});

// SIXTH BOX
let color6 = document.getElementById("color6");

color6.addEventListener ("click", function() {
	let userInput6 = prompt("what color do you want?");
	color6.style.backgroundColor = userInput6; 
	texts[5].innerHTML = userInput6;
});


