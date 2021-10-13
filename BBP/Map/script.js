


/* █ CURSOR STYLE CHANGE  ███████████████████████████████████████████ */
function excitecursor() {
	// console.log("excite fired");
	var cursor = document.getElementById('cursor');
	cursor.classList.add('excite');
}
function normalcursor() {
	// console.log("cursor normal");
	var cursor = document.getElementById('cursor');
	cursor.classList.remove('excite');
}
function textcursor() {
	var cursor = document.getElementById('cursor');
	cursor.classList.add('textcursor');
}
function untextcursor() {
	var cursor = document.getElementById('cursor');
	cursor.classList.remove('textcursor');
}
function blackcursor() {
	var cursor = document.getElementById('cursor');
	cursor.classList.add('blackcursor');
}
function unblackcursor() {
	var cursor = document.getElementById('cursor');
	cursor.classList.remove('blackcursor');
}



/* █ WINDOW POPUP  ███████████████████████████████████████████ */
function showwindow(divID) {
	var item = document.getElementById(divID);
	console.log("showwindow fired" + item + "");
	item.classList.remove('hidden');
}
function hidewindow(divID) {
	console.log("hidewindow fired");
	var item = document.getElementById(divID);
	item.classList.add('hidden');
}

function pinactive(divID) {
	console.log("hidewindow fired");
	var item = document.getElementById(divID);

	if (item.classList.contains('itemactive')) {
	}
	else {
		item.classList.add('itemactive');

		setTimeout(function () {
			item.classList.remove('nointeract');
		}, 350);
		item.classList.add('nointeract');
	}
}
function pindeactive(divID) {
	console.log("showwindow fired");
	var item = document.getElementById(divID);
	item.classList.remove('itemactive');
}

function permashowwindow(divID) {
	console.log("showwindow fired");
	var item = document.getElementById(divID);
	item.classList.remove('goneReducedToAtoms');
	setTimeout(function () {
		item.classList.remove('hidden');
	}, 10);
}

function permahidewindow(divID) {
	console.log("hidewindow fired");
	var item = document.getElementById(divID);
	item.classList.add('hidden');
	setTimeout(function () {
		item.classList.add('goneReducedToAtoms');
	}, 200);
}

function pausevideo(divID) {
	console.log("pausevideo fired");

	var div = document.getElementById(divID);
	var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
	// func = state == 'hide' ? 'pauseVideo' : 'playVideo';
	iframe.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	// iframe.postMessage('{"event":"command","func":"setVolume(volume:10)","args":""}', '*');
	// player.setVolume(volume:10)
}


function gotolink(inURL) {
	var theURL = inURL;
	console.log("REQUESTED URL " + theURL);
	window.open(theURL);
}

function gotolinkself(inURL) {
	var theURL = inURL;
	console.log("REQUESTED URL " + theURL);
	window.open(theURL,"_self");
}

function hideintro(divID) {
	console.log("hidewindow fired");
	var item = document.getElementById(divID);
	item.classList.add('hidden');

	setTimeout(function () {
		item.classList.add('goneReducedToAtoms');
	}, 1000);
}



/* █ TOGGLE ADD WINDOW  ███████████████████████████████████████████ */

window.addpopupstate = 0;

function toggleadd() {
	var thepopup = document.getElementById("contentadd");
	var thebutton = document.getElementById("addbtn");

	var thewindow = document.getElementById("contentadd");

	if (window.addpopupstate == 0) { //show
		console.log("SHOW THE THINGY");

		thebutton.classList.add('topbuttonactive');

		setTimeout(function () {
			thepopup.classList.remove('hidden');
		}, 100);

		setTimeout(function () {
			thepopup.classList.add('activepoitner');
		}, 150);

		thewindow.classList.remove('goneReducedToAtoms');
		window.addpopupstate = 1;
	}
	else { //hide
		console.log("HIDE THE THINGY");

		thepopup.classList.add('hidden');
		thepopup.classList.remove('activepoitner');
		thebutton.classList.remove('topbuttonactive');

		setTimeout(function () {
			thewindow.classList.add('goneReducedToAtoms');
		}, 100);

		window.addpopupstate = 0;
	}
}
