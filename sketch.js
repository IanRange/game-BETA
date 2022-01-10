var balon,balonSprite;
var piso1,piso1Sprite;
var fondo,fondoSprite;
var invisibleground;



 


function preload(){ 

balon = loadImage("balon1.png");
piso1 = loadImage("piso1.png");
fondo = loadImage("fondo1.jpg");







}
function setup() {
  createCanvas(600, 400);
  
fondoSprite = createSprite(300,200);
fondoSprite.addImage(fondo)
fondoSprite.scale=1.9
  
balonSprite = createSprite(60,342,200,30);
balonSprite.addImage(balon)
balonSprite.scale=0.7
  
piso1Sprite = createSprite(300,290,100,20);
piso1Sprite.addImage(piso1)
piso1Sprite.scale=1.1

invisibleground = createSprite(300,400,600,10)
 invisibleground.visible = false;

  
}
function draw() {
  background(220);
  
if (invisibleground.x < 0){
      invisibleground.x = invisibleground.width/2;
   
    }
   

   if(keyDown("space")&& balonSprite.y >= 280) {
        balonSprite.velocityY = -12;}
  
   balonSprite.velocityY = balonSprite.velocityY + 0.8
   balonSprite.collide(invisibleground);
  
  if (piso1Sprite.x < 0){
      piso1Sprite.x = piso1Sprite.width/2;
       
   }
  console.log(fondoSprite.x)
  if (fondoSprite.x < 0){
      fondoSprite.x = fondoSprite.width/2;
  }
  
  //piso1Sprite.velocityX = -4;
  //fondoSprite.velocityX = -4;

  
drawSprites()
}
