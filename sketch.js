

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	strokeWeight(2);
  stroke(15);
  fill("yellow");
	mainWall = createSprite(20, 453, 15, 750);
	mainWall2 = createSprite(700, 20, 1230, 15);
	mainWall3 = createSprite(1307, 427, 15, 800);
	mainWall4 = createSprite(665, 820, 1280, 15);
	
  IndianaFodase = createSprite(20, 20, 15, 15);

  tesouro = createSprite(1275, 790, 25, 25);

  

  IndianaFodase.shapeColor = "yellow"
  mainWall.shapeColor = "black"
  mainWall2.shapeColor = "black"
  mainWall3.shapeColor = "black"
  mainWall4.shapeColor = "black"
  tesouro.shapeColor = "purple"
}


function draw() {
  rectMode(CENTER);
  background("turquoise");

  IndianaFodase.bounceOff(mainWall);
  IndianaFodase.bounceOff(mainWall2);
  IndianaFodase.bounceOff(mainWall3);
  IndianaFodase.bounceOff(mainWall4);
  
  if (keyDown(LEFT_ARROW)){
    IndianaFodase.x= IndianaFodase.x -4;
  }
  
  if (keyDown(RIGHT_ARROW)){
    IndianaFodase.x= IndianaFodase.x +4;
  }
  
  if (keyDown(UP_ARROW)){
    IndianaFodase.y= IndianaFodase.y -4;
  }
  
  if (keyDown(DOWN_ARROW)){
    IndianaFodase.y= IndianaFodase.y +4;
  }

  drawSprites();
 
}