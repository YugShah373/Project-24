
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var side1, side2, side3;
var crushed;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	side1 = rectangle(800, 650, 10, 50);
	side2 = rectangle(800, 650, 50, 10);
	side3 = rectangle(750, 650, 10, 50);
	crushed = new Paper(200, 650, 3);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(crushed.body, crushed.body.position, {x:85, y:-85});	
	}
}



