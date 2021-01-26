class Poly{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.7,
            friction:0.4,
            density:0.6           
            }
        this.body = Bodies.circle(x,y,30,options);
        World.add(world,this.body);
        
    }
    display(){
        
        var pos=this.body.position;
        push();
        fill("grey");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,30,40)
        pop();
    }
}