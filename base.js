class Ground{
    constructor(x,y,width,height){
        var ground_options={
            isStatic:true 
            }
        this.body = Bodies.rectangle(x,y,width,height,ground_options);
        this.height=height;
        this.width=width;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        fill("red");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height)
        pop();
    }
}