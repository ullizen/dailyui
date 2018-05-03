var showtear = false;
	var poweron = false;
	function changecolor(color){
		document.getElementById("body").style.background = color;
	}

	function togglebuttons(){
		document.getElementById("play-button").style.background = "#eee";
		document.getElementById("play-button").style.color = "#000";
		document.getElementById("pause-button").style.background = "#eee";
		document.getElementById("pause-button").style.color = "#000";
		document.getElementById("stop-button").style.background = "#eee";
		document.getElementById("stop-button").style.color = "#000";
	}

	function jump(){
		if (!poweron) {
			return;
		}
		document.getElementById("app").style.animation = "jump 1.8s cubic-bezier(0, 0.47, 0.32, 1.5) infinite";
		document.getElementById("shadow").style.animation = "shrink 1.8s cubic-bezier(0, 0.47, 0.32, 1.5) infinite";

		togglebuttons();
		document.getElementById("play-button").style.background = "rgb(100, 100, 100)";
		document.getElementById("play-button").style.color = "#fff";
	}

	function jump2(){
		if (!poweron) {
			return;
		}
		document.getElementById("app").style.animationPlayState = "paused";
		document.getElementById("shadow").style.animationPlayState = "paused";
		document.getElementById("app").style.webkitAnimationPlayState = "paused";
		document.getElementById("shadow").style.webkitAnimationPlayState = "paused";

		togglebuttons();
		document.getElementById("pause-button").style.background = "rgb(100, 100, 100)";
		document.getElementById("pause-button").style.color = "#fff";
		
	}

	function stop(){
		document.getElementById("app").style.animation = "jump2 1.8s cubic-bezier(0, 0.47, 0.32, 1.5) infinite";
		document.getElementById("shadow").style.animation = "none";

		togglebuttons();
		document.getElementById("stop-button").style.background = "rgb(100, 100, 100)";
		document.getElementById("stop-button").style.color = "#fff";
	}

	stop();

	function tear(){
		showtear = !showtear;	

		if (showtear){
			document.getElementById("tear").style.opacity = 1;
			document.getElementById("tear-glow").style.opacity = 1;
			document.getElementById("tear-button").style.background = "rgb(83, 143, 199)";
			document.getElementById("tear-button").style.color = "#fff";
		} else {
			document.getElementById("tear").style.opacity = 0;
			document.getElementById("tear-glow").style.opacity = 0;
			document.getElementById("tear-button").style.background = "#eee";
			document.getElementById("tear-button").style.color = "#000";
		}
	}

	function poweronoff(){
		poweron = !poweron;

		if (poweron) {
			document.getElementById("power-button").style.background = "#f46156";
			document.getElementById("power-button").style.color = "#fff";
			document.getElementById("app").style.opacity = 1;
			document.getElementById("shadow").style.opacity = 0.2;
		} else {
			document.getElementById("power-button").style.background = "#eee";
			document.getElementById("power-button").style.color = "#000";
			document.getElementById("app").style.opacity = 0;
			document.getElementById("shadow").style.opacity = 0;
			stop();
			fixit();
		}
		
	}

	function random() {
		var x1 = Math.floor(Math.random() * 16) - 8;
		var y1 = Math.floor(Math.random() * 16) - 8;
		var y2 = Math.floor(Math.random() * 16) - 4;
		var xt = x1 + 63;
		var yt = y1 + 51;
		document.getElementById("left-eye").style.transform = "translate(" + -x1 + "px," + y1 + "px)";
		document.getElementById("right-eye").style.transform = "translate(" + x1 + "px," + y1 + "px)";
		document.getElementById("tear").style.transform = "translate(" + xt + "px," + yt + "px) scale(0.5, 0.5)";
		document.getElementById("tear-glow").style.transform = "translate(" + x1 + "px," + y1 + "px)";
		document.getElementById("mouth").style.transform = "translate(" + 0 + "px," + y2 + "px)";
	}

	function fixit() {
		document.getElementById("left-eye").style.transform = "translate(" + 0 + "px," + 0 + "px)";
		document.getElementById("right-eye").style.transform = "translate(" + 0 + "px," + 0 + "px)";
		document.getElementById("mouth").style.transform = "translate(" + 0 + "px," + 0 + "px)";
		document.getElementById("tear").style.transform = "translate(" + 63 + "px," + 51 + "px) scale(0.5, 0.5)";
		document.getElementById("tear-glow").style.transform = "translate(" + 0 + "px," + 0 + "px)";
	}