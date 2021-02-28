class Bat {
    constructor(x, y, width, height,angle) {
      var options = {
           isStatic : false,
          'restitution':0.8,
          'friction':1.0
      }
      
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      Matter.Body.setAngle(this.body,angle)
      World.add(world, this.body);
      this.image=loadImage("bat.png");
    }

   

    display(){

     
      var pos =this.body.position;
      var angle = this.body.angle
      pos.x=mouseX
      pos.y=mouseY
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("Green");
      fill(0);
     image(this.image,0, 0, this.width, this.height);
      pop();
  
    }
  }
