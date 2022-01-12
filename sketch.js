var balon,balonSprite;
var enemigos1,enemigos1Sprite
var piña,piñaSprite;
var piso1,piso1Sprite;
var piso,pisoSprite;
var fondo,fondoSprite;
var vaca1,vaca1Sprite;
var autodestruido1,autodestruido1Sprite;
var autodestruido2,autodestruido2Sprite;
var autodestruido3,autodesrtuido3Sprite;
var invisibleground;
var autodestruidoGroup;
var Edges;


 


function preload(){ 

balon = loadImage("balon1.png");
piso1 = loadImage("piso1.png");
fondo = loadImage("fondo1.jpg");
enemigos1 = loadImage("enemigos 1.png");
piña = loadImage("piña.png");
vaca1 = loadImage("vaca1.png");
autodestruido1 = loadImage("autodestruido1.png");
autodestruido2 = loadImage("autodestruido2.png");
autodestruido3 = loadImage("autodestruido3.png");


}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
fondoSprite = createSprite(width/2,height/2);
fondoSprite.addImage(fondo)
fondoSprite.scale=1
  
autodestruidoGroup = new Group

vaca1Sprite = createSprite(1100,80);
vaca1Sprite.addImage(vaca1);
vaca1Sprite.scale=0.1
  
balonSprite = createSprite(60,342,200,30);
balonSprite.addImage(balon)
balonSprite.scale=0.6
  
piso1Sprite = createSprite(300,height-450,100,20);
piso1Sprite.addImage(piso1)
piso1Sprite.scale=5

invisibleground = createSprite(0,height-75,width*2,10)
 invisibleground.visible = false;
  

 balonSprite.setCollider("circle",-10,0,58);
 balonSprite.debug = true

Edges = createEdgeSprites();

  
}
function draw() {
  background(220);
  if(autodestruidoGroup.isTouching(balonSprite)){
  stup()  
  }
  else{
  autodestruidoGroup.setVelocityXEach(-3)
  }
  
if (invisibleground.x < 0){
      invisibleground.x = invisibleground.width/2;
   
    }
  
   if(keyDown("D")) {
        fondoSprite.velocityX = -4;
    
    }
     if(keyDown("A") ) {
        fondoSprite.velocityX = 4;
    
    }
  
  if(keyDown("W")) {
        fondoSprite.velocityX = 0;
    
    }
  
  if(keyDown("D")&& vaca1Sprite.x >= 280) {
        vaca1Sprite.velocityX = -4;
    
    }

    if(keyDown("D")) {
      balonSprite.velocityX = 6;
  
  }
  if(keyDown("A")&& balonSprite.x >= -400) {
    balonSprite.velocityX = -6;

}
if(keyDown("w")&& balonSprite.x >= 0) {
  balonSprite.velocityX = 0;

}
  
    if(keyDown("A")&& vaca1Sprite.x >= 280) {
        vaca1Sprite.velocityX = 4;
    
    }
  
    if(keyDown("W")&& vaca1Sprite.x >= 280) {
        vaca1Sprite.velocityX = 0;
    
    }

   if(keyDown("space")&& balonSprite.y >= 600) {
        balonSprite.velocityY = -16;}
      console.log(balonSprite.y)
     
   balonSprite.velocityY = balonSprite.velocityY + 0.8
   balonSprite.collide(invisibleground);
   balonSprite.collide(autodestruidoGroup);
  
  if (piso1Sprite.x < 0 || piso1Sprite.x > width){
      piso1Sprite.x = piso1Sprite.width/2;
       
   }
  
  
  console.log(fondoSprite.x)
  if (fondoSprite.x < 0 || fondoSprite.x > width){
      fondoSprite.x = fondoSprite.width/2;
  }
  
  
  
  
   


if(frameCount%300===0){
  spawnenemigo1()
}
spawnautosestruidos()

spawnpina()

balonSprite.bounceOff(Edges[0]);
balonSprite.bounceOff(Edges[1]);    
drawSprites()
}

//async function gettime(){
//var respond=await //fetch("http://worldtimeapi.org/api/timezone/America/Mexico_city")
//var respondjson=await respond.json()
//var gettime=respondjson.datetime;
//var gettime2=gettime.slice(11,13)
//if(gettime2>=06 && gettime2<=19){
//bg="Sprites/bg.png"

//}
//else{
    //bg="Sprites/bg2.jpg"

//}
//backgroundImg=loadImage(bg)
//}

//funcion para que aparesca la piña
function spawnpina() {
  //write code here to spawn the clouds
  if (frameCount % 1000000 === 0) {
    piñaSprite = createSprite(1,100);
    piñaSprite.addImage(piña);
    piñaSprite.scale=0.7
    piñaSprite.velocityX = 6;
    
     //assign lifetime to the variable
    piñaSprite.lifetime = 400;
  }
}

function spawnenemigo1() {
  //write code here to spawn the clouds

    enemigos1Sprite = createSprite(width-100,height-110);
    enemigos1Sprite.depth = piso1Sprite.depth-1
    enemigos1Sprite.addImage(enemigos1);
    enemigos1Sprite.scale=0.7
    enemigos1Sprite.velocityX = -3;
    
     //assign lifetime to the variable
    enemigos1Sprite.lifetime = width+100;
  
}
function spawnautosestruidos() {
  if(frameCount % 200 === 0) {
    var autodestruido1Sprite = createSprite(width+100,height-95,10,40);

    //obstacle.debug = true;
    autodestruido1Sprite.velocityX = -3;

    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: autodestruido1Sprite.addImage(autodestruido1);
      autodestruido1Sprite.scale = 0.2
              break;
      case 2: autodestruido1Sprite.addImage(autodestruido2);
      autodestruido1Sprite.scale = 0.15
              break;
      case 3: autodestruido1Sprite.addImage(autodestruido3);
      autodestruido1Sprite.scale = 0.18
              break;
      default: break;
    }   
    autodestruido1Sprite.lifetime = width+100;
    
    autodestruidoGroup.add(autodestruido1Sprite)
    autodestruidoGroup.setColliderEach("rectangle",10,-100,1000,600)
    autodestruido1Sprite.debug = true

  }
}

function stup(){
autodestruidoGroup.setVelocityXEach(0);
}


  

