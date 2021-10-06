


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
	console.log("showwindow fired");
	var item = document.getElementById(divID);
	item.classList.remove('hidden');
}

function hidewindow(divID) {
	console.log("hidewindow fired");
	var item = document.getElementById(divID);
	item.classList.add('hidden');
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



/* █ CREATE ELEMENT  ███████████████████████████████████████████ */

//ID number counter
window.dtlNum = 80;

function createelement() {

	var addto = document.getElementById("window");

	//variables for content
	var dtlEmoji = "🤨";
	var dtlTitle = "Untitled";
	var dtlAuthor = "Anonymous";
	var dtlComment = "No comment!";

	// Get contents of textboxes
	let inputEmo = document.getElementById("inpEmoji").value;
	let inputTtl = document.getElementById("inpTitle").value;
	let inputAuth = document.getElementById("inpAuthor").value;
	let inputComm = document.getElementById("inpComment").value;

	//check and set content
	if (inputEmo != "") {
		dtlEmoji = inputEmo;;
	}

	if (inputTtl != "") {
		dtlTitle = inputTtl;
	}

	if (inputAuth != "") {
		dtlAuthor = inputAuth;
	}

	if (inputComm != "") {
		dtlComment = inputComm;
	}

	//variables for placement
	var pospinX = "left";
	var pospinY = "top";
	var posX = 50;
	var posY = 50;

	//calculate random placement
	var randomnumX = Math.random();
	var randomnumY = Math.random();

	randomnumX = randomnumX * 100;
	randomnumY = randomnumY * 100;

	posX = randomnumX;
	posY = randomnumY;

	//if position greater than 50 for X or Y, flip number and pin to opposite side of screen
	if (randomnumX <= 50) {
		posX = randomnumX;
		pospinX = "left";
	}
	else {
		// console.log(" ORIGINALX " + randomnumX);
		posX = 100 - randomnumX;
		// console.log(" NEWX " + posX);
		pospinX = "right";
	}

	if (randomnumY <= 50) {
		posY = randomnumY;
		pospinY = "top";
	}
	else {
		// console.log(" ORIGINALY " + randomnumY);
		posY = 100 - randomnumY;
		// console.log(" NEWY " + posY);
		pospinY = "bottom";
	}

	//create new sticker
	var create = document.createElement("A");

	create.id = 'item' + dtlNum;
	create.className = 'item';
	create.setAttribute("onmouseover", "excitecursor(); showwindow('content" + dtlNum + "')");
	create.setAttribute("onmouseout", "normalcursor(); hidewindow('content" + dtlNum + "')");
	create.setAttribute("onclick", "hidewindow('content" + dtlNum + "')");
	create.setAttribute("style", pospinY + ": " + posY + "vh; " + pospinX + ": " + posX + "vw;");
	create.innerHTML = dtlEmoji;

	addto.appendChild(create);

	//create new popup window for sticker
	var createdpopup = document.createElement("DIV");

	createdpopup.id = 'content' + dtlNum;
	createdpopup.className = 'textwindow hidden';
	createdpopup.setAttribute("style", pospinY + ": " + posY + "vh; " + pospinX + ": " + posX + "vw; transform-origin: " + pospinY + " " + pospinX + ";");
	createdpopup.innerHTML = "<p><span class='itemname'>" + dtlTitle + "</span><br><span class='itemsubtitle'>Written by " + dtlAuthor + "</span><br><span class='itemdescription'>" + dtlComment + "</span><br></p>";

	addto.appendChild(createdpopup);

	//countup ID number
	window.dtlNum++;

	//add a nice touch
	document.getElementById("addbtn2").innerHTML = "Add Me In Somewhere Again"
}
