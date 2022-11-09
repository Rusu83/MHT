var n=3;
var t=16;
var x;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  textAlign(CENTER,CENTER);
}


function draw() {
  background(0);
  stroke(207, 46, 46);
  strokeWeight(width/100);
  noFill();
  rect(0, 0, width, height);
  x=map(n, 0, t, 0, 0.9*width);
  noStroke();
  fill(207, 46, 46);
  rect(0.05*width, 0.05*width, x, height-0.1*width);
  stroke(207,46,46);
  for (var i=0; i<=t; i++) {
    line(map(i,0,t,0.05*width,0.95*width),0.05*width,map(i,0,t,0.05*width,0.95*width),height-0.05*width);
  }
  if(n>3){
    textSize(width/25);
  }
  else{
    textSize(width/30);
  }
  fill(0);
  strokeWeight(width/400);
  stroke(0);
  text(n+'/'+t+' DONE'+'\n'+(t-n)+' TO GO',x/2+0.05*width,height/2);
}
