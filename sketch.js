let p1;let val1=100;let val2=40;let val3=20;
let w1a=2;let w2a=5;let w3a=3;let can;
function setup() {
  can=createCanvas(800,600);can.position(10,20);
  p1=new planets(val1,val2,val3,w1a,w2a,w3a,3);
angleMode(DEGREES);
  //frameRate(30);
  strokeWeight(3);
  intro();
}
let ang=0;
function draw() {
  text("val1 "+val1+" w3 "+w3a,30,30);
  //background(220);

translate(400,300);
 // planet1(100,100,ang);
  p1.display();
  //planet2(50,50,2*ang);
  //ang++;
 // ang=ang+0.3;
  p1.l1=val1;p1.l2=val2;p1.l3=val3;
  p1.w1=w1a;p1.w2=w2a;p1.w3=w3a;
}

function line1(n){
  for(let j=1;j<n+1;j=j+1){
   line(10*n-10*j,0,0,10*j); 
     }
}

function planet1(x,y,ang){
 push();
  rotate(2*ang);
  translate(x,y);
  fill(200,20,100);
  //ellipse(0,0,30,30);
  planet2(40,40,5*ang);
  pop();
  
}

function planet2(x,y,ang){
 push();
  rotate(ang);
  translate(x,y);
  fill(200,20,100);
 // ellipse(0,0,30,30);
  //point(0,0);
  planet3(20,20,3*ang);
  pop();
}

function planet3(x,y,ang){
 push();
  rotate(ang);
  translate(x,y);
  fill(200,20,100);
 // ellipse(0,0,30,30);
  point(0,0);
  pop();
}
  
  
