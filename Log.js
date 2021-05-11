class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.images = loadImage("sprites/wood2.png");
   /// this.Visibility = 255;
    Matter.Body.setAngle(this.body, angle);
  }


  display(){
    // console.log(this.body.speed);
     if(this.body.speed < 13){
      super.display();
     }
     else{
       World.remove(world, this.body);
       
      
       push();
       translate( this.body.position.x, this.body.position.y);
       this.Visiblity = this.Visiblity - 0.5;
      
      
       tint(255,this.Visiblity);
       image(this.images,0,0, 50, 50);
       pop();
     }
     
   }

}






