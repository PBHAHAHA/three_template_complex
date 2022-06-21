import { BoxBufferGeometry, BoxGeometry, Mesh, MeshBasicMaterial } from "three"
import Experience from "../Experience"

class World {
  constructor() {
    this.scene = new Experience().scene
    this.initMesh()
  }
  initMesh() {
    const geometry = new BoxBufferGeometry(1,1,1)
    const material = new MeshBasicMaterial({
      color: '#ff0000'
    })
    this.instance = new Mesh(geometry,material)
  }
  upload() {

    this.scene.add(this.instance)
  }
}

export default World