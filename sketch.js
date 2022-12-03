''/****
 * FSE100: examples for how to link multiple exercises together
 *****/

let currentActivity = 0;
let menuButton, game1Button, game2Button, game3Button;

/***** 
  * If you want to load images or sounds into your application,
  * try using preload()
  * https://p5js.org/reference/#/p5/preload
  *****/

function preload(){
  // game1Preload();
  // //game2Preload();
  // game3Preload();

  Ubuntu = loadFont("Ubuntu-Regular.ttf");
  img = loadImage('2.jpg');
}

function switchToMM(){
  currentActivity = 0;
  background(img);
  img.resize(600,400);
  
// Hide the home page button, show the activity buttons
  menuButton.hide();
  game1Button.show();
  game2Button.show();
  game3Button.show();

}

function setup() {
  createCanvas(600,400); //1920*1080 size
  noStroke();
  textAlign(CENTER, CENTER);
  background(img);
  img.resize(600,400);
  
  menuButton = createButton('Back');
  menuButton.position(20, 30);
  menuButton.style('font-size', '18px');
  menuButton.style('background-color', '#9E9E9E8C');
  menuButton.hide();
  
  game1Button = createButton('Fishing');
  game1Button.position(230,220);
  game1Button.style("font-family", "Ubuntu-Regular");
  game1Button.style('font-size', '35px');
  game1Button.style('background-color', 'rgb(247,192,51)');
  game1Button.style('color', 'rgb(39,100,29)');
  game1Button.mousePressed(goToFish);
  game1Button.show();
  
  game2Button = createButton('Piano');
  game2Button.position(240,320);
  game2Button.style("font-family", "Ubuntu-Regular");
  game2Button.style('font-size', '35px');
  game2Button.style('background-color', 'rgb(247,192,51)');
  game2Button.style('color', 'rgb(39,100,29)');
  game2Button.mousePressed(goToPiano);
  game2Button.show();
  
  game3Button = createButton('Spaceship');
  game3Button.position(210,130);
  game3Button.style("font-family", "Ubuntu-Regular");
  game3Button.style('font-size', '35px');
  game3Button.style('background-color', 'rgb(247,192,51)');
  game3Button.style('color', 'rgb(39,100,29)');
  game3Button.mousePressed(goToSpace);
  game3Button.show();
  
}

function goToFish(){
  window.open('https://editor.p5js.org/cattuyen03/full/O1SE4kaSe');
  
}

function goToPiano(){ 
  window.open('https://editor.p5js.org/cattuyen03/full/FXN4bXmNy');
  
}

function goToSpace(){
  window.open('https://editor.p5js.org/cattuyen03/full/mhc_XeYk9');
  
}

// function draw() {  
//   switch(currentActivity){
//     case 0: 
//       mainMenu();
//       break;
//     case 1: 
//       game1Draw();
//       break;
//     //case 2: 
//      // game2Draw();
//     //  break;
//     case 3: 
//       game3Draw();
//       break;
//   }
// }

function mainMenu(){
  background(img);
 
}

/*****
* mousePressed() is a reserved function that is called whenever
* the user presses the mouse button in the application.
*****/
// function mousePressed(){
//   // Only game 4 uses the mousePressed function, but the switch statement
//   // makes it easy to add the mousePressed functionality for other games.
//   switch(currentActivity){
//     case 2: 
//       game2MousePressed();
//       break;
//     case 4: 
//       game4MousePressed();
//       break;
//   }
// }