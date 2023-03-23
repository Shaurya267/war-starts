var bg,bg2,bgImg;
var player, shooterImg, shooter_shooting;
var database, gameState, playerCount;
var form;


function preload(){
  bg = loadImage("assets/th.jpg"); 
  

}

function setup() {
  createCanvas(windowWidth,windowHeight);

database=firebase.database();
game =new Game();
game.getState();
game.start();
  


}

function draw() {
  background(bg); 

  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

 

//release bullets and change the image of shooter to shooting position when space is pressed

drawSprites();

}


function windowResized()
{
  resizeCanvas(windowWidth,windowHeight)
}