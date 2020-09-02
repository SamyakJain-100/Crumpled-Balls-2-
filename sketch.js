const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world, engine ;
var  ground;
var rectangle1,rectangle2,rectangle3;
var paper1 ;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;
	
	
	paper1 = new Paper(100,600);
	ground= new Ground(700,height,1500,20);
	

	//rectangle1 =  new Dustbin (500,630,20,100, PI/2);
	//rectangle2 =  new Dustbin (680,630,20,100, PI/2);
	rectangle3 =  new Dustbin (640,680,150,20, PI/2);



	Engine.run(engine);
  
}


function draw() {
  background(255);
 
  rectMode(CENTER);
	
  paper1.display();
	ground.display();	
	//rectangle1.display();
	//rectangle2.display();
	rectangle3.display();
	drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   // Look at the hints in the dsocument and understand how to make the package body fall only on
	   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:60, y:-85});

   
   
	 }
   }
