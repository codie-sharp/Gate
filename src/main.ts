import './style.css';
import { Constants, CameraManager, ObjectManager, ButtonHandler } from './utils';
import { Engine, Scene, Vector3, HemisphericLight, Viewport } from '@babylonjs/core';

const canvas = document.getElementById('app') as HTMLCanvasElement;
const engine = new Engine(canvas);
const scene = new Scene(engine);

const cameraManager = new CameraManager(engine, scene);
cameraManager.createCamera("camLeft", Constants.camLeftPos, Constants.objLeftPos, new Viewport(0, 0, 0.33, 1));
cameraManager.createCamera("camCenter", Constants.camCenterPos, Constants.objCenterPos, new Viewport(0.33, 0, 0.33, 1));
cameraManager.createCamera("camRight", Constants.camRightPos, Constants.objRightPos, new Viewport(0.66, 0, 0.33, 1));
cameraManager.setActiveCameras();

new HemisphericLight("light", new Vector3(0, 5, -5), scene);

const objectManager = new ObjectManager(scene);
const buttonHandler = new ButtonHandler(objectManager);

engine.runRenderLoop(() => scene.render());

window.addEventListener("resize", () => {
    engine.resize(true);
    cameraManager.adjustAllCamerasFov();
});
