class dustbin 
{
    constructor(x,y)
    {
      
        this.x=x;
        this.y=y;
        this.width=200;
        this.height=100;
        this.thickness=20;

        this.bbody=Bodies.rectangle(this.x, this.y, this.width,this.thickness,{isStatic:false});
        Matter.Body.setAngle(this.bbody,this.angle)
        World.add(world, this.bbody);
        
        this.lbody=Bodies.rectangle(this.x-width/2, this.y, this.thickness,this.height,{isStatic:false});
        World.add(world, this.lbody);
        this.rbody=Bodies.rectangle(this.x+width/2, this.y, this.width,this.thickness,{isStatic:false});
        Matter.Body.setAngle(this.rbody,this.angle)
		World.add(world, this.rbody);
    }
     
    

    display()
    {
        var pos1=this.bbody.position;
        var pos2=this.lbody.position;
        var pos3=this.rbody.position;
        push()
			translate(pos1.x, pos1.y);
			rectMode(CENTER)
            strokeWeight(3);
            angleMode(RADIANS)
			fill(255,0,255)
			rect(0,0,this.width,this.thickness)
        pop()
        

        push()
        translate(pos2.x, pos2.y);
        rectMode(CENTER)
        strokeWeight(3);
        angleMode(RADIANS)
        fill(255,0,255)
        rotate (this.angle)
        rect(0,0,this.thickness,this.height)
    pop()

    push()
        translate(pos3.x, pos3.y);
        rectMode(CENTER)
        strokeWeight(3);
        angleMode(RADIANS)
        fill(255,0,255)
        rotate (-1*this.angle)
        rect(0,0,this.thickness,this.height)
    pop()
    }
}