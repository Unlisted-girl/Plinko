class Plinko{
    constructor(x, y, radius){
        var options ={
            resitution: 0.02
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = 10;
        World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      ellipseMode(RADIUS);
      fill("white");
      ellipse(pos.x, pos.y, this.radius);
    }
}