import './style.css';
import { CameraManager, ObjectManager, ButtonManager } from './utils';
import { Engine, Scene, Vector3, HemisphericLight } from '@babylonjs/core';

const canvas = document.getElementById('app') as HTMLCanvasElement;
const engine = new Engine(canvas);
const scene = new Scene(engine);
const cameraManager = new CameraManager(engine, scene);
const objectManager = new ObjectManager(scene);
const buttonManager = new ButtonManager(objectManager);

new HemisphericLight("light", new Vector3(0, 5, -5), scene);


engine.runRenderLoop(() => scene.render());

window.addEventListener("resize", () => {
    engine.resize(true);
    cameraManager.adjustAllCamerasFov();
});
