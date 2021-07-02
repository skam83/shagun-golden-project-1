var Shagun;
var bg;
var ground;

var treebranch,puddle,mountain;
var snowmonster;
var snowflakes;
var healthbar;
var bullet;

var  gameState="play";
var score=0;
var life=4;

function preload(){
snowmonster=loadImage("snowMonster2.png");
treebranch=loadImage("hurdl2.png");
bg=loadImage("snowImg2.jpg");
}

function setup()
{

  createCanvas(1000,600);
  
  
  ground=createSprite(600,590,1600,20);
  bkground=createSprite(700,300,2800,600);
  Shagun=createSprite(70,500,55,95);
  bkground.addImage(bg);
  console.log(bkground.x) 
}

function draw()
{
  background("skyblue");
  if(gameState==="play")
  {
    bkground.velocityX=-3;

    if(bkground.x<=50 )   
     {
       console.log(bkground.x)
        bkground.x=bkground.width/2;

    }

    spawnObstacles();
    drawSprites();
  }

    
}

function spawnObstacles()
{
  if (frameCount % 100 === 0)
  {
    var obstacle = createSprite(800,500,10,40);
    obstacle.velocityX = -4;
    
     //generate random obstacles
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: obstacle.addImage(snowmonster);
               break;
       case 2: obstacle.addImage(treebranch);
               break;
       
      default: break;
     }
  }
}