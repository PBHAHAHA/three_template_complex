import * as THREE from "three"
import Sizes from "./Utils/Sizes"
import Camera from "./Camera"
import Renderer from "./Renderer"
import World from "./World/World"

let instance = null
class Experience {
  constructor(_dom_canvas) {
    if(instance) {
      return instance
    }
    instance = this
    window.experience = this
    // dom 画布
    this.canvas = _dom_canvas
    /** 基本 class */
    this.scene = new THREE.Scene()

    this.world = new World()

    this.sizes = new Sizes()
    this.camera = new Camera()
    this.renderer = new Renderer()


    // 初始化时执行的方法
    this.update()
  }

  resize() {

  }

  update() {
    this.camera.update()
    this.world.upload()
    this.renderer.update()
  }

}


export default Experience