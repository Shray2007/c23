const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground1;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2= new Box(215,100,50,100);
    ground1= new Ground(500,580,1000,10);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   ground1.display();
}