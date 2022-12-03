
let bg;
//let y = 0;
//let setting;

function setup() {
  
  bg = loadImage('2.jpg');
  createCanvas(1920 , 1080);
}

var page = 0; //home

var clicked = false;

function mouseClicked()  
  {
    clicked = true; 
  }

function button(x, y, w, h, pageSwitch, txt, txtSize)
 {
   fill(255, 190, 0, 255);
   stroke("green");
   strokeWeight(4);
   
  if(mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h)
    {
      
      
      fill("orange");
      
      if(clicked)
     {
       page = pageSwitch;
     }
    }
  
   ellipse(x, y, w, h);
   
   noStroke();
   textSize(txtSize);
   fill("green");
   text(txt, x - 65, (y + h /2) - 60 );
   
 }



function draw() {
  
  background(bg);
  
  //textAlign(CENTER, CENTER);

  switch(page)
    {
      case 0:
        button(960, 540, 300, 155, 1, "Fishing", 42);
        
        button(960, 740, 300, 155, 2, "Playing", 42);
        button(960, 940, 300, 155, 3, "Writing", 42);
         break;
         
      case 1:
        button(1820, 100, 100, 100, 0, "", 14);
        break;
        
      case 2:
        button(1820, 100, 100, 100, 0, "", 14);
        break;
        
      case 3:
        button(1820, 100, 100, 100, 0, "", 14);
        break;
        
    }
  
 
  clicked = false;
}