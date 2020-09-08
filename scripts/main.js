// main.js
let murm

function setup() {
  let cvn = createCanvas(windowWidth, windowHeight);
  cvn.style('display', 'block')

  murm = new Murmuration({
    xNum: 4,
    yNum: 4
  })

  var options = {
    preventDefault: true
  }
}

function draw() {
  background(0)
  murm.draw()
}

function mousePressed() {
  murm.checkPoint(mouseX, mouseY)
}

function mouseDragged() {
  murm.checkPoint(mouseX, mouseY)
}
