
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBody,paperObject;
var groundSprite,ground;
var bucket1,bucket2,bucket3;



function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

  groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow");

	engine = Engine.create();
	world = engine.world;

  paperBody=new Paper(100,500,1,1);
  bucket1=new Dustbin(690,610,20,100);
  bucket2=new Dustbin(800,650,200,20);
  bucket3=new Dustbin(890,610,20,100);

  
  
  

  paperObject = Bodies.circle(width/2 , 200 , 5 ,{restitution:0.3, isStatic:true});
  World.add(world, paperObject);
  
  ground = Bodies.rectangle(width/2, 622, width, 10 , {isStatic:true} );
  World.add(world, ground);



  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperBody.x= paperObject.position.x 
  paperBody.y= paperObject.position.y 

  paperBody.display();
  groundSprite.display();
  bucket1.display();
  bucket2.display();
  bucket3.display();
  
  
 
  
 
 
}

function keyPressed(){



  if (keyCode === UP_ARROW){

    Matter.Body.applyForce(paperBody,paperBody.body.position,{x:75,y:-75});
  
  }
}



