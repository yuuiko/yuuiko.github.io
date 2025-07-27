    function showexpandedcompactmenuL(container,RevealDiv,closeDIV) {
        console.log("Show Menu LEFT");
		
		var delayInMilliseconds = 90;

        var item1 = document.getElementById(container);
        var item2 = document.getElementById(RevealDiv);
        var item3 = document.getElementById(closeDIV);

		item1.classList.add('hide');
		
		setTimeout(function() {
			item1.classList.add('reveal');
			item1.classList.add('left');

			item2.classList.add('reveal');
			item3.classList.remove('reveal');
			
			item1.classList.remove('right');
			item1.classList.remove('hide');
		}, delayInMilliseconds);
    }
	function showexpandedcompactmenuR(container,RevealDiv,closeDIV) {
        console.log("Show Menu RIGHT");
		
		var delayInMilliseconds = 90;

        var item1 = document.getElementById(container);
        var item2 = document.getElementById(RevealDiv);
        var item3 = document.getElementById(closeDIV);

		item1.classList.add('hide');
		
		setTimeout(function() {
			item1.classList.add('reveal');
			item1.classList.add('right');

			item2.classList.add('reveal');
			item3.classList.remove('reveal');
			
			item1.classList.remove('left');
			item1.classList.remove('hide');
		}, delayInMilliseconds);
    }
    function hideexpandedcompactmenu(divID,divID2,divID3) {
		var delayInMilliseconds = 200;
		
		var item1 = document.getElementById(divID);
		var item2 = document.getElementById(divID2);
		var item3 = document.getElementById(divID3);
		
		item1.classList.add('hide');
		
		setTimeout(function() {
			console.log("HIDE Menu");
			item1.classList.remove('reveal');
			item1.classList.remove('left');
			item1.classList.remove('right');
			item2.classList.remove('reveal');
			item3.classList.remove('reveal');
			
			item1.classList.remove('hide');
		}, delayInMilliseconds);
    }
	// █████ MENUBAR LOGIC █████████████████████████████████████████████████