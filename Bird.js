class Bird extends BaseClass {

   constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/smoke.png");
    this.images = loadImage("sprites/bird.png");
  this.Visibility = 255;
    this.tra = [];             //this.tra is an empty array
    this.Visiblity = 255;
    
    
   }
   display() {


   super.display();
  
  
    if(this.body.speed > 5 && this.body.position.x > 200){       

  var position = [this.body.position.x,this.body.position.y]        //an array with the x and y position of the bird body

  this.tra.push(position); //see sketch.js..for push()...     //adding the array of position to the last (and only value) of the array "tra"..so tra contains the position  of the bird body.

    }


if(gameState==="launched"){

  for(var i = 0; i < this.tra.length; i = i+1){         // a loop go to code.org for details and revising..
    
    image(this.image, this.tra[i][0] , this.tra[i][1]);             //not clear...  :(
     
  }



  
}





  
  
  }
}
