var link = document.getElementsByTagName("h3");

var urlList = {"Asteroids":"http://www.codeskulptor.org/#user39_wdcvKTfcrvnBY0X_6.py",
			   "Blackjack":"http://www.codeskulptor.org/#user39_O8QIFFo8IoWewUB_14.py",
			   "2048":"http://www.codeskulptor.org/#user40_ntIpAQogVO_4.py",
			   "Tic-Tac-Toe":"http://www.codeskulptor.org/#user40_3WQuQVJNGS_8.py"};

for (var index = 0; index < link.length; index++) {
	link[index].addEventListener("mouseover", hoverFunction);
	link[index].addEventListener("click", clickFunction);
	link[index].addEventListener("mouseout", leaveFunction);	
}

function hoverFunction() {
	this.style.color = "green";
	this.style.textDecoration = "underline";
}

function clickFunction() {
	var url = this.innerHTML;
	window.open(urlList[url], "_blank");

}

function leaveFunction() {
	this.style.color = "#f8981c";
	this.style.textDecoration = "none";
}


