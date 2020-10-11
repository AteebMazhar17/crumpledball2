class ball{
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':0.8
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius=radius;
      this.image=loadImage("sprites/ball.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(RADIUS)
      ellipse(0, 0, this.radius,this.radius);
      pop();
    }
  };
  