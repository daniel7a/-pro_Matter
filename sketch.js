
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	var block1_options ={
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	}
	block1 = Bodies.circle(220,10,10,block1_options)
	World.add(World,block1)

	var block2_options ={
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}
	block2 = Bodies.rectangle(110,50,10,10,block2_options)
	World.add(World,block2)

	var block3_options ={
		restitution:0.1,
		friction:1,
		frictionAir:0.3
	}
	block3 = Bodies.circle(350,50,10,10,block3_options)
	World.add(World,block3)
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var plane_options={
		isStatic:true
	}


	Engine.run(engine);
	engine.update(engine)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



