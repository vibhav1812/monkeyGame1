
var monkey , monkey_running
var ground;
var obstacle;
var banana ,bananaImage,obstacleImage, bananaGroup,obstacleGroup;
var FoodGroup, obstacleGroup
var score
var survivaltime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}



function setup() {
createCanvas(400,400);  
  
monkey = createSprite(30,315,20,20);
monkey.addAnimation("running",monkey_running);
monkey.scale = 0.1;
  
ground = createSprite(400,350,900,10);
ground.velocityX = -4;
 
  
  
}


function draw() {
background("aliceBlue")
 
 
stroke("black");
textSize(20);
fill("black");
survivaltime = Math.ceil(frameCount/35)
text("Survival Time: " + survivaltime, 100,50)  
  
if(keyWentDown("space")) {
  monkey.velocityY = -15
} 
  monkey.velocityY = monkey.velocityY +0.5


  
  
monkey.collide(ground)  
ground.x = ground.width/2;
drawSprites();  
food();
obstacle1()

}

function food(){
  if(frameCount%80 ===0){
    banana = createSprite(601,round(random(120,200)), 20,20)
    banana.addImage(bananaImage);
    banana.scale = 0.09;
    banana.velocityX = -4
    banana.lifetime = 201
    bananaGroup.add(banana);
  }
}

function obstacle1(){
if(frameCount%300 === 0){
 obstacle = createSprite(400,310,20,20);
 obstacle.addImage(obstacleImage);
 obstacle.scale = 0.2
 obstacle.velocityX = -4;
 obstacle.lifetime = 201;
}
 
}






