// main.js
let murm

function setup() {
  let cvn = createCanvas(windowWidth, windowHeight);
  cvn.style('display', 'block')

  murm = new Murmuration()

  var options = {
    preventDefault: true
  }
}

function draw() {
  background(Math.random())
  murm.draw()
}
