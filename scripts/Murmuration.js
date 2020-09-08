// Murmuration.js
// meant to contain many starlings

function Murmuration(dim) {
  this.config = {
    xNum: dim.xNum,
    yNum: dim.yNum,
    xSize: width / dim.xNum,
    ySize: height / dim.yNum,
  }

  const starlings = []

  this.update = function() {

  }

  this.draw = function() {

  }

  this.checkPoint = function(x, y) {
    let xIndex = Math.floor(x / this.config.xSize)
    let yIndex = Math.floor(y / this.config.ySize)
    let index = yIndex * this.config.xNum + xIndex

    const starling = starlings.find(e => e.index == index)

    if (starling == undefined) {
      let config = {
        index: index,
        xSize: this.config.xSize,
        ySize: this.config.ySize,
        xPos: xIndex * this.config.xSize,
        yPos: yIndex * this.config.ySize,
      }

      starlings.push(new Starling(config))
    }
  }
}
