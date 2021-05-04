var sc;
var hr;
var mins ;


function setup() {
  createCanvas(800,600);
  angleMode(DEGREES)

}

function draw() {
  background("black");  
  drawSprites();

  sc = second();
  hr = hour ();
  mins = minute();
  
  translate(400,300);
  rotate(-90)
  scAngle = map(sc,0,60,0,360);
  push();
 rotate (scAngle);
 stroke("red");
 strokeWeight(5);
 line(0,0,50,0);
 pop();



 strokeWeight(5);
 stroke("red");
 noFill();
 arc(0,0,200,200,0,scAngle);


 minsAngle = map(mins,0,60,0,360);
 push();
rotate (minsAngle);
stroke("yellow");
strokeWeight(5);
line(0,0,75,0);
pop();

strokeWeight(5);
 stroke("yellow");
 noFill();
 arc(0,0,225,225,0,minsAngle);


 hrAngle = map(hr%12,0,12,0,360);
 push();
rotate (hrAngle);
stroke("blue");
strokeWeight(5);
line(0,0,75,0);
pop();


 strokeWeight(5);
 stroke("blue");
 noFill();
 arc(0,0,250,250,0,hrAngle);
}