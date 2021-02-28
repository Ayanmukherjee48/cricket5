class Stumps{
    constructor(x, y, width, height) {
      var options = {
           isStatic : true,
          'restitution':0.8,
          'friction':1.0
      }
      
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
 
      World.add(world, this.body);
      this.image=loadImage("stumps.jpg");
    }

   

    display(){

     
      var pos =this.body.position;
      var angle = this.body.angle
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4);
      stroke("blue");
      fill(0);
      image(this.image,0, 0, this.width, this.height);
      pop();
  
    }
  }
