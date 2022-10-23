var bg,bgImg;
var player, player2,player3,player_Img,player2_Img;
var bg_i,bg_2_i,bg1,bg2;

function preload(){
   player_Img = loadAnimation("assets/s1.png","assets/s2.png","assets/s3.png")
   player2_Img = loadImage("assets/player2.png")

   bg_i = loadImage("assets/lev1-BG.jpg")
   bg_2_i = loadImage("assets/lev2-BG.jpg")


}

function setup() {

  
  createCanvas(1000,500);

  bg1 = createSprite(500,250,1000,500);
  bg1.addImage("bg_i",bg_i)
  


 player = createSprite(200,400);
 player.addAnimation("player_Img",player_Img)
   player.scale = 0.4
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
/*if(keyDown("RIGHT_ARROW")||touches.length>0){
  player.x = player.x-30
}
if(keyDown()||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("")){
 
  player.addImage()
 
}


else if(keyWentUp()){
  player.addImage()
}
*/
drawSprites();

}
