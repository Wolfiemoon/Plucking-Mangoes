class Stone{
    constructor(x, y, width, height, angle, options) {
        var options = {
            'restitution':0,
            'friction':1,
            'isStatic':false,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.x=x
        this.y=y
        this.height = height;
        //this.r=r
        this.image = loadImage("stone.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height, this.angle);
        pop();
      }
}