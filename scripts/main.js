// main.js
let murm

function setup() {
  let cvn = createCanvas(windowWidth, windowHeight);
  cvn.style('display', 'block')

  murm = new Murmuration({
    xNum: 32,
    yNum: 32,
  })

  var options = {
    preventDefault: true
  }
}

function update() {
  murm.update()
}

function draw() {
  update()
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
