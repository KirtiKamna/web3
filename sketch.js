const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var imgSides;
var imgMiddle;
var sideL;
var sidesR;
var middle;

var kiss;
var kissAnimation;
var frame;
var frameImg;

var basket1 = [];
var basket2 = [];
var basket3 = [];
var basket4 = [];
var basket5 = [];


var ground;

var Dday;
var DdayImage;


function preload(){

    imgSides = loadImage("pics/2.jpg");
    imgMiddle = loadImage("pics/3.jpg");

    kissAnimation =loadAnimation("pics/kiss/1f.png","pics/kiss/2f.png","pics/kiss/3f.png",
    "pics/kiss/4f.png","pics/kiss/5f.png","pics/kiss/6f.png","pics/kiss/7f.png","pics/kiss/8f.png",
    "pics/kiss/9f.png",);

    frameImg = loadImage("pics/kiss/b1.png");

    


}
function setup(){
    createCanvas(windowWidth, windowHeight*0.80);

    engine = Engine.create();
    world = engine.world;
    sideL = createSprite(windowWidth/16,windowHeight * 0.5,50,50);
    sideL.addImage(imgSides);
    sideL.scale= 1.6;

    sideR = createSprite(windowWidth-windowWidth/12,windowHeight * 0.5,50,50);
    sideR.addImage(imgSides);
    sideR.scale= 1.6

   
    middle = createSprite(windowWidth/2,windowHeight * 0.4,50,50);
    middle.addImage(imgMiddle);
    middle.scale = 1.3;


    kiss= createSprite(windowWidth*0.5,windowHeight * 0.60,100,100);
    kiss.addAnimation("chauu",kissAnimation)
    kiss.scale= 0.5

    frame = createSprite(windowWidth*0.5,windowHeight * 0.65,100,100);
    frame.addImage(frameImg)
    frame.scale = 1.1;

    if(frameCount % 200 ===0){
        for(var i=0; i<50; i++){
            basket1.push(new Flowers1(random(0,windowWidth), random(0,windowHeight)));
        }
    }

    if(frameCount % 200 ===0){
        for(var i=0; i<50; i++){
            basket2.push(new Flowers2(random(0,windowWidth), random(0,windowHeight)));
        }
    }

    if(frameCount % 200 ===0){
        for(var i=0; i<50; i++){
            basket3.push(new Flowers3(random(0,windowWidth), random(0,windowHeight)));
        }
    }


    if(frameCount % 200 ===0){
        for(var i=0; i<50; i++){
            basket4.push(new Flowers4(random(0,windowWidth), random(0,windowHeight)));
        }
    }


    if(frameCount % 200 ===0){
        for(var i=0; i<25; i++){
            basket5.push(new Flowers5(random(0,windowWidth), random(0,windowHeight)));
        }
    }


   

ground  = Bodies.rectangle(windowWidth/2,windowHeight*0.78,windowWidth,15,{isStatic:true})
World.add(world,ground)
}
function draw(){

background(imgMiddle)
    drawSprites();
    stroke("yellow");
    strokeWeight(2)
    fill("red")
    textFont('papyrus')
    textSize(40)
    text("#RahulKiKamna",windowWidth * 0.40,windowHeight * 0.18)
    fill("cyan")
    textFont('papyrus')
    textSize(40)
    
    text("Save  the  date",windowWidth * 0.42,windowHeight * 0.27)

    fill("red")
    textFont('papyrus')
    textSize(50)
    stroke("yellow");
    strokeWeight(2)
    text("24.04.2021",windowWidth * 0.42,windowHeight * 0.36)





    Engine.update(engine);


  

    rectMode(CENTER);

  // rect(ground.position.x,ground.position.y,1530,5) 







for(var i = 0; i<50; i++){
    basket1[i].display();
    
    
}


for(var i = 0; i<50; i++){
    basket2[i].display();
    
    
}

for(var i = 0; i<50; i++){
    basket3[i].display();
    
    
}

for(var i = 0; i<50; i++){
    basket4[i].display();
    
    
}

for(var i = 0; i<25; i++){
    basket5[i].display();
    
    
}
 
}