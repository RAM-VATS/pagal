
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world

function preload()
{
	
}

function setup() {
createCanvas(800, 700);
rectMode(CENTER)


	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
	paper=new Paper(100,600,70)
	ground=new Ground(400,680,800,20)

  leftSide=new DustBin(560,620,20,100)
  bottomSide=new DustBin(610,660,100,20)
  rightSide=new DustBin(670,620,20,100)
 
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine)
  ground.display();
  leftSide.display();
  rightSide.display();
  bottomSide.display();
  paper.display();
}
function keyPressed(){
	if(keyCode===UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:13,y:-15})
	}
}


