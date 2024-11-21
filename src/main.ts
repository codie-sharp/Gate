import './style.css';
import * as constants from './utils/constants';
import CreateShapes from './scenes/createShapes';
import CameraManager from './utils/cameraManager';
import { Engine, Scene, Vector3, HemisphericLight, Mesh, Viewport } from '@babylonjs/core';

const canvas = document.getElementById('app') as HTMLCanvasElement;
const engine = new Engine(canvas);
const scene = new Scene(engine);

const cameraManager = new CameraManager(engine, scene);
cameraManager.createCamera("camLeft", constants.camLeftPos, constants.objLeftPos, new Viewport(0, 0, 0.33, 1));
cameraManager.createCamera("camCenter", constants.camCenterPos, constants.objCenterPos, new Viewport(0.33, 0, 0.33, 1));
cameraManager.createCamera("camRight", constants.camRightPos, constants.objRightPos, new Viewport(0.66, 0, 0.33, 1));
cameraManager.setActiveCameras();

new HemisphericLight("light", new Vector3(0, 5, -5), scene);

const createShapes = new CreateShapes(scene);
let objLeft: Mesh = createShapes.createCube(constants.objLeftPos);
let objCenter: Mesh = createShapes.createSphere(constants.objCenterPos);
let objRight: Mesh = createShapes.createTorus(constants.objRightPos);

engine.runRenderLoop(() => scene.render());

window.addEventListener("resize", () => {
    engine.resize(true);
    cameraManager.adjustAllCamerasFov();
});
