class Paper{

    constructor(x,y, radius)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0,
			density:1.2			
			}
		//this.x=x;
		//this.y=y;
        this.radius=radius;
		this.body=Bodies.circle(x, y, radius, options);
        this.image = loadImage("paper.png")
		World.add(world, this.body);
}

display()
	{
			
	
		push();
		imageMode(CENTER)
		image(this.image,this.body.position.x, this.body.position.y, 55,55 )
        pop();	
 	}

}