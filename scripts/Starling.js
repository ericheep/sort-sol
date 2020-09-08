// Starling.js

function Starling(config) {
  this.config = config
  this.index = config.index

  this.x = config.xSize / 2.0 + config.xPos
  this.y = config.ySize / 2.0 + config.yPos
  this.r = config.xSize / 2.0

  this.update = function(angle) {
    // console.log(this.index, angle)
  }

  this.draw = function() {
    ellipse(this.x, this.y, this.r, this.r)
  }
}
