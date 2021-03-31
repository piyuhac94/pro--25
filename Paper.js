class Paper {
   
  constructor(x,y, p_radius) {
    var options = {
      'restitution':0.8,
      'friction':1,
      'density':5
    }
    
    this.body = Bodies.circle(x,y, p_radius,options);
    this.rad2 = p_radius;
    
    //this.body.applyForce(paper, 50, 1);
    
    World.add(world, this.body);
    this.image = loadImage("paper.png");
  }
  display(){
    var pos =this.body.position;
    //var rad2 = this.body.p_radius;

 
    
   image(this.image, pos.x, pos.y, this.rad2, this.rad2);
   imageMode(CENTER);
    //fill("blue");
   //ellipse(pos.x, pos.y,this.rad2, this.rad2);
   

  }
};