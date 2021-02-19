class Tree{
    constructor(x, y, r, angle, options) {
        var options = {
            'restitution':0.1,
            'friction':0.2,
            'density':0
        }
        this.width = width;
        this.x=x
        this.r=r
        this.y=y
        this.height = height;
        this.body = Bodies.rectangle(x, y, r, options);
        this.image = loadImage("tree.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
      }
}