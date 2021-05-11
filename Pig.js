class Pig extends BaseClass {
  

  constructor(x, y){
    super(x,y,50,50);
    this.images = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
  }

 display(){
  // console.log(this.body.speed);
   if(this.body.speed < 10){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 0.5;
     tint(255,this.Visiblity);
     image(this.images, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
   
 }


 score(){

if(this.Visiblity < 0 && this.Visiblity > -100.5){

  score++;

}


 }



};
