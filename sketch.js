const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine, world;
var bullet,thickness;
var wall,weight,speed;

function setup() {
  createCanvas(1600,400);

  engine = Engine.create();
  world = engine.world;

  bullet = createSprite(10,200,50,10);
  bullet.velocityX = 3;
  bullet.shapeColor = "white";
  speed = random(223,321);
  weight = random(30,52);



  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  thickness = random(22,83);

}

function draw() {
  background(0);
  Engine.update(engine);
  if(wall.x-bullet.x<=wall.width/2+bullet.width/2&&
    bullet.x-wall.x<=wall.width/2+bullet.width/2&&
    wall.y-bullet.y<=wall.height/2+bullet.height/2&&
    bullet.y-wall.y<=wall.height/2+bullet.height/2){
      bullet.velocityX = 0;
      var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

      if (damage>10){
        wall.shapeColor = color(255,0,0);
      }

      if (damage<10){
        wall.shapeColor = color(0,255,0);
      }

 }
  drawSprites();
}

