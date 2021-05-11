class CircleClass{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.5,
            'density':1.0,
            
        }
        this.bodyr = Bodies.circle(x, y,radius, options);
        this.radius = radius;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.bodyr);
      }
      display(){
        var angle = this.bodyr.angle;
        push();
        translate(this.bodyr.position.x, this.bodyr.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.images, 0, 0, this.radius);
        pop();
      }
}