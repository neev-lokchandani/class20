var fix, move;
function setup() {
  createCanvas(800,400);
  
  fix = createSprite(200,200,50,80);
  move = createSprite(400,200,80,30);
  fix.shapeColor="green"
  move.shapeColor="green"
}

function draw() {
  background(255,255,255);  
  move.x=World.mouseX;
  move.y=World.mouseY;
  if(move.x-fix.x<move.width/2+fix.width/2 && fix.x-move.x<move.width/2+fix.width/2 && move.y-fix.y<move.height/2+fix.height/2 && fix.y-move.y<move.height/2+fix.height/2) {
    move.shapeColor="red"
    fix.shapeColor="red"
  }
  else {
    move.shapeColor="green"
    fix.shapeColor="green"
  }
  drawSprites();
}