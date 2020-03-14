var tileCount = 20;

var r;
var g;
var b;

var cube=45;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //IF NO noLoop(); THEN RANDOM DOES NOT STOP
  //YOU CAN ADD TO ABOVE frameRate(1); IF YOU LIKE RANDOMNESS BUT WANT TO SLOW DOWN;
  noLoop();
}

function draw() {
	background(220);
	noStroke();

	r = 255;
	g = 100;
	b = 100;

	for (j=0; j<tileCount; j++) {


		for (i=0; i<tileCount; i++) {

			
			var x=i*cube;
			var y=j*cube;

			c=color(random(r), random(g), random(b));

			fill(255,17,0);
			ellipse(x,y,i,i);
			fill(c);
			rect(x, y, cube, cube);


		}
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}