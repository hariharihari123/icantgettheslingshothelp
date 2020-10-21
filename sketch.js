
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ti,t,r,m,m1,m2,m3,m4,m5,test;
function preload()
{
ti = loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
t = createSprite(600,480,20,20);
t.addImage(ti);
t.scale = 0.3;

m = new mango(200,50);
m2 = new mango(100,100);

test = new rock(m.body,{x:100, y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200,0,100);
  drawSprites();
  m.display();
  m2.display();


}



