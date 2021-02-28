class String {
  constructor(bodyA, pointB) {
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.5,
          length: 100
      }
      this.sling = Constraint.create(options);
      this.pointB = pointB;
      World.add(world, this.sling);
  }
  display() {
      if (this.sling.bodyA) {
          var pointA = this.sling.bodyA.position;
          var pointB = this.pointB;
          push();
          stroke("blue");
          strokeWeight(4);
          line(pointA.x, pointA.y, pointB.x, pointB.y);
          pop();
      }
  }

}