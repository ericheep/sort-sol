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
  isCreated(mouseX, mouseY)
}

function mouseDragged() {
  isCreated(mouseX, mouseY)
}

function isCreated(x, y) {
  if (isWithinBounds(x, y)) {
    murm.checkPoint(x, y)
  }
}

function isWithinBounds(x, y) {
  if (x >= 0 && x < width && y >= 0 && y < height) {
    return true
  } else {
    return false
  }
}
