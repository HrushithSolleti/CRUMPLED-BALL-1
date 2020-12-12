
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,dustbin1,ground1;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1=new paper(200,400,40)
dustbin1=new dustbin(1000,400)
ground1 = new ground(width/2,670,width,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  paper1.display();
  ground1.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
  
	}
}


