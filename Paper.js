class Paper {
constructor(x,y){
 var options ={
    isStatic: false,
    restitution : 0.3 ,
    friction :0.5 ,
    density : 1.2
     }
     this.image = loadImage("paper.png");
this.body = Bodies.circle(x,y,20,options);
this.r =30 ;
World.add(world, this.body);
    }
display(){

var pos = this.body.position;
push();
translate(pos.x , pos.y);
rectMode(CENTER);

fill("pink");
//ellipse(0,0,this.r);
imageMode(CENTER)
    image(this.image ,0,0,50,50);
    
pop();
    }
};