class Chain{
    constructor(bodyA,bodyB){
        var options={
            length:200,
            stiffness:1.0,
            bodyA:bodyA,
            bodyB:bodyB,
        }
    this.chain = Constraint.create(options);
    World.add(world,this.chain);

    }
    display(){
    var pointA=this.chain.bodyA.position;
    var pointB=this.chain.bodyB.position;
        stroke ("black");
        strokeWeight(3);
        line (pointA.x,pointA.y, pointB.x,pointB.y);
    }
}