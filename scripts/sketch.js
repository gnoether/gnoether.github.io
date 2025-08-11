let sigma = 10;
let beta  = 8 / 3;
let rho   = 28;
let pointsArray = [];
let DT = 0.003;
let startTime = 50;
let angle = 0;


function setup() {
    let canvas_parent = document.getElementById("sketch-container")
	let canvas = createCanvas(
		canvas_parent.offsetWidth,
		canvas_parent.offsetHeight,
		WEBGL
    );

    canvas.parent("#sketch-container");
    
	pointsArray.push(new Point(
		random(0.1, 0.7), random(0.1, 0.7), random(0.1, 0.7),
		[228, 178, 79]));

	pointsArray.push(new Point(
		random(0.1, 0.7), random(0.1, 0.7), random(0.1, 0.7),
		[123, 29, 107]));
	
	pointsArray.push(new Point(
		random(0.1, 0.7), random(0.1, 0.7), random(0.1, 0.7),
		[237, 80, 39]));
    
    let time = 0.0;
    while (time < startTime)
    {
        for (let point of pointsArray) {
	    	point.calculate();
        }
        time += DT;
    }
}

function windowResized() {
    let canvas_parent = document.getElementById("sketch-container")
    resizeCanvas(
		canvas_parent.offsetWidth,
		canvas_parent.offsetHeight
    );
}

function draw() {
	scale(10);
	rotateY(angle);
	background(0);
    
    let mid = createVector(0, 0, 0);
    mid.sub(pointsArray[0].getMidpoint())
    mid.sub(pointsArray[1].getMidpoint())
    mid.sub(pointsArray[2].getMidpoint())
    mid.div(3);
    translate(mid)

	for (let point of pointsArray) {
		point.calculate();
		point.show();
	}
	
	angle += 0.002;
}

