class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.images = loadImage("sprites/wood1.png");
    this.Visibility = 255
  }

  display(){
    // console.log(this.body.speed);
     if(this.body.speed < 13){
      super.display();
     }
     else{
       World.remove(world, this.body);
      
     }

  
    
     
   }
  
  
  
  };
  
  
  




