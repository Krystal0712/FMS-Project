//var pxlfont;
let screen = 0;

//text font
let pxl;

let canvasX = 600; let canvasY = 400;

//size of white keys
let rw = canvasX / 7.0; let rh = canvasY / 2;

//size of black keys, Ac is short for accidental
let rwAc = rw / 2; let rhAc = rh / 2;

//location of white keys
let rxA = 0;   let ryA = rh;
let rxB = rw;  let ryB = rh;
let rxC = rw + rxB; let ryC = rh;
let rxD = rw + rxC; let ryD = rh;
let rxE = rw + rxD; let ryE = rh;
let rxF = rw + rxE; let ryF = rh;
let rxG = rw + rxF; let ryG = rh;

//location of black keys
let rx1 = rw * 0.75; let ry1 = canvasY / 2;
let rx2 = rxC * 1.37; let ry2 = canvasY / 2;
let rx3 = rxD * 1.25; let ry3 = canvasY / 2;
let rx4 = rxF * 1.15; let ry4 = canvasY / 2;
let rx5 = rxG * 1.14; let ry5 = canvasY / 2;

//piano notes
let pianoC; let pianoD; let pianoE; let pianoF;
let pianoG; let pianoA; let pianoB; let playerNote;

let backgroundImg;
let pianoImg;
let musicNotesImg;

let homeButton;
let pianoButton;
let pianoRetry;

let notes = ['1', '2', '3', '4', '5', '6', '7'];
let pianoScore = 0;

let sentence1 = 'A number will pop up in the middle square.';
let sentence2 = 'Match the displayed number with the key that shares';
let sentence2p2 = ' the same number.';
let sentence3 = 'A red square will appear if the number does not';
let sentence3p2 = 'match the key.';
let sentence4 = ' A green square will appear if they match and the';
let sentence5 = 'the number will change and the game will continue.'
let sentence6 = 'Continue until you reach a score of 10.';

function preload () {  
  pianoC = loadSound('pianoNoteC.mp3');
  pianoD = loadSound('pianoNoteD.wav');
  pianoE = loadSound('pianoNoteE.wav');
  pianoF = loadSound('pianoNoteF.wav');
  pianoG = loadSound('pianoNoteG.wav');
  pianoA = loadSound('pianoNoteA.wav');
  pianoB = loadSound('pianoNoteB.wav');
  
  pianoImg = loadImage('wavy-piano-png.jpg');
  musicNotesImg = loadImage('music_notes.png');
  pxl = loadFont('pxlfont.ttf')
  //pxlfont = loadFont('pixelfont.ttf');
}

function setup() {
  createCanvas(canvasX, canvasY);
   backgroundImg = loadImage('background.jpg');
  
  button = createButton("Home");
  button.size(canvasX / 9, canvasY / 11);
  button.position(canvasX / 80, canvasY / 80);
  button.mousePressed(goToLink);

}

function draw() {
   button.mousePressed(goToLink);
  //piano exercise
  if (screen == 1) {
    //piano screen
  createCanvas(canvasX, canvasY);
    background(backgroundImg);
    
  homeButton = createButton('Home');
  homeButton.size(canvasX / 9, canvasY / 11);
  homeButton.position(canvasX / 80, canvasY / 60);
  homeButton.mousePressed(goToLink);
  
  //white keys (a-g)
  fill('white');
  rect(rxA, ryA, rw, rh); //note a
  rect(rxB, ryB, rw, rh); //note b
  rect(rxC, ryC, rw, rh); //note c
  rect(rxD, ryD, rw, rh); //note d
  rect(rxE, ryE, rw, rh); //note e
  rect(rxF, ryF, rw, rh); //note f
  rect(rxG, ryG, rw, rh); //note g
  
  //black keys, mainly for looks
  fill('black');
  rect(rx1, ry1, rwAc, rhAc); //A#
  rect(rx2, ry2, rwAc ,rhAc); //C#
  rect(rx3, ry3, rwAc, rhAc); //D#
  rect(rx4, ry4, rwAc, rhAc); //F#
  rect(rx5, ry5, rwAc, rhAc); //G#
    
  //Key numbers  
    fill('black');
    textSize(canvasX / 10);
    text('1', rw / 4, rh / 0.55);
    text('2', rxB * 1.3, rh / 0.55);
    text('3', rxC * 1.16, rh / 0.55);
    text('4', rxD * 1.1, rh / 0.55);
    text('5', rxE * 1.07, rh / 0.55);
    text('6', rxF * 1.06, rh / 0.55);
    text('7', rxG * 1.055, rh / 0.55);

    
        fill('light grey');
  rect(canvasX / 1.2, canvasY / 28, canvasX / 7, canvasY / 8);
    
    fill('light grey');
  rect(canvasX / 2.75, canvasY / 7, canvasX / 4, canvasY / 5);
      fill('black');
  textSize(canvasX / 40);
  text('Score:', canvasX / 1.19, canvasY / 9);
      fill('black');
  textSize(canvasX / 40);
  text(pianoScore, canvasX / 1.06, canvasY / 9);
  newNote();

  }
  if(screen == 2) {
    //Piano end screen
  createCanvas(canvasX, canvasY);
    background(backgroundImg);
    image(pianoImg, 0, canvasY / 1.26, canvasX, canvasY / 5);
    image(musicNotesImg, 0, 0, canvasX, canvasY / 5);
    
  pianoRetry = createButton("Retry");
  pianoRetry.size(canvasX / 9, canvasY / 11);
  pianoRetry.position(canvasX / 1.7, canvasY / 2.5);
  pianoRetry.mousePressed(goToPiano);
    
  homeButton = createButton('Home');
  homeButton.size(canvasX / 9, canvasY / 11);
  homeButton.position(canvasX / 3, canvasY / 2.5);
  homeButton.mousePressed(goToLink);
    
    fill('black');
    textSize(canvasX / 30);
    text('Congratulations!! Your score is : ', canvasX / 6, canvasY / 4);
    
    fill(166, 37, 37);
    textSize(canvasX / 30);
    text(pianoScore, canvasX / 2, canvasY / 3);
    
  }
  if(screen == 0) {
     //piano start screen
    createCanvas(canvasX, canvasY);
    background(backgroundImg);
    
    pianoButton = createButton("Start");
    pianoButton.size(canvasX / 9, canvasY / 11);
    pianoButton.position(canvasX / 1.14, canvasY / 80);
    pianoButton.mousePressed(goToPiano);
    
    fill('black');
    textSize(canvasX / 15);
    text('How To Play', canvasX / 3.8, canvasY / 3.8);
    textSize(canvasX / 40);
    //textWrap(WORD);
    textFont(pxl);
    textLeading(20);
    text(sentence1, canvasX / 5.5, canvasY / 3, canvasX / 1);
    text(sentence2, canvasX / 10.5, canvasY / 2.5);
    text(sentence2p2, canvasX / 2.6, canvasY / 2.15, canvasX / 1);
    text(sentence3, canvasX / 7, canvasY / 1.89);
    text(sentence3p2, canvasX / 2.5, canvasY / 1.68);
    text(sentence4, canvasX / 8, canvasY / 1.52);
    text(sentence5, canvasX / 8, canvasY / 1.36)
    text(sentence6, canvasX / 4.5, canvasY / 1.24);

     }
}

function mousePressed() {
  if (screen == 1) {
        if (mouseX > rxA && mouseX < rxA + rw && 
          mouseY > ryA && mouseY < ryA + rh) {
  pianoA.play();
          playerNote = '1';
      }
        if (mouseX > rxB && mouseX < rxB + rw && 
          mouseY > ryB && mouseY < ryB + rh) {
  pianoB.play();
        playerNote = '2';
      }
        if (mouseX > rxC && mouseX < rxC + rw && 
          mouseY > ryC && mouseY < ryC + rh) {
  pianoC.play();
        playerNote = '3';
      }
        if (mouseX > rxD && mouseX < rxD + rw && 
          mouseY > ryD && mouseY < ryD + rh) {
  pianoD.play();
        playerNote = '4';
      }
        if (mouseX > rxE && mouseX < rxE + rw && 
          mouseY > ryE && mouseY < ryE + rh) {
  pianoE.play();
        playerNote = '5';  
      }
        if (mouseX > rxF && mouseX < rxF + rw && 
          mouseY > ryF && mouseY < ryF + rh) {
  pianoF.play();
        playerNote = '6';
      }
        if (mouseX > rxG && mouseX < rxG + rw && 
          mouseY > ryG && mouseY < ryG + rh) {
  pianoG.play();
        playerNote = '7';
      }
  }
}

function newNote() {
    if(pianoScore == 0) {
  fill('black');
  textSize(canvasX / 7);
  text(notes[1], canvasX / 2.25, canvasY / 3);
    if(playerNote == 'NA') {
      erase();
    } else if(playerNote == notes[1]) {
      pianoScore++;
      playerNote = 'NA';
      erase();
            greenLight();
         } else if (playerNote != notes[1] || playerNote !='NA') {
           erase();         
           redLight();

                    }
       }
    if(pianoScore == 1) {
  fill('black');
  textSize(canvasX / 7);
  text(notes[6], canvasX / 2.25, canvasY / 3);
    if(playerNote == 'NA') {
    } else if(playerNote == notes[6]) {
      erase();     
      pianoScore++;
      playerNote = 'NA';
      erase();
            greenLight();
         } else if (playerNote != notes[6] || playerNote !='NA') {
                    erase();
                    redLight();
                    erase();
                    }
       }
    if(pianoScore == 2) {
  fill('black');
  textSize(canvasX / 7);
  text(notes[4], canvasX / 2.25, canvasY / 3);
    if(playerNote == 'NA') {
    } else if(playerNote == notes[4]) {
      erase();     
      pianoScore++;
      playerNote = 'NA';
      erase();
            greenLight();
         } else if (playerNote != notes[4] || playerNote !='NA') {
                    erase();
                    redLight();
                    erase();
                    }
       }
    if(pianoScore == 3) {
  fill('black');
  textSize(canvasX / 7);
  text(notes[0], canvasX / 2.25, canvasY / 3);
    if(playerNote == 'NA') {
    } else if(playerNote == notes[0]) {
      erase();     
      pianoScore++;
      playerNote = 'NA';
      erase();
            greenLight();
         } else if (playerNote != notes[0] || playerNote !='NA') {
                    erase();
                    redLight();
                    erase();
                    }
       }
    if(pianoScore == 4) {
  fill('black');
  textSize(canvasX / 7);
  text(notes[3], canvasX / 2.25, canvasY / 3);
    if(playerNote == 'NA') {
    } else if(playerNote == notes[3]) {
      erase();     
      pianoScore++;
      playerNote = 'NA';
      erase();
            greenLight();
         } else if (playerNote != notes[3] || playerNote !='NA') {
                    erase();
                    redLight();
                    erase();
                    }
       }
    if(pianoScore == 5) {
  fill('black');
  textSize(canvasX / 7);
  text(notes[2], canvasX / 2.25, canvasY / 3);
    if(playerNote == 'NA') {
    } else if(playerNote == notes[2]) {
      erase();     
      pianoScore++;
      playerNote = 'NA';
      erase();
            greenLight();
         } else if (playerNote != notes[2] || playerNote !='NA') {
                    erase();
                    redLight();
                    erase();
                    }
       }
    if(pianoScore == 6) {
  fill('black');
  textSize(canvasX / 7);
  text(notes[1], canvasX / 2.25, canvasY / 3);
    if(playerNote == 'NA') {
    } else if(playerNote == notes[1]) {
      erase();     
      pianoScore++;
      playerNote = 'NA';
      erase();
            greenLight();
         } else if (playerNote != notes[1] || playerNote !='NA') {
                    erase();
                    redLight();
                    erase();
                    }
       }
    if(pianoScore == 7) {
  fill('black');
  textSize(canvasX / 7);
  text(notes[5], canvasX / 2.25, canvasY / 3);
    if(playerNote == 'NA') {
    } else if(playerNote == notes[5]) {
      erase();     
      pianoScore++;
      playerNote = 'NA';
      erase();
            greenLight();
         } else if (playerNote != notes[5] || playerNote !='NA') {
                    erase();
                    redLight();
                    erase();
                    }
       }
    if(pianoScore == 8) {
  fill('black');
  textSize(canvasX / 7);
  text(notes[0], canvasX / 2.25, canvasY / 3);
    if(playerNote == 'NA') {
    } else if(playerNote == notes[0]) {
      erase();     
      pianoScore++;
      playerNote = 'NA';
      erase();
            greenLight();
         } else if (playerNote != notes[0] || playerNote !='NA') {
                    erase();
                    redLight();
                    erase();
                    }
       }
    if(pianoScore == 9) {
  fill('black');
  textSize(canvasX / 7);
  text(notes[4], canvasX / 2.25, canvasY / 3);
    if(playerNote == 'NA') {
    } else if(playerNote == notes[4]) {
      erase();     
      pianoScore++;
      playerNote = 'NA';
      erase();
            greenLight();
         } else if (playerNote != notes[4] || playerNote !='NA') {
                    erase();
                    redLight();
                    erase();
                    }
       }
    if(pianoScore == 10) {
      playerNote = 'NA';
      goToPianoEnd();
    }
}

//function goToHome() {  
//  screen = 0;
//  pianoScore = 0;
//  removeElements();
//  backgroundImg = loadImage('2.jpg');
//}


  //piano exercise
function goToPiano() {
  removeElements();
  screen = 1;
  backgroundImg = loadImage('background.jpg');
  pianoScore = 0;
  playerNote = 'NA';
  newNote();
}
function goToPianoEnd () {
  removeElements();
  screen = 2;
  playerNote = 'NA';
  backgroundImg = loadImage('background.jpg');
}
function goToPianoStart () {
  removeElements()
  screen = 5;
  backgroundImg = loadImage('background.jpg');
}

function greenLight(){
fill('green');
rect(canvasX / 1.5, canvasY / 5.5, canvasX / 12, canvasY / 9);
  rect(canvasX / 4.5, canvasY / 5.5, canvasX / 12, canvasY / 9);
  erase();
}

function redLight(){
  erase();
fill('red');
rect(canvasX / 4.5, canvasY / 5.5, canvasX / 12, canvasY / 9);
rect(canvasX / 1.5, canvasY / 5.5, canvasX / 12, canvasY / 9);
erase();
}

function goToLink(){
  window.open('https://editor.p5js.org/cattuyen03/full/AdWo6ZK2x')
}
