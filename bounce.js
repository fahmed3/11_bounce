var svg = document.getElementById("svg");
var clear = document.getElementById("clear");
var goID;

var bounce = function(e){
	var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	var x = e.offsetX;
        var y = e.offsetY;
	var velocityX = 1;
	var velocityY = 1;
	c1.setAttribute("cx", x);
	c1.setAttribute("cy", y);
        c1.setAttribute("r", 30);
	c1.setAttribute("fill", "blue");
	svg.appendChild(c1);
	
	var go = function(){
		console.log("x = " + x);
		console.log("y = " + y);
		x += velocityX;
		y += velocityY;
		c1.setAttribute("cx", x);
		c1.setAttribute("cy", y);
		if (x <= 0 || x >= 480){
			velocityX *= -1;
		}
		else if (y <= 0 || y >= 480){
			velocityY *= -1;
		}
	}
	
	goID = setInterval(go, 10);
}

var erase = function(){
	while(svg.lastChild){
		svg.removeChild(svg.lastChild);
	}
	if (!(goID == null)){
		clearInterval(goID);
	}
}

svg.addEventListener("click", bounce);
clear.addEventListener("click", erase);
