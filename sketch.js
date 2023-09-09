var gameState="intro3"
var needleAngle=0


function preload(){
  bg=loadImage("bg.jpg")
  lockImg=loadImage("lock.png")
  nextImg=loadImage("next.png")
  livingAreaImg=loadImage("living room.jpg")
  girlAnimation=loadAnimation("girl1.png","girl2.png","girl3.png","girl4.png")
  girlAnimation2=loadAnimation("girl5.png","girl6.png","girl7.png")
  diningArea=loadImage("dining room.jpg")
  bathroom=loadImage("bathroom.jpg")
  speedoMeter=loadImage("speedoMeter.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight)
  
  lock=createSprite(910,530)
  lock.addImage(lockImg)
  lock.scale=0.3

  next=createSprite(width/2+100,450)
  next.addImage(nextImg)
  next.scale=0.3
  
  lever=createSprite(width/2-70,140,10,20)
  lever.rotation=-30
  lever.shapeColor=(200,200,200,0.2)
  lever.visible=false

  girl=createSprite(200,height/2)
  girl.addAnimation("right",girlAnimation)
  girl.addAnimation("left",girlAnimation2)
  girl.scale=1.5

  star1=createSprite(516,180,10,10)
  star1.shapeColor="black"
  star1.visible=false

  star2=createSprite(445,488,10,10)
  star2.shapeColor="white"
  star2.visible=false

  star3=createSprite(322,512,10,10)
  star3.shapeColor="teal"
  star3.visible=false

  star4=createSprite(878,587,10,10)
  star4.shapeColor="yellow"
  star4.visible=false

  star5=createSprite(928,124,10,10)
  star5.shapeColor="green"
  star5.visible=false

  topWall=createSprite(width/2,100,width,20)
  bottomWall=createSprite(width/2,height-100,width,20)
  leftWall=createSprite(150,height/2,20,height)
  rightWall=createSprite(width-200,height/2,20,height)

  tub=createSprite(width/2-150,height-200,600,200)
  tub.visible=false

  needle=createSprite(width/2,height/2-20,10,100)
  needle.visible=false

  topWall.visible=false
  bottomWall.visible=false
  leftWall.visible=false
  rightWall.visible=false

  dark=true

  waterMeter=false

  score=0

}
function draw(){
  
  if(gameState==="start"){
    background(bg)
    next.visible=false
    girl.visible=false

    


    //help 1
    push()
    textSize(50)
    fill("black")
    stroke("yellow")
    strokeWeight(3)
    textAlign(CENTER)
    text("CLICK ON THE LOCK TO ENTER THE ESCAPE HOUSE.",width/2,50)
    textSize(40)
    fill("black")
    stroke("red")
    text("GOOD LUCK !! YOU WILL NEED IT.",width/2,height-50)
    pop()


    //help 2
    if(mousePressedOver(lock)){
      gameState="intro1"
    }
    
  }

  if(gameState==="intro1"){
    background("teal")
    lock.visible=false
    next.visible=true
    girl.visible=false

    //create text for introducing rules of the game using separate text commands
    //refer to help 1 comment above
    push()
    textSize(60)
    fill("black")
    stroke("yellow")
    strokeWeight(3)
    textAlign(CENTER)
    text("WELCOME TO THE ESCAPE HOUSE",width/2,80)
    text("LEVEL 1",width/2-100,480)
   
    textSize(40)
    fill("black")
    stroke("red")
    text("IN THIS GAME YOU WILL HAVE TO COMPLETE",width/2,200)
    text("ALL THE LEVELS/ROOMS TO ESCAPE THE HOUSE",width/2,300)
    text("COLLECT 5 TINY SQUARES AROUND THE ROOM",width/2,580)
    text("BUT WATCH OUT BECAUSE ALL OF THEM ARE DISGUISED",width/2,650)
    pop()



    if(mousePressedOver(next)){
      gameState="livingArea"
    }


  }

  if(gameState==="livingArea"){
    background(livingAreaImg)
    lock.visible=false
    next.visible=false
    girl.visible=true
    star1.visible=true
    star2.visible=true
    star3.visible=true
    star4.visible=true
    star5.visible=true
    girl.collide(topWall)
    girl.collide(bottomWall)
    girl.collide(leftWall)
    girl.collide(rightWall)

    text(mouseX+","+mouseY,mouseX,mouseY)

    fill("black")
    textSize(30)
    text("COLLECTED: "+score,width-300,70)

    if(girl.collide(star1)){
      score+=1
      star1.destroy()
    }

    if(girl.collide(star2)){
      score+=1
      star2.destroy()
    }

    if(girl.collide(star3)){
      score+=1
      star3.destroy()
    }

    if(girl.collide(star4)){
      score+=1
      star4.destroy()
    }

    if(girl.collide(star5)){
      score+=1
      star5.destroy()
    }

    if(keyDown("down")){
      girl.y+=5
    }
    if(keyDown("up")){
      girl.y-=5
    }
    if(keyDown("right")){
      girl.x+=5
      girl.changeAnimation("right")
    }
    if(keyDown("left")){
      girl.x-=5
      girl.changeAnimation("left")
    }

    if(score>=5){
      gameState="intro2"
    }
  }

  if(gameState==="intro2"){
    background("teal")
    lock.visible=false
    next.visible=true
    girl.visible=false

    //create text for introducing rules of the game using separate text commands
    //refer to help 1 comment above
    push()
    textSize(60)
    fill("black")
    stroke("yellow")
    strokeWeight(3)
    textAlign(CENTER)
    text("CONGRATULATIONS!!",width/2,80)
    text("LEVEL 2",width/2-100,480)
   
    textSize(40)
    fill("black")
    stroke("red")
    text("YOU HAVE COMPLETED LEVEL ONE",width/2,200)
    text("MOVE ON TO LEVEL 2",width/2,300)
    text ("IN THIS LEVEL YOU WILL TO FIND A BLACK",width/2,370)
    text ("RECTANGULAR SWITCH HIDDEN AROUND THE ROOM",width/2,600)
    text ("BUT IT WILL BE DARK THE SWITCH WILL LIGHT THE PLACE UP",width/2,700)
    text("",width/2,580)
    text("",width/2,650)
    pop()



    if(mousePressedOver(next)){
      gameState="dining area"
    }
  }
  if(gameState==="dining area"){
    background(diningArea)
    lock.visible=false
    next.visible=false
    girl.visible=true
    girl.collide(topWall)
    girl.collide(bottomWall)
   // girl.collide(leftWall)
    girl.collide(rightWall)
    lever.visible=true

    text(mouseX+","+mouseY,mouseX,mouseY)
    
    if(dark==true){
      tint(30,30,30)
      image(diningArea,0,0,width,height)

    }

    if(girl.collide(lever)){
      dark=false
      tint(255)
      image(diningArea,0,0,width,height)
    }
    if(girl.x<100&&girl.y>height/2-150&&girl.y<height/2+150&&dark==false){
      gameState="intro3"
    }

   

    if(keyDown("down")){
      girl.y+=5
    }
    if(keyDown("up")){
      girl.y-=5
    }
    if(keyDown("right")){
      girl.x+=5
      girl.changeAnimation("right")
    }
    if(keyDown("left")){
      girl.x-=5
      girl.changeAnimation("left")
    }

  }
  if(gameState==="intro3"){
    background("teal")
    lock.visible=false
    next.visible=true
    girl.visible=false
    lever.visible=false

    push()
    textSize(60)
    fill("black")
    stroke("yellow")
    strokeWeight(3)
    textAlign(CENTER)
    text("CONGRATULATIONS!!",width/2,80)
    text("LEVEL 3",width/2-100,480)
   
    textSize(40)
    fill("black")
    stroke("red")
    text("YOU HAVE COMPLETED LEVEL TWO",width/2,200)
    text("MOVE ON TO LEVEL 3",width/2,300)
    text ("IN THIS LEVEL YOU WILL HAVE FIND THE PERFECT",width/2,400)
    text ("TEMPRETURE OF WATER TO TAKE A SHOWER",width/2,600)
    text ("",width/2,700)
    text("",width/2,580)
    text("",width/2,650)
    pop()

    if(mousePressedOver(next)&&gameState=="intro3"){
      gameState="bathroom"
    }

  }
  if(gameState==="bathroom"){
    background(bathroom)
    lock.visible=false
    next.visible=false
    girl.visible=true
    girl.collide(topWall)
    girl.collide(bottomWall)
   // girl.collide(leftWall)
    girl.collide(rightWall)
    lever.visible=false
    

   if( girl.collide(tub)){
    waterMeter=true
   }

   if(waterMeter===true){
    needle.visible=false
    girl.visible=false
    imageMode(CENTER)
    image(speedoMeter,width/2,height/2)
    push()
    translate(width/2,height/2)
    rotate(needleAngle)
    stroke(255,0,0)
    strokeWeight(8)
    line(0,0,100,0)
    pop()
    angleMode(DEGREES)
    needleAngle+=10
    console.log(needleAngle)
   }
   

    text(mouseX+","+mouseY,mouseX,mouseY)

    if(keyDown("down")&&waterMeter!=true){
      girl.y+=5
    }
    if(keyDown("up")&&waterMeter!=true){
      girl.y-=5
    }
    if(keyDown("right")&&waterMeter!=true){
      girl.x+=5
      girl.changeAnimation("right")
    }
    if(keyDown("left")&&waterMeter!=true){
      girl.x-=5
      girl.changeAnimation("left")
    }

    

  }
   
  if(gameState==="intro4"){
    background("teal")
    lock.visible=false
    next.visible=true
    girl.visible=false
    lever.visible=false

    push()
    textSize(60)
    fill("black")
    stroke("yellow")
    strokeWeight(3)
    textAlign(CENTER)
    text("CONGRATULATIONS!!",width/2,80)
    text("LEVEL 4",width/2-100,480)
   
    textSize(40)
    fill("black")
    stroke("red")
    text("YOU HAVE COMPLETED LEVEL THREE",width/2,200)
    text("MOVE ON TO LEVEL 4",width/2,300)
    text ("IN THIS LEVEL YOU WILL HAVE FIND THE PERFECT",width/2,400)
    text ("TEMPRETURE OF WATER TO TAKE A SHOWER",width/2,600)
    text ("",width/2,700)
    text("",width/2,580)
    text("",width/2,650)
    pop()
  }

  drawSprites()
}