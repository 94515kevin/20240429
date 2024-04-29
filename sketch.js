function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO)
  capture.size(320,240);
}

function draw() {
  background(220);
  push()
  translate(width/2-160,height/2-120)
  image(capture,0, 0)
  pop()
}
