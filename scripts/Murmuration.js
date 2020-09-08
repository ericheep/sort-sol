// Murmuration.js
// meant to contain many starlings

function Murmuration(dim) {
  const config = {}

  config.xNum = dim.xNum
  config.yNum = dim.yNum
  config.xSize = width / dim.xNum
  config.ySize = height / dim.yNum

  console.log(config)

  this.update = function() {

  }

  this.draw = function() {

  }

  this.getIndex = function(x, y) {
    return Math.floor(y / config.ySize) * config.xNum + Math.floor(x / config.xSize)
  }

  this.checkPoint = function(x, y) {
    let index = this.getIndex(x, y)
    console.log(index)
  }
}
