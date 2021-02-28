const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bat,ball,stump1,stump2;
var ground,slingshot;
var batImage,ballImage,stumpsImage1,stumpImage2;

var score = 0;

function preload()
{
ballImage=loadImage("ball.png");
batImage=loadImage("bat.png");
stumpImage1=loadImage("stumps.jpg");
stumpImage2=loadImage("stumps.jpg");
bg=loadImage("bg.png");
fielder1=loadImage("fielder1.jpg");
fielder2=loadImage("fielder2.jpg");
fielder3=loadImage("fielder3.jpg");
fielder4=loadImage("fielder4.jpg");
fielder6=loadImage("fielder6.jpg");
fielder7=loadImage("fielder7.jpg");
umpire=loadImage("umpire.jpg");
kid3=loadImage("kid3.jpg");
kids=loadImage("kids.jpg");
audience=loadImage("audience.png");
audience2=loadImage("audience2.png");
audience3=loadImage("audience3.jpg")
cheer1=loadImage("cheer1.jpg");
cheer2=loadImage("cheer2.jpg");
cheer3=loadImage("cheer3.jpg");

}

function setup() {
 var canvas= createCanvas(1000,400);

  engine = Engine.create();
  world = engine.world;

  ground=new Ground(600,400,1200,20);
  bat=new Bat(250,350,30,100,PI/2);
  ball=new Ball(800,200,20);
  stump1=new Stumps(30,350,80,100);
  stump2=new Stumps(900,350,80,100);
  
//string=new String(bat.body,{x:250,y:250})
}

function draw() {
 Engine.update(engine)
 background(bg)
 ground.display();
bat.display();
ball.display();
stump1.display();
image(audience,700,120,300,100);
image(audience2,0,120,300,100);
image(audience3,350,130,300,100);
image(kids,200,220,100,50);
image(kid3,600,190,100,80);
image(cheer2,350,160,200,100);
image(fielder1,200,200,100,130);
image(fielder2,300,180,120,130);
image(fielder3,500,200,150,130);
image(fielder4,600,200,150,130);
image(fielder6,50,200,150,130);
image(fielder7,800,200,150,130);
image(umpire,850,230,100,150);


stump2.display();
detectCollision(stump1,ball);
detectCollision(stump2,ball);
detectCollision(bat,ball);


}
function detectCollision(lstumps,lball){
  ballPosition=lball.body.position
  stumpsPosition=lstumps.body.position

var distance=dist(ballPosition.x,ballPosition.y,stumpsPosition.x,stumpsPosition.y)
if(distance<=lball.radius+lstumps.width){
  Matter.Body.setStatic(lstumps.body,false);
}
}



function keyPressed(){
  if(keyCode===32){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:-2.3,y:-2.3})
   
  }
  
}
function detectC(lball,lbat){
  ballPosition=lball.body.position
  batPosition=lbat.body.position

  var distance=dist(ballPosition.x,ballPosition.x,batPosition.x,batPosition.y)
  if(distance<=lball.radius+lbat.width){
    Matter.Body.applyForce(lball.body,lball.body.position,{x:3,y:-3})
  }
}

