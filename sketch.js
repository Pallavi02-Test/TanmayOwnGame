
var escapeCar,escapeCarImg;

function preload(){
    track1img = loadImage("Images/roadtrack2.png");
    track2img = loadImage("Images/roadtrack1.png");
    escapeCarImg = loadImage("Images/escapeCar.png");
}

function setup(){
    createCanvas(displayWidth-20, displayHeight-30);

    track1= createSprite(displayWidth/2-300, 0,displayWidth, displayHeight+1200);
    track1.addImage("track",track1img);
    track1.y =  displayHeight/2 -300;
    track1.scale = 2;

    track2= createSprite(displayWidth/2+300, 0,displayWidth, displayHeight+1200);
    track2.addImage("track",track2img);
    track2.y =  displayHeight/2 -300;
    track2.scale = 2;

    escapeCar = createSprite(displayWidth/2,displayHeight/2+200,10,10);
    escapeCar.addImage("Car",escapeCarImg);
    escapeCar.scale = 0.5;
    
}

function draw(){
    background(74,134,24);
    track1.velocityY = 10;
    track2.velocityY = 10;
    if(track1.y > displayHeight){
        track1.y =  displayHeight/2 -300;
    } 
    if(track2.y > displayHeight){
        track2.y =  displayHeight/2 -300;
    } 
    if(keyDown(LEFT_ARROW)){
        escapeCar.x = escapeCar .x - 5;
    }
    if(keyDown(RIGHT_ARROW)){
        escapeCar.x = escapeCar .x + 5;
    }
    
    drawSprites();
}