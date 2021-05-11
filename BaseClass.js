class BaseClass{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.5,
             'friction':10,
           'frictionAir':0,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.images, 0, 0, this.width, this.height);

        pop();
      
        if(gameState === "over"){

          World.remove(world,this.body);
        }


        if(gameState === "onsling" && frameCount <= 100){


          Matter.Body.setVelocity(this.body,{x:0,y:0})



        }

      }
}