// // const height = document.querySelector("#height span");
// var width = window.innerWidth;
//
// // Insert values on load of page
// window.onload = function() {
// 		if (width < 729) {
// 				document.getElementById('topnavContainer').classList.add('goneReducedToAtoms');
// 				document.getElementById('topnavContainer').classList.add('hidden');
// 		}
// 		else {
// 			document.getElementById('topnavContainer').classList.remove('goneReducedToAtoms');
// 			document.getElementById('topnavContainer').classList.remove('hidden');
// 		}
// };

window.onresize = function() {
	width = window.innerWidth;

	console.log("fired " + width);

	if (width < 789) {
		document.getElementById('topnavContainer').classList.add('goneReducedToAtoms');
		document.getElementById('topnavContainer').classList.add('hidden');
	}
	else {
		document.getElementById('topnavContainer').classList.remove('goneReducedToAtoms');
		document.getElementById('topnavContainer').classList.remove('hidden');
	}
};

function animatenavitem(divID) {
	var item = document.getElementById(divID);
	item.classList.add('navitemselected');
	item.classList.remove('navItemactive');

	// const height = document.querySelector("#height span");
	var width = window.innerWidth;

	// Insert values on load of page
	if (width < 789) {
		console.log("COMPACT MENUBAR FIRED ON LAUNCH, HIDE " + width);
		setTimeout(function () {
			document.getElementById('topnavContainer').classList.add('goneReducedToAtoms');
			document.getElementById('topnavContainer').classList.add('hidden');
		}, 250);
	}
}


function showexpandedcompactmenu(divID) {
	console.log("showwindow fired");
	var item = document.getElementById(divID);
	item.classList.remove('goneReducedToAtoms');
	setTimeout(function () {
		item.classList.remove('hidden');
	}, 10);
}
function hideexpandedcompactmenu(divID) {
	console.log("PERMA hidewindow fired");
	var item = document.getElementById(divID);

	//reject further interactions while animating.
	if (item.classList.contains('goneReducedToAtoms')) {
	}
	else {
		item.classList.add('hidden');
		item.classList.add('nointeract');

		setTimeout(function () {
			item.classList.remove('nointeract');
			item.classList.add('goneReducedToAtoms');
		}, 200);
	}
}

/* █ IRRELEVANTTT  ███████████████████████████████████████████ */
/* █ IRRELEVANTTT  ███████████████████████████████████████████ */
/* █ IRRELEVANTTT  ███████████████████████████████████████████ */
/* █ IRRELEVANTTT  ███████████████████████████████████████████ */



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

/* █ CHANGE PIN STYLE ███████████████████████████████████████████ */
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

/* █ SHOW / HIDE WINDOW AND DISABLE INTERACTION ███████████████████████████████████████████ */
function permashowwindow(divID) {
	console.log("showwindow fired");
	var item = document.getElementById(divID);
	item.classList.remove('goneReducedToAtoms');
	setTimeout(function () {
		item.classList.remove('hidden');
	}, 10);
}
function permahidewindow(divID) {
	console.log("PERMA hidewindow fired");
	var item = document.getElementById(divID);

	//reject further interactions while animating.
	if (item.classList.contains('goneReducedToAtoms')) {
	}
	else {
		item.classList.add('hidden');
		item.classList.add('nointeract');

		setTimeout(function () {
			item.classList.remove('nointeract');
			item.classList.add('goneReducedToAtoms');
		}, 200);
	}
}

/* █ PAUSE IFRAME YOUTUBE VIDEO ███████████████████████████████████████████ */
function pausevideo(divID) {
	console.log("pausevideo fired");

	var div = document.getElementById(divID);
	var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
	iframe.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
}

/* █ OPEN LINKS ███████████████████████████████████████████ */
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

/* █ FADEOUT TITLE ███████████████████████████████████████████ */
function hideintro(divID) {
	console.log("hidewindow fired");
	var item = document.getElementById(divID);
	item.classList.add('hidden');

	setTimeout(function () {
		item.classList.add('goneReducedToAtoms');
	}, 1000);
}
