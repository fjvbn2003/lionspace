
var ship;
var rotation = 0;
var asteroids = [];
var lasers = [];
let img_lion;
let img_tiger;
let img_rabbit;
let img_deer;
let img_el;
let unit = 55;
let count;
let grass = [];
let c;
let temp;


function preload(){

}

function setup() {
	img_lion = loadImage('/static/images/lion.png');
	img_tiger = loadImage('/static/images/tiger.png');
	img_rabbit = loadImage('/static/images/rabbit.png');
	img_deer = loadImage('/static/images/deer.png');
	img_el = loadImage('/static/images/el.png');
  var canvas = createCanvas(930, 600);
 	canvas.parent('sketch-holder');
	ship = new Ship();
	for(i = 0 ; i < 10 ; i++){
		asteroids.push(new Asteroid());
	}

	let wideCount = width / unit;
  let highCount = height / unit;
  count = wideCount * highCount;
  
  let index = 0;
  for (let y = 0; y < highCount; y++) {
    for (let x = 0; x < wideCount; x++) {
       grass[index++] = new Grass(
        x * unit + random(0.05, 8),
        y * unit ,
        unit / 2,
        unit / 2,
        random(0.05, 0.8),
        unit
      );
		}
	}
	// grass = new Grass();
	// img = loadImage('images/lion.jpg');
//	bg = loadImage();
}

function draw() {
	background(255);
	// grass.update();
	// grass.render();
	// grass.darw();
	for (let i = 0; i < count; i++) {
    grass[i].update();
    grass[i].render();
  }

	
	for ( var i  = 0; i <asteroids.length; i++) {
		if (ship.hits(asteroids[i])){
			console.log('oopps');
		}
		var temp = i%4;
		if(temp == 0){
			asteroids[i].render(img_tiger);
		}
		else if(temp == 1){
			asteroids[i].render(img_deer);
		}
		else if(temp == 2){
			asteroids[i].render(img_rabbit);
		}
		else if(temp == 3){
			asteroids[i].render(img_el);
		}
		asteroids[i].update();
		asteroids[i].edges();
	}

	for ( var i  = lasers.length-1; i >= 0; i--) {
		lasers[i].render();
		lasers[i].update();
		if (lasers[i].offscreen()){
			lasers.splice(i, 1);
		} else{
			for ( var j  = asteroids.length-1; j >= 0; j--) {
				if (lasers[i].hits(asteroids[j])){
					if ( asteroids[j].r > 30){
					var newAsteroids = asteroids[j].breakup();
					console.log(newAsteroids);
					asteroids = asteroids.concat(newAsteroids);
					//asteroids.push(newAsteroids);
					}
					else{	
					}
					asteroids.splice(j,1);
						lasers.splice(i,1);
						break;
				}
			}
	}
		
	}

	ship.render(img_lion);
	ship.turn();
	ship.update();
	ship.edges();
	console.log(lasers.length);
}

function keyReleased(){
	ship.setRotation(0);
	ship.boosting(false);
}

function keyPressed(){
	if (key == ' '){
		lasers.push(new Laser(ship.pos, ship.heading));
	}
	else if (keyCode == RIGHT_ARROW){
		ship.setRotation(0.1)
	}
	else if(keyCode == LEFT_ARROW){
		ship.setRotation(-0.1);
	}
	else if(keyCode == UP_ARROW){
		ship.boosting(true);
	}
}