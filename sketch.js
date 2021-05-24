
var monkey , monkey_running, monkeyStop
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground, invisibleGround
var obstaclesGroup, bananaGroup
var PLAY = 1;
var END = 0;
var gameState = PLAY;
 var score, SurvivalTime
function preload(){
  
  
  monkeyStop_collided = loadAnimation("sprite_5.png");
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 300);
monkey = createSprite(50,300,20,50);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.1
  
 bananaGroup = createGroup();
   obstaclesGroup = createGroup();
  
  ground = createSprite(275,300,650,10);
  ground.x = ground.width /2;

  invisibleGround = createSprite(275,300,650,10);
invisibleGround.visible = false;
  
     
 SurvivalTime = 0;
  score = 0;
}


function draw() {
  background("white");
text("Survival Time: "+ SurvivalTime, 250,50);
  text("Score: "+ score, 380,50);
 if(gameState === PLAY){
   


    if(obstaclesGroup.isTouching(monkey)){
    gameState = END;
  }
   if(obstaclesGroup.isTouching(monkey)){
    gameState = END;
  }
   if(bananaGroup.isTouching(monkey)){
     bananaGroup.destroyEach()
    score = score + 1;
  }
  
     }
  
  if(keyDown("space")&& monkey.y >= 150){
        monkey.velocityY = -12; 
    
    }
    monkey.velocityY = monkey.velocityY + 0.8;
   
     
   
   
   monkey.collide(invisibleGround);
   
SurvivalTime = SurvivalTime + Math.round(getFrameRate()/60);
  
    if(gameState === END){
      obstaclesGroup.setLifetimeEach(-1);
      bananaGroup.setLifetimeEach(-1);
     obstaclesGroup.setVelocityXEach(0);
     bananaGroup.setVelocityXEach(0);
      bananaGroup.destroyEach()
      obstaclesGroup.destroyEach()
      SurvivalTime = 0;
      textSize(32);
      text('GAME OVER!!!', 250, 100)
     ground.velocityX = 0;
    }
  
 
 spawnObsacles();
  spwanBanana();
  
  drawSprites();
  
}
function spawnObsacles(){
  if(frameCount % 180 === 0){
    var obstacle = createSprite(600,298,10,40);
   var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: obstacle.addImage(obstacleImage);
              break;
      case 2: obstacle.addImage(obstacleImage);
              break;
              default: break;
    }
    obstacle.velocityX = -2     
    obstacle.scale = 0.2;
     obstacle.lifetime = 300;
    
    obstaclesGroup.add(obstacle);
  }
  
}
function spwanBanana(){
     if (frameCount % 80 === 0) {
    var banana = createSprite(600,200,40,10);
    banana.y = Math.round(random(400,150));
       banana.addImage(bananaImage)
       banana.scale = 0.1;
        banana.velocityX = -3;
        bananaGroup.add(banana)
     }
}




