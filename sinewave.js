
var angleInc = 0.036;



function setup () {

	createCanvas(windowWidth,windowHeight);
	noStroke();

}

function draw() {
	background(22);
	var scale = 300;
	var offset=200.0;
	var angle=10;

	var bruitC=0.001;
	var posC=noise(millis()*bruitC)*20;

	var bruitD=0.000001;
	var posD=noise(millis()*bruitD)*100;


	angleInc += 0.0001;

	for (var x=0; x<=width; x+=posD){
		var y=offset + (sin(angle) * scale);
		noFill();
		stroke(0);

		fill(10);
		ellipse(x, y, posC, posC);

		y=offset + (tan(angle) * scale);
		fill(25, 100, 100);
		ellipse(x, y, 44, 44);
		angle += angleInc*1000;

	}



	

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}