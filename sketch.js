
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box, box1, box2,ground;
var engine, world;
var ball1;

function preload()
{
	this.image=loadImage("sprites/ball.png");
	this.image=loadImage("sprites/dustbin.png");
}

function setup() {
	createCanvas(1300, 400);

	
	engine = Engine.create();
	world = engine.world;

	box=new DustbinClass(1100,345,200,20);
	box.shapeColor="white";

	box1=new DustbinClass(1000,305,20,100);
	box1.shapeColor="white";
	
	box2=new DustbinClass(1200,305,20,100);
	box2.shapeColor="white";
	
	ball1=new ball(100,100,20);

	ground= new Ground(420,370,1800,20);
	ground.shapeColor="yellow";

	//Matter.Bodies.circle(56, 46, 10);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  ground.display();
 box.display();
 box1.display();
 box2.display();
 ball1.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:60,y:-60})
	}
}



