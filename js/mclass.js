class mclass{
    constructor(x, y, width, height, angle) {
         
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
         
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
         pop();
      }
}