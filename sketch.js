
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
//Image
boy = loadImage("boy.png");
treeImg= loadImage("tree.png")
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  //Platform
	platform=new Ground(500, 600, 1000, 50)
  //Juno
  juno =createSprite(250,460,50,50)
  juno.addImage(boy)
  juno.scale=0.2
  //Mango
  mango1 =new Mango(778, 290, 30)
  mango2 =new Mango(700, 320, 30)
  mango3 =new Mango(630, 320, 30)
  mango4 =new Mango(570, 265, 30)
  mango5 =new Mango(900, 280, 30)
  mango6 =new Mango(970, 280, 30)
  //Tree
  tree =createSprite(780,300,100,100)
  tree.scale=0.5
  tree.addImage(treeImg)

//UNCOMMENT SPRITE WHEN FINISHED

  //Throwable stone
  stone=new Stone(150, 360, 100, 100)
	slingshot=new SlingShot(stone.body, {x:150, y:360})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(57, 187, 196);

  //Body Display
  
  //Stone
  slingshot.display();
  stone.display();
  
  //Juno
  juno.display();

  //Tree
  tree.display();

  //Platform
  platform.display();

  //Mangoes
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  //Test Space
//  juno.depth=stone.depth
//  juno.depth=-1

  //Detectollision
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);


  drawSprites();
 
}



function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
      slingshot.attach(stone.body);
   }
  }

  function detectollision(lstone,lmango){
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    if(distance<=lmango.r+lstone.height)
    {
      Matter.Body.setStatic(lmango.body,false)
    }
}
