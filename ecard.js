//vars

var picado = document.getElementById("picados");
var title = document.getElementById("title");
var catrina = document.getElementById("catrina");
var grave = document.getElementById("maingrave");
var marigold = document.getElementById("marigolds");
var guitar = document.getElementById("guitar");
var skull = document.getElementById("skull");
var poem = document.getElementById("poem");

var factpicado = document.getElementById("factpicado");
var facttitle = document.getElementById("facttitle");
var factcat = document.getElementById("factcat");
var factgrave = document.getElementById("factgrave");
var factmari = document.getElementById("factmari");
var factguitar = document.getElementById("factguitar");
var factskull = document.getElementById("factskull");
var factpoem = document.getElementById("factpoem");






//picados

picado.addEventListener("click", function () {
    factpicado.style.display = "block";
    
    factpicado.style.width = "90%";
    factpicado.style.height = "80%";
    factpicado.style.filter = "opacity(1)";
    factpicado.style.fontSize = "18pt";
});

document.getElementById("ex").addEventListener("click", function () {
     factpicado.style.fontSize = "0pt";
     factpicado.style.width = "0%";
     factpicado.style.height = "0%";
     factpicado.style.filter = "opacity(0)";
     
});




//title

title.addEventListener("click", function () {
    facttitle.style.display = "block";
    
    facttitle.style.width = "90%";
    facttitle.style.height = "80%";
    facttitle.style.filter = "opacity(1)";
    facttitle.style.fontSize = "18pt";
});

document.getElementById("ext").addEventListener("click", function () {
     facttitle.style.fontSize = "0pt";
     facttitle.style.width = "0%";
     facttitle.style.height = "0%";
     facttitle.style.filter = "opacity(0)";
     
});





//catrina

catrina.addEventListener("click", function () {
    factcat.style.display = "block";
    
    factcat.style.width = "90%";
    factcat.style.height = "80%";
    factcat.style.filter = "opacity(1)";
    factcat.style.fontSize = "18pt";
});

document.getElementById("ex1").addEventListener("click", function () {
     factcat.style.fontSize = "0pt";
     factcat.style.width = "0%";
     factcat.style.height = "0%";
     factcat.style.filter = "opacity(0)";
     
});




//maingrave

grave.addEventListener("click", function () {
     factgrave.style.display = "block";

     factgrave.style.width = "90%";
     factgrave.style.height = "80%";
     factgrave.style.filter = "opacity(1)";
     factgrave.style.fontSize = "18pt";
});

document.getElementById("ex2").addEventListener("click", function () {
     factgrave.style.fontSize = "0pt";
     factgrave.style.width = "0%";
     factgrave.style.height = "0%";
     factgrave.style.filter = "opacity(0)";
});




//marigolds

marigold.addEventListener("click", function () {
    factmari.style.display = "block";
    
    factmari.style.width = "90%";
    factmari.style.height = "80%";
    factmari.style.filter = "opacity(1)";
    factmari.style.fontSize = "18pt";
});

document.getElementById("ex3").addEventListener("click", function () {
     factmari.style.fontSize = "0pt";
     factmari.style.width = "0%";
     factmari.style.height = "0%";
     factmari.style.filter = "opacity(0)";
     
});




//guitar

guitar.addEventListener("click", function () {
    factguitar.style.display = "block";
    
    factguitar.style.width = "90%";
    factguitar.style.height = "80%";
    factguitar.style.filter = "opacity(1)";
    factguitar.style.fontSize = "18pt";
});

document.getElementById("ex4").addEventListener("click", function () {
     factguitar.style.fontSize = "0pt";
     factguitar.style.width = "0%";
     factguitar.style.height = "0%";
     factguitar.style.filter = "opacity(0)";
     
});




//skull

skull.addEventListener("click", function () {
    factskull.style.display = "block";
    
    factskull.style.width = "90%";
    factskull.style.height = "80%";
    factskull.style.filter = "opacity(1)";
    factskull.style.fontSize = "18pt";
});

document.getElementById("ex5").addEventListener("click", function () {
     factskull.style.fontSize = "0pt";
     factskull.style.width = "0%";
     factskull.style.height = "0%";
     factskull.style.filter = "opacity(0)";
     
});




//poem

poem.addEventListener("click", function () {
    factpoem.style.display = "block";
    
    factpoem.style.width = "90%";
    factpoem.style.height = "80%";
    factpoem.style.filter = "opacity(1)";
    factpoem.style.fontSize = "18pt";
});

document.getElementById("ex6").addEventListener("click", function () {
     factpoem.style.fontSize = "0pt";
     factpoem.style.width = "0%";
     factpoem.style.height = "0%";
     factpoem.style.filter = "opacity(0)";
     
});








//music toggle

var button = document.getElementById("musictoggle");
var music = document.getElementById("bgmusic");

button.addEventListener("click", function() {
		if (music.paused == true) {
			music.play();
            
            button.src = "svgs/Speaker.svg";
		} else {
			music.pause();

			button.src = "svgs/Speakercrossed.svg";
		}
	});



//guitar notes

var guitar = document.getElementById("guitar");
var note1 = document.getElementById("note1");
var note2 = document.getElementById("note2");

guitar.addEventListener("mouseenter", function () {
   note1.style.animation = "notes 3s"; 
   note2.style.animation = "notes 5s"; 
});