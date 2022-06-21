

class Sizes {
  constructor() {
    this.updateSizes()
  }

  updateSizes() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)
  }
}

export default Sizes