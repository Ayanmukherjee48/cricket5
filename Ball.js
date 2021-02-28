class Ball {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0.5,
            density: 0.2
        }
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = radius;
        World.add(world, this.body);
        this.image=loadImage("ball.png");
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
       imageMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle)
        fill(255);
       image(this.image,0,0,this.radius*2,this.radius*2);
        pop();
    }
}