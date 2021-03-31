
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject = new ground(width / 2 , 670, width,20);
	dustbinObj = new dustbin(1200,650);
	paper = new Paper(200, 620, 70)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  if (keyDown("f")) {
	console.log("presses f key");
	var vectorA = Matter.Vector.create(200,620)
	var vectorB = Matter.Vector.create(50,50)


	Matter.Body.applyForce(paper.body, paper.body.position, { x: 2000, y: -2600 });
	Matter.Body.applyForce(paper.body, vectorA, vectorB);
}


  
 
  groundObject.display();
  dustbinObj.display();
  paper.display();

}

