var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  box1= createSprite(1000,100,50,50);
  box1.shapeColor="blue";
  box1.velocityY= 3;

  box2= createSprite(1000,700,50,50);
  box2.shapeColor="red";
  box2.velocityY= -3;
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;

  if(isTouching(movingRect,box2)){
    fixedRect.y = 100;
    box2.shapeColor="blue"
  }
  else{
    fixedRect.y = 200;
    box2.shapeColor="green"

  }

  
  
  collideWith(box1,box2)
    
  
 
  
  drawSprites();
}



