const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var grounds,stage1,stage2,score;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var ubox1,ubox,ubox3,ubox4,ubox5,ubox6,ubox7,ubox8,ubox9;
var hitobject, bg, backgroundImg;
var gameState="onSling";

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    grounds=new Ground(600,585,1400,25);
    stage1=new Ground(600,495,350,10);
    stage2=new Ground(1000,305,300,10);

    box1=new Boxb(600,465,"blue.png")
    box2=new Boxb(640,465,"blue.png");
    box3=new Boxb(680,465,"blue.png");
    box4=new Boxb(560,465,"blue.png");
    box5=new Boxb(520,465,"blue.png");
    box6=new Boxb(480,465,"blue.png");
    box7=new Boxb(720,465,"blue.png");
    box8=new Boxb(600,415,"yellow.png");
    box9=new Boxb(640,415,"yellow.png");
    box10=new Boxb(680,415,"yellow.png");
    box11=new Boxb(560,415,"yellow.png");
    box12=new Boxb(520,415,"yellow.png");
    box13=new Boxb(600,365,"green.png");
    box14=new Boxb(640,365,"green.png");
    box15=new Boxb(560,365,"green.png");
    box16=new Boxb(600,315,"orange.png");

    ubox1=new Boxb(1000,275,"orange.png");
    ubox2=new Boxb(960,275,"orange.png");
    ubox3=new Boxb(920,275,"orange.png");
    ubox4=new Boxb(1040,275,"orange.png");
    ubox5=new Boxb(1080,275,"orange.png");
    ubox6=new Boxb(1000,225,"pink.jpg");
    ubox7=new Boxb(960,225,"pink.jpg");
    ubox8=new Boxb(1040,225,"pink.jpg");
    ubox9=new Boxb(1000,175,"blue.png");

    score=0;

    bg="black";
    setBackground();

    hitobject=new Poly(150,400);
    sling=new Launch(hitobject.body,{x:150,y:420});
 
}

function draw(){

  if(backgroundImg){
    background(backgroundImg);
  }

    Engine.update(engine);

    fill("red");
    text("PRESS SPACEBAR FOR MULTIPLE CHANCES",30,50);
    textSize(20);
    text("SCORE : "+score ,1000,60);
    text("TARGET : 2500",1000,100);

    if(score>2450){
        text("Congratulations !! You Win",600,250)
    }

    drawSprites();

    grounds.display();
    stage1.display();
    stage2.display();

    box1.display();
    box1.score();
    box2.display();
    box2.score();
    box3.display();
    box3.score();
    box4.display();
    box4.score();
    box5.display();
    box5.score();
    box6.display();
    box6.score();
    box7.display();
    box7.score();
    box8.display();
    box8.score();
    box9.display();
    box9.score();
    box10.display();
    box10.score();
    box11.display();
    box11.score();
    box12.display();
    box12.score();
    box13.display();
    box13.score();
    box14.display();
    box14.score();
    box15.display();
    box15.score();
    box16.display();
    box16.score();

    ubox1.display();
    ubox2.display();
    ubox3.display();
    ubox4.display();
    ubox5.display();
    ubox6.display();
    ubox7.display();
    ubox8.display();
    ubox9.display();
    ubox1.score();
    ubox2.score();
    ubox3.score();
    ubox4.score();
    ubox5.score();
    ubox6.score();
    ubox7.score();
    ubox8.score();
    ubox9.score();

    hitobject.display();
    sling.display();
}

function mouseDragged(){
    if(gameState!=="Launched"){
    Matter.Body.setPosition(hitobject.body,{x:mouseX ,y:mouseY})
    }
}

function mouseReleased(){
    sling.fly();
    gameState="Launched";
}

function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(hitobject.body,{x:150,y:400});
        sling.attach(hitobject.body);
        gameState="onSling";
    }
}

async function setBackground(){
    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responsejson=await response.json();
    var dateTime=responsejson.datetime;
    var hour = dateTime.slice(11,13);
    if(hour>5&&hour<18){
        bg=230;
    }else{
        bg="black";
    }
    backgroundImg=bg;

}
