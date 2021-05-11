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
var pig1,pig2;
var platform;
var bird, slingshot;
var backgroundImg;

var pig3,pig4,pig5,pig6;

var box1,box2,box3,box4,box5;

var box6,box7,box8,box9,box10


var gameState = "onsling";           
var side,up;
var score = 0;


function preload() {
   getTheTime();

    //    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    createCanvas(windowWidth,windowHeight);             //createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    

   
    ground = new Ground(width/2,height,width,20);
    
    up = new Ground(width/2 + 200,5,width/1.5,10);

    side = new Ground(width-5,10,10,height);
    platform = new Ground(80, height-195, 300, 370);

    
    pig1 = new Pig(830, height-50);
    pig2 = new Pig(790, height-50);
    pig3 = new Pig(810,height-110);
    pig4 = new Pig(810,height-160);

    log1 = new Log(810,height-30,300, PI/2);
    //log2 = new Log(810,height-75,300,PI/2);
    
    log3 =  new Log(810,height-60,400, PI/2);
    log4 = new Log(760,height-150,150, PI/7);
    log5 = new Log(870,height-160,150, -PI/7);
    log6 = new Log(810,height-120,400,PI/2);
     
     
    log7 = new Log(810,height-100,400,PI/2);
    
    log8 = new Log(810,height-140,400,PI/2);


    

    
    bird = new Bird(200,50);


     box1 = new Box(700,height-20,70,70);
     box2 = new Box(920,height-20,70,70);
     box3 = new Box(700,height-40,70,70);
     box4 = new Box(920,height-40,70,70);

     box5 = new Box(810,height-70,70,70);
     box6 = new Box(700,height-70,70,70);
     box7 = new Box(920,height-70,70,70);
     box8 = new Box(810,height-70,70,70);
     box9 = new Box(700,height-70,70,70);

     box10 = new Box(700,height-110,70,70);
     box11 = new Box(920,height-110,70,70);
     box12 = new Box(810,height-130,70,70);
     box13 = new Box(810,height-130,70,70);

     box14 = new Box(700,height-130,70,70);
     box15 = new Box(920,height-130,70,70);
     box16 = new Box(700,height-130,70,70);
     box17 = new Box(920,height-130,70,70);
     box18 = new Box(920,height-90,70,70);

     slingshot = new SlingShot(bird.body,{x:200, y:height-545});



}

function draw(){
    
    if(backgroundImg){
    background(backgroundImg);
    }


   
    Engine.update(engine);

    fill("white");
    textSize(30);
    text("Score: "+score, width-290, 50);
    text("Press Spacebar to get another chance!!",100,50);
    text("Kill all the pigs! ",200,100)





    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    
    box10.display();
    box11.display();    
    box12.display();    
    box13.display();     
         
    box14.display();    
    box15.display();    
    box16.display();
    box17.display();
    box18.display()

    ground.display();

    pig1.display();
    pig2.display();
    pig3.display();
    pig4.display();



  
    side.display();
    
    

    bird.display();
    platform.display();
    up.display();
    
    slingshot.display(); 
    
   
    pig1.score();
    pig2.score();
    pig3.score();
    pig4.score();
    

    log1.display();
    //log2.display();
    log3.display();
    log4.display();
    log5.display();
    log6.display();
    log7.display();
    log8.display();

    
    
    
    
    
    
    
    
    
    
    /*/
    
    
    if(keyCode === 114){
       
        //      Matter.Body.setAngularVelocity(bird.body,3)
              Matter.Body.setAngularVelocity(bird.body,);
       }
    */    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    if(score === 800){
       
        gameState = "over";

    }

    if(gameState === "over"){




         World.remove(world,bird.body);
         World.remove(world,box1.body);
         World.remove(world,box2.body);
         World.remove(world,box3.body);
         World.remove(world,box4.body);
        // World.remove(world,box5.body);
         World.remove(world,log3.body);
         World.remove(world,log1.body);
       //  World.remove(world,log4.body);
        // World.remove(world,log5.body);

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
    Matter.Body.setAngularVelocity(bird.body,0.4);
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
        Matter.Body.setPosition(bird.body,{x: 200, y: height-545});
        Matter.Body.setVelocity(bird.body,{x:0,y:0})
    }

    
}


async function getTheTime(){
/*/
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
*/
bg = "sprites/bg.png"

backgroundImg = loadImage(bg);


}