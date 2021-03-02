var t,ti
var g,gi,p
var c,ci
var o,oi1,oi2,oi3,oi4,oi5,oi6
var s=0;
var clGroup,obGroup
var gamestate="play"
var a,b,c
var h
var q=5
var gameover,gam
var r,ri
function preload(){
  
ti=loadAnimation("trex1.png","trex3.png","trex4.png")
gi=loadImage("ground2.png") 
ci=loadImage("cloud.png")
oi1=loadImage("obstacle1.png")
 oi2=loadImage("obstacle2.png")  
  oi3=loadImage("obstacle3.png") 
   oi4=loadImage("obstacle4.png")
    oi5=loadImage("obstacle5.png") 
     oi6=loadImage("obstacle6.png")  
   a=loadSound("checkPoint.mp3")
   b=loadSound("die.mp3")
   c=loadSound("jump.mp3")
  gam=loadImage("gameOver.png")
  ri=loadImage("restart.png")

}

function setup(){

  
  createCanvas(windowWidth,windowHeight)  
t=createSprite(windowWidth/20,windowHeight-30,40,60)
  t.addAnimation("running",ti)
t.scale=0.6  
  
g=createSprite(windowWidth/2,windowHeight-30,windowWidth,40)
 g.addImage(gi)
g.velocityX=-5 

gameover=createSprite(400,200) 
gameover.addImage(gam)
gameover.visible=false  
  
p=createSprite(windowWidth/2,windowHeight-5,windowWidth,20)
p.visible=false 
  
 r=createSprite(400,240)
r.addImage(ri)
r.scale=0.5
r.visible=false  
  
clGroup=createGroup()
obGroup=createGroup() 
  

  
h=6  
  
  
}

function draw(){
background("lightblue");
text("score = "+s,550,20);

console.log(h)
console.log(q)
  
  
  t.collide(p)   
if(gamestate=="play"){


                         
                          s=s+Math.round(frameCount/60)  
                 if(g.x<0) {
                          g.x=windowWidth   
                           }
   
  if(s%1000==0) {
   a.play()  
     }                  
  
  
                 if(keyDown("space")&&t.isTouching(g)){
                          t.velocityY=-10   
                  c.play()
                  }
                 t.velocityY=t.velocityY+0.5
                            
  
                          clouds() 
                          obstacles()
 
  
                 if(obGroup.isTouching(t)) {   
                         gamestate="end"
                  }
  
  
  
}
  
if(gamestate=="end"){
                      b.play()  
                        g.velocityX=0;  
                        clGroup.setVelocityXEach(0);
                        obGroup.setVelocityXEach(0);
                        s=0 
                        obGroup.setLifetimeEach(-1);  
  gameover.visible=true
  r.visible=true
  if(mousePressedOver(r)){  
   gamestate="restart" 
     }
   }  
  
  
  
if(gamestate=="restart"){
obGroup . destroyEach()
clGroup .destroyEach()
  gamestate="play"   
 gameover.visible=false
r.visible=false
   }  

 
  
drawSprites()  
}


function clouds(){
if(frameCount%100==0){
  m=random(0,windowHeight/2)
 c=createSprite(windowWidth,m,50,10)
c.addImage(ci) 
c.velocityX=-5 
c.scale=0.5
  c.lifetime=200;
  t.depth=c.depth
  t.depth=t.depth+1;
  
clGroup.add(c)
  
  
   }
  
}


function obstacles(){
 if(frameCount%100==0){
 o=createSprite(windowWidth,windowHeight-30,50,10)
o.addImage(oi1) 
o.velocityX=-5 
o.scale=0.5
   o.lifetime=200
obGroup.add(o)   
m=Math.round(random (1,6))  
   switch(m){
          
          case 1:  o.addImage(oi1);
                  break;
          case 2:  o.addImage(oi2);
                  break;
          case 3: o.addImage(oi3);
                  break;
          case 4:   o.addImage(oi4);
                  break;
          case 5: o.addImage(oi5);
                  break;
          case 6: o.addImage(oi6);
                  break;
          }
   } 
}








