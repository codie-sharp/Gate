import './style.css';
import * as constants from './utils/constants';
import * as shapes from './scenes/createShapes';
import { Engine, Scene, Vector3, HemisphericLight, Mesh, UniversalCamera, Viewport } from '@babylonjs/core';

const canvas = document.getElementById('app') as HTMLCanvasElement;
const engine = new Engine(canvas);
const scene = new Scene(engine);

let objLeft: Mesh = shapes.createCube(scene);
objLeft.position = constants.objLeftPos;

let objCenter: Mesh = shapes.createSphere(scene);
objCenter.position = constants.objCenterPos;

let objRight: Mesh = shapes.createTorus(scene);
objRight.position = constants.objRightPos;

const camLeft = new UniversalCamera("camLeft", constants.camLeftPos, scene);
camLeft.setTarget(constants.objLeftPos);
camLeft.viewport = new Viewport(0, 0, 0.33, 1);
camLeft.fov = 1 / (engine.getAspectRatio(camLeft) * 4);

const camCenter = new UniversalCamera("camCenter", constants.camCenterPos, scene);
camCenter.setTarget(constants.objCenterPos);
camCenter.viewport = new Viewport(0.33, 0, 0.33, 1);
camCenter.fov = 1 / (engine.getAspectRatio(camCenter) * 4);

const camRight = new UniversalCamera("camRight", constants.camRightPos, scene);
camRight.setTarget(constants.objRightPos);
camRight.viewport = new Viewport(0.66, 0, 0.33, 1);
camRight.fov = 1 / (engine.getAspectRatio(camRight) * 4);

scene.activeCameras = [camLeft, camCenter, camRight];

new HemisphericLight("light", new Vector3(0, 5, -5), scene);

engine.runRenderLoop(() => scene.render());

window.addEventListener("resize", () => {
    engine.resize(true);
    camLeft.fov = 1 / (engine.getAspectRatio(camLeft) * 4);
    camCenter.fov = 1 / (engine.getAspectRatio(camCenter) * 4);
    camRight.fov = 1 / (engine.getAspectRatio(camRight) * 4);
});
