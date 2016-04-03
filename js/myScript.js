var link = document.getElementsByTagName("h3");

var urlList = {"Portfolio Page":"http://anirvachan.github.io/frontend-nanodegree-personal-site",
			   "Interactive Resume":"http://anirvachan.github.io/frontend-nanodegree-resume/",
			   "Frogger Clone":"http://anirvachan.github.io/frontend-nanodegree-arcade-game/",
			   "Website Optimization":"http://anirvachan.github.io/frontend-nanodegree-mobile-portfolio/",
			   "Neighborhood Map":"http://anirvachan.github.io/frontend-nanodegree-neighborhood-map/",
			   "Feed-reader Testing":"http://anirvachan.github.io/frontend-nanodegree-feedreader/",
			   "Asteroids":"http://www.codeskulptor.org/#user39_wdcvKTfcrvnBY0X_6.py",
			   "Blackjack":"http://www.codeskulptor.org/#user39_O8QIFFo8IoWewUB_14.py",
			   "2048":"http://www.codeskulptor.org/#user41_ntIpAQogVO_6.py",
			   "Tic-Tac-Toe":"http://www.codeskulptor.org/#user41_2wbo5FztzG_18.py",
			   "15 Puzzle":"http://www.codeskulptor.org/#user41_vYC3Oh4dEl_0.py"};

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


