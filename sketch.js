var seaImage;
var shipImage;
var sea;
var ship;

function preload(){

seaImage = loadImage("sea.png");
shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(1000,1000);
  
  sea=createSprite(500,300);
  sea.addImage("sea",seaImage);
  sea.velocityX = -5;
  sea.x = 0;



  ship=createSprite(500,500);
  ship.addAnimation("ship",shipImage);
  ship.scale = 0.4;


}

function draw() {
 drawSprites();

 if(sea.x < 100)
{
  sea.x = sea.width/2;
}

console.log(sea.x);

}