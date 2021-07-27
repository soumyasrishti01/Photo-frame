function preload(){

}
  
function setup() {
  createCanvas(600, 500);
  video = createCapture(VIDEO);
}

function draw() {
  image(video, 110, 50, 400, 300);
  
  fill(0, 128, 0);
  stroke(0, 128, 0);
  circle(20,20,30);
  circle(20, 390, 30);
  circle(580, 20, 30);
  circle(580, 390, 30);
  
  fill(100,500,10);
  stroke(0, 200, 0);
  rect(40, 15, 520, 10);
  rect(15, 40, 10, 330);
  rect(40, 385, 520, 10);
  rect(575, 40, 10, 330);
}

function take_snapshot(){
    save('student_name.png');
}