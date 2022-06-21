import { NoToneMapping, sRGBEncoding, WebGLRenderer } from "three";

import Experience from "./Experience.js";
class Renderer {
  constructor() {
    this.experience = new Experience();
    this.canvas = this.experience.canvas;
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.camera = this.experience.camera;

    this.setInstance();
  }

  setInstance() {
    // console.log(this.canvas)
    this.instance = new WebGLRenderer({
      canvas: this.canvas,
      antialias: true, //抗锯齿
    });
    this.instance.setClearColor("#262626", 1);
    this.instance.physicallyCorrectLights = true;
    // this.instance.gammaOutPut = true
    this.instance.outputEncoding = sRGBEncoding;
    // this.instance.shadowMap.type = THREE.PCFSoftShadowMap
    // this.instance.shadowMap.enabled = false
    this.instance.toneMapping = NoToneMapping;
    this.instance.toneMappingExposure = 1;

    this.resize();
  }
  resize() {
    this.instance.setSize(this.sizes.width, this.sizes.height);
    this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));
  }
  update() {
    console.log("renderer----执行了", this.scene, this.camera.instance);
    this.instance.render(this.scene, this.camera.instance);
  }
}

export default Renderer;
