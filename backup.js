var string = "Hello!";            //string data type
console.log(string);

var num = 100;                //number data type
console.log(num);
  
var boo = true;                //boolean data type
console.log(boo);

var nl;                  
console.log(nl);        //this gives undefined

nl = null;              //this gives null
console.log(nl);

var newArray = [0,123,0214,true,"rfdavvfq"]           //a new array with 5 values...
console.log(newArray);             //printioin these 5 values in the console...

var a  = [[0,1,2,3,4],true,"nioq",99];     //an array in an array... here the first value of the array "a" is another array with 5 values, 

console.log(a[0][2]);       //[0]  is [0,1,2,3,4]  [2] is 2 of [0,1,2,3,4]     so bascically it is like slicing the json format...just here it is an array

newArray.push(123);             //adds 123 at the last of new Array

console.log(newArray);

a.pop();                     //removes last value in array

console.log(a);





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var platform;
var bird, slingshot;
var backgroundImg;

var gameState = "onsling";           
var side,up;
var score = 0;


function preload() {
   getTheTime();

    //    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    createCanvas(1200,600);             //createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    

   
    ground = new Ground(600,height,1200,20);
    
    up = new Ground(width/2 + 200,5,width/1.5,10);

    side = new Ground(width-5,10,10,height);
    platform = new Ground(80, 404, 300, 370);

    box1 = new Box(700,440,70,70);
    box2 = new Box(920,440,70,70);
    pig1 = new Pig(810, 465);
    log1 = new Log(810,390,300, PI/2);

    box3 = new Box(700,545,70,70);
    box4 = new Box(920,545,70,70);
    pig3 = new Pig(810, 555);

    log3 =  new Log(810,490,300, PI/2);

    box5 = new Box(810,340,70,70);
    log4 = new Log(760,310,150, PI/7);
    log5 = new Log(870,310,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    
    if(backgroundImg){
    background(backgroundImg);
    }


   
    Engine.update(engine);

fill("white");
textSize(30);
text("Score: "+score, width-290, 50)
text("Press Spacebar to get another chance!!",250,50)






    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();
    side.display()
    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    up.display();
    //log6.display();
    slingshot.display(); 
    
    if(score === 400){
       
        gameState = "over";

    }

    if(gameState === "over"){




         World.remove(world,bird.body);
         World.remove(world,box1.body);
         World.remove(world,box2.body);
         World.remove(world,box3.body);
         World.remove(world,box4.body);
         World.remove(world,box5.body);
         World.remove(world,log3.body);
         World.remove(world,log1.body);
         World.remove(world,log4.body);
         World.remove(world,log5.body);

         World.remove(world,side.body);
         World.remove(world,ground.body);
         World.remove(world,up.body);
         background("black");
         textSize(35);
         fill("white");
         text("You won!! Press Ctrl+R to play again...",300,height/2);
         text("Your Score : "+score,450,height-200);


    }
    
   
}

function mouseDragged(){

    if(gameState !== "launched")    {               // ! means not
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});

    }
}


function mouseReleased(){
    slingshot.fly();
    if(gameState !== "launched")    {     
    bird.tra = [];
    Matter.Body.setAngularVelocity(bird.body,0.7);
    }
    gameState = "launched";         
}

function keyPressed(){
   // newArray = [0,1,332,35,25]
    if(keyCode === 32 && gameState === "launched"){
        bird.tra = [];
        slingshot.attach(bird.body);
        Matter.Body.setPosition(bird.body,{x: 200,y: 50})
        gameState = "onsling"
        Matter.Body.setAngle(bird.body,PI/15)
        Matter.Body.setAngularVelocity(bird.body,0)
        Matter.Body.setPosition(bird.body,{x: 200, y: 50});
        Matter.Body.setVelocity(bird.body,{x:0,y:0})
    }

   
  
}


async function getTheTime(){

    var respond = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    
    var respondJSON = await respond.json(); 

    var dateTime = respondJSON.datetime;

    var hour = dateTime.slice(11,13);

  

    if(hour <= 05 && hour >= 19){

        bg = "sprites/bg2.jpg"


    }
    else{

        bg = "sprites/bg.png"


    }

backgroundImg = loadImage(bg);


}