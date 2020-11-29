class Paper{
	constructor()
	{
		var options={
			restitution:0.3,
			friction:1.2,
			density:6
			
			}

		this.body=Bodies.circle(250,540,20,options)
		this.image = loadImage("sprites/paper1.png")
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER);
			image(this.image,0,0,50,50)
			pop()
			
	}

}








