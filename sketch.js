const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box,ground1,box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
   box = new Box (200,300,50,40);
   box1 = new Box (210,100,50,90);
   ground1 = new Ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box.display();
    ground1.display();
    box1.display();
}