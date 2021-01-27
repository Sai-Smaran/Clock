var hrAngle;
var minAngle;
var scAngle;

function setup() {
  createCanvas(displayWidth,displayHeight);
}

function draw() {
  var hr = hour();
  var min = minute();
  var sec = second();
  background(255,255,255);
  angleMode(DEGREES);
  scAngle = map(sec, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 24%12, 0, 360);
  translate(width/2,height/2);

  //hr
  //hand
  push();
  rotate(hrAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 45, 0);
  pop();

  //min Hand
  push();
  rotate(minAngle);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(0, 0, 70, 0);
  pop();

  //sec Hand
  push();
  rotate(scAngle);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0, 0, 75, 0);
  pop();

  noFill();
  arc(0, 0, 180, 180, 0, 360);

  drawSprites();

}