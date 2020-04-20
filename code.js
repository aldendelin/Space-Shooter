var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["10602251-be29-4017-9909-281598bb971d","3b9497a9-28fa-4a54-be23-981e3bae5e76","f4184452-fcdf-471f-b607-cfb5518967ba","d455d9e9-2c12-422b-9439-95757b8e94fb","1a849918-2af5-4018-9fbd-6e8762d888ad"],"propsByKey":{"10602251-be29-4017-9909-281598bb971d":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"vP6D.R00zxOKtwUnF_jzZCHz4AzKY1xt","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/10602251-be29-4017-9909-281598bb971d.png"},"3b9497a9-28fa-4a54-be23-981e3bae5e76":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":30,"y":33},"frameCount":1,"looping":true,"frameDelay":12,"version":"vuefK2iZKVdQwM2b3437uJa37H8.j0jg","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":33},"rootRelativePath":"assets/3b9497a9-28fa-4a54-be23-981e3bae5e76.png"},"f4184452-fcdf-471f-b607-cfb5518967ba":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"4FYQKr7PPY.xDhbw67Ulhw8v_fuE5.vP","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/f4184452-fcdf-471f-b607-cfb5518967ba.png"},"d455d9e9-2c12-422b-9439-95757b8e94fb":{"name":"animation_4","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"DXPfx.6rCmDc5taShobQAD.15H3u6ruV","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/d455d9e9-2c12-422b-9439-95757b8e94fb.png"},"1a849918-2af5-4018-9fbd-6e8762d888ad":{"name":"space","sourceUrl":null,"frameSize":{"x":600,"y":721},"frameCount":1,"looping":true,"frameDelay":12,"version":"_dL0Du_wuoj1xhBwYbQP6BSz_SYj2a45","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":721},"rootRelativePath":"assets/1a849918-2af5-4018-9fbd-6e8762d888ad.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var gameState = "serve";

var space = createSprite(0, 0 ,400, 400);
space.setAnimation("space");
space.scale = 2.5;
space.y = space.height/2;

var player = createSprite(190, 375,20,20);
player.setAnimation("animation_4");

  
  //creating the player's bullet  
var bullet = createSprite(player.x,player.y,10,10);
bullet.shapeColor = "red";
bullet.destroy();

  var enemy1 = createSprite(50,30, 1, 1);
  enemy1.setCollider("circle",0,0,5);
  
  var enemy2 = createSprite(150, 30, 1, 1);
  var enemy3 = createSprite(250, 30, 1, 1);
  var enemy4 = createSprite(350, 30, 1, 1);
  
var playerScore = 0;

function draw() {
  background(10);
  // space.setAnimation("space");
  player.x = World.mouseX;
  createEdgeSprites();
  player.collide(bottomEdge);
  
  
  
  space.velocityY = 2;
  
  if (space.y > 500) {
    space.y = space.height/2;
  }
  
  if(keyWentDown("space")){
       bullet = createSprite(player.x,player.y,10,10);
       bullet.velocityY= -10;
       playSound("assets/category_hits/8bit_splat.mp3");
       }
       
        if(World.frameCount%200==0){
  enemy1 = createSprite(50,30, 10, 10);
  enemy1.setAnimation("animation_1");
  
  enemy2 = createSprite(150, 30, 10, 10);
  enemy2.setAnimation("animation_2");

  enemy3 = createSprite(250,30, 10, 10);
  enemy3.setAnimation("animation_1");

  enemy4 = createSprite(350, 30, 10, 10);
  enemy4.setAnimation("animation_3");
          randomNumber(enemy1,enemy2,enemy3,enemy4);
          enemy1.velocityY = +2;
          enemy2.velocityY = +2;
          enemy3.velocityY = +2;
          enemy4.velocityY = +2;
        enemy1.lifetime=185;
          enemy2.lifetime=185;
          enemy3.lifetime=185;
          enemy4.lifetime=185;
          
        }          
  
          
  
  if(bullet.isTouching(enemy1)){
        enemy1.destroy();
        playSound("assets/category_explosion/8bit_explosion.mp3")
        playerScore++;
        }  
      
    if(bullet.isTouching(enemy2)){
        enemy2.destroy();
        playSound("assets/category_explosion/8bit_explosion.mp3")
         playerScore++;
        }  
    
    if(bullet.isTouching(enemy3)){
        enemy3.destroy();
        playSound("assets/category_explosion/8bit_explosion.mp3")
         playerScore++;
        }  
    
    if(bullet.isTouching(enemy4)){
        enemy4.destroy();
        playSound("assets/category_explosion/8bit_explosion.mp3")
         playerScore++;
        } 
        
        if(enemy1.collide(bottomEdge)){
          playerScore= playerScore-1;
        }
        
        if(enemy2.collide(bottomEdge)){
          playerScore= playerScore-1;
        }
        
        if(enemy3.collide(bottomEdge)){
          playerScore= playerScore-1;
        }
        
        if(enemy4.collide(bottomEdge)){
          playerScore= playerScore-1;
        }
  
  drawSprites();
  
   if(gameState==="serve"){
      fill("red");
      textSize(20); 
      text("SHOOT ALL THE ENEMIES TO WIN",50,250);
      text("PRESS SPACE TO SHOOT",70,280);
      text("PRESS S TO START",70,320);
      }
      
    if(keyWentDown("s") && gameState === "serve"){
      gameState = "play";  
    }
    
    fill("red");
      textSize(20);
         text("SCORE",150,20);    
         text(playerScore, 230,20);
                                     
   if(playerScore==20){
     fill("red");
    textSize(20);
    text("YOU WON",190,140);
    text("CLICK R TO RESTART",140,170);
    text("GAME OVER",200,30);
          enemy1.velocityY = 0;
          enemy2.velocityY = 0;
          enemy3.velocityY = 0;
          enemy4.velocityY = 0;
          bullet.velocityY=0;
          bullet.visible = false;
    gameState = "over";
   }
   
   if(playerScore==-20){
       fill("red");
      textSize(20);
      text("YOU LOST",190,140);
      text("CLICK R TO RESTART",140,170);
      text("GAME OVER",200,30);
        enemy1.velocityY = 0;
          enemy2.velocityY = 0;
          enemy3.velocityY = 0;
          enemy4.velocityY = 0;
          bullet.velocityY=0;
          bullet.visible = false;
      gameState = "over";
   }
   
   if(keyWentDown("r") && gameState == "over"){
  reset();
    gameState = "serve"; 
}
     
}

function reset() {
  player.x=190;
  player.y=375;
  playerScore=0;
  
}
  

 
   



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
