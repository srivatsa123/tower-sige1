class Launch{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:0.1,
            stiffness:0.02
        }
        this.launch=Matter.Constraint.create(options);
        this.bodyA=bodyA;
        this.pointB=pointB;

        World.add(world,this.launch);
    }

    fly(){
        this.launch.bodyA=null;
    }

    attach(body){
        this.launch.bodyA=body;
    }

    display(){
        if(this.launch.bodyA){
        var bodyA=this.bodyA.position;
        var pointB=this.pointB;

        stroke("red");
        strokeWeight(4);
        line(pointB.x,pointB.y,bodyA.x,bodyA.y);
        }
    }
}