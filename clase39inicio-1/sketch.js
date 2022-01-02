
var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var cars, car1, car2, car3, car4;

var track,ground;
var car1_imagen,car2_imagen,car3_imagen,car4_imagen;

var posiciones = [];
var contadorPosiciones = 0;
var ganador;



function preload(){
   track = loadImage("images/track.jpg");
   ground = loadImage("images/ground.png");
   car1_imagen = loadImage("images/car1.png");
   car2_imagen = loadImage("images/car2.png");
   car3_imagen = loadImage("images/car3.png");
   car4_imagen = loadImage("images/car4.png");

}

function setup(){
  canvas = createCanvas(displayWidth-60,displayHeight-60);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
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

