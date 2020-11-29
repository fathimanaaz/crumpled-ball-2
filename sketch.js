const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperObject,groundObject;
var world;
var officeRoomImage;

function preload()
{
	officeRoomImage = loadImage("sprites/zz.jpg")	
	  
}

function setup() {
	createCanvas(1250, 650);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper();
	groundObject=new Wall(width/2,620,width,20);
	dustbin1=new Wall(1180,505,20,210);
	dustbin2=new Wall(1020,505,20,210);
	dustbin3=new Wall(1100,600,180,20);
	dustbin4=new Wall2(1100,500,210,225);
	
	//Create a Ground


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(officeRoomImage);
 
  
  paperObject.display();
  groundObject.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  dustbin4.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:450,y:-400}); 
  
	}
}