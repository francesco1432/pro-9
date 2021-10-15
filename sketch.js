var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400); 
}

function draw() {
background(0);
  if (keyIsDown (UP_ARROW)) {
    background(0,255,0);
    } 

if (keyIsDown (LEFT_ARROW)) {
  background(255,0,0);
  } 

if (keyIsDown(RIGHT_ARROW)) {
  background(0,0,255);
  } 

}
