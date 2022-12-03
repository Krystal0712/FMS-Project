var screen = 0;
var y=-20;
var x=200;
var spd = 2;
var score= 0;
var fish;
var shark;
var sea;
var jaws;
var pxlfont;

let homeButton;
let canvasX = 600;
let canvasY = 400;

function preload() {
  soundFormats('mp3', 'ogg');
	fish = loadImage('Fish.png');
	shark = loadImage('Shark.png');
	sea = loadImage('Sea.jpg');
	jaws = loadSound('Jaws.mp3');
	chomp = loadSound('Chomp.mp3');
    end = loadImage('End.jpg');
    pxlfont = loadFont('slkscrb.ttf');


}

function setup() {
  createCanvas(600, 400);
	  jaws.play();
  homeButton = createButton("Home");
  homeButton.size(canvasX / 9, canvasY / 11);
  homeButton.position(510, 20);
  homeButton.mousePressed(goToHome);
  homeButton.style('background-color', 'rgba(86,196,234,0.49)');
  homeButton.style('color', 'white');
}

function draw() {
	if(screen == 0){
    startScreen()
  }else if(screen == 1){
  	gameOn()
  }else if(screen==2){
  	endScreen()
  }	
}

function startScreen(){
		 jaws.pause();
		background(96, 157, 255)
		image(sea,0,0,600, 400)
		fill(255)
		textAlign(CENTER);
		textSize(20)
        textFont(pxlfont)
		text('WELCOME TO MY CATCHING GAME', width / 2, height / 2)
        text('Move the shark to catch the target', width / 2, height / 2 + 30)
		text('(click to start)', width / 2, height / 2 + 60);
		resetName();
}

function gameOn(){
	  imageMode(CENTER);
	 // jaws.setVolume(0.1);
	image(sea,width/2,height/2,600,500)
			textSize(15)

  text("SCORE = " + score, 70,20)
  rectMode(CENTER)
  // rect(mouseX,height-10,50,30)
	image(shark,mouseX,height-50,70,100)
	  // ellipse(x,y,20,20)
		image(fish,x,y,60,50)


	y+= spd;
  if(y>height){
  	screen =2
	 jaws.stop();

	 }
  if(y>height-50 && x>mouseX-35 && x<mouseX+35){
  	y=-20
    spd+=0.5
    score+= 1
		chomp.play();

  }
	if(y==-20){
  	pickRandom();
  }
}

function pickRandom(){
	x= random(20,width-20)
}

function endScreen(){
        background(96, 157, 255)
		image(end,300,200,600,500)
		fill('rgb(34,104,159)')
		// background(150)
		//textAlign(RIGHT,500,200,400,300);
         textSize(25);
		text('GAME OVER', width / 2 - 100, height / 2 - 30)
  	text("SCORE = " + score, width / 2 - 100, height / 2)
         textSize(14);
		text('(click to play again)', width / 2 - 100, height / 2 + 20);
}

function mousePressed(){
	if(screen==0){
  	screen=1
		jaws.loop();
	 jaws.play();

  }else if(screen==2){
  	screen=0
  }
}

function resetName(){
	  score=0;
  	spd=2;
  	y=-20;
}

function goToHome(){
  window.open('https://editor.p5js.org/cattuyen03/full/AdWo6ZK2x');
}
