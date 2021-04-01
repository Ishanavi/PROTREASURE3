var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("../images/BhQ8iO.jpg");
  car1_img = loadImage("../images/diver.png");
  car2_img = loadImage("../images/diver.png");
  car3_img = loadImage("../images/diver.png");
  car4_img = loadImage("../images/diver.png");
  bg2 = loadImage("../images/bg2.jpg");
  //ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();

///////////////////////////////////////////////////////////
//if(gamestate === 100)
  
    background(bg2);

    textSize(30);
    fill(255,128,62);
    text("UNDERWATER TREASURE HUNT",windowWidth/2-240,30);

    textSize(25);
    fill(111,255,162);
    text("Goal of the Game: Help the pirate to collect the maximum treasure in the specified time and protect him ",30,100);
    text("from the sea monsters.",30,130)

    textSize(25);
    fill(255,187,187);
    text("Instructions:",30,195);

    textSize(20);
    fill("red");
    text("1. Press the 'START' button to start the game.",30,230);
    fill("orange");
    text("2. Use right, up and down arrow keys to move the diver.",30,260);
    fill("yellow");
    text("3. Overcome the obstacles and collect the treasure within the time limit.",30,290);
    fill(119,255,69);
    text("4. Collect the money bags to get extra lives(collecting 3 bags will give 1 extra life).",30,320);
    fill(96,233,255);
    text("5. Beware of the treasure guarded by the crabs.",30,350);

    textSize(25);
    fill(217,255,91);
    text("BEST OF LUCK!",windowWidth/2-130,400);

    button1 = createButton('START');
    button1.position(windowWidth/2-80,450);

    button1.mousePressed(()=>{
      button1.hide();
      console.log("hello");
     // gamestate=0;
     game = new Game();
     clear();
     game.getState();
     game.start();
    })



 /* game = new Game();
  game.getState();
  game.start();

*/
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
