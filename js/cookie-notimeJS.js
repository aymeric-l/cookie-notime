var multiplicateur = 1;
var cookies = 0;
var prix = 20;
var highscore = 0;
var repetion = 0;

if ('highscore'){
	highscore = lireCookie('highscore');
	document.getElementById("score").innerHTML="Vous avez : "+cookies+" Cookies";
	document.getElementById("highscore").innerHTML="Meilleur score : "+highscore;
}

document.getElementById("buttonanim").onclick = function (){
	cookies = cookies+multiplicateur;
	document.getElementById("score").innerHTML="Vous avez : "+cookies+" Cookies";
	document.getElementById("highscore").innerHTML="Meilleur score : "+highscore;
	if (cookies > highscore){
		highscore = cookies;
		document.getElementById("score").innerHTML="Vous avez : "+cookies+" Cookies";
		document.getElementById("highscore").innerHTML="Meilleur score : "+highscore;
		saveCookie(highscore);
	}
}

document.getElementById("multiplicateur").onclick = function(){
	if(cookies >= prix && prix == 20){
		multiplicateur = multiplicateur + 1;
		repetition = setInterval(autoclick, 500);
		cookies = cookies - prix;
		prix = prix*2;
		document.getElementById("multiplicateur").innerHTML="Multiplicateur +" + multiplicateur + "\nPrix : "+prix;
		document.getElementById("score").innerHTML="Vous avez : "+cookies+" Cookies";
		document.getElementById("highscore").innerHTML="Meilleur score : "+highscore;
	}
	else if(cookies >= prix){
		multiplicateur = multiplicateur + 1;
		cookies = cookies - prix;
		prix = prix*2;
		document.getElementById("multiplicateur").innerHTML="Multiplicateur +" + multiplicateur + "\nPrix : "+prix;
		document.getElementById("score").innerHTML="Vous avez : "+cookies+" Cookies";
		document.getElementById("highscore").innerHTML="Meilleur score : "+highscore;
	}
}

document.getElementById("reset").onclick = function (){
	cookies = 0;
	multiplicateur = 1;
	prix = 20;
	stop();
	document.getElementById("score").innerHTML="Vous avez : "+cookies+" Cookies";
	document.getElementById("highscore").innerHTML="Meilleur score : "+highscore;
	document.getElementById("multiplicateur").innerHTML="Multiplicateur\nPrix : 20";
}

function lireCookie(name){
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return 0;
}

function saveCookie(highscore) {
	document.cookie = "highscore="+highscore+"; expires=Mon, 1 Mar 2025 00:00:00 UTC; path=/";
}

function autoclick(){
	cookies = cookies + 1;
	document.getElementById("score").innerHTML="Vous avez : "+cookies+" Cookies";		
	document.getElementById("highscore").innerHTML="Meilleur score : "+highscore;
	if (cookies > highscore){
		highscore = cookies;
		document.getElementById("score").innerHTML="Vous avez : "+cookies+" Cookies";
		document.getElementById("highscore").innerHTML="Meilleur score : "+highscore;
		saveCookie(highscore);
	}
}

function stop(){
	clearInterval(repetition)
}
