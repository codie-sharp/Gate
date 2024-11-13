import './style.css';
import * as constants from './utils/constants';
import { updateLayout } from './utils/updateLayout';
import { createBall } from './scenes/createBall';
import { Engine, Scene, FreeCamera, Camera, Vector3, HemisphericLight } from '@babylonjs/core';

const canvas = document.getElementById('app') as HTMLCanvasElement;
const engine = new Engine(canvas);
const scene = new Scene(engine);

const camera = new FreeCamera("camera", new Vector3(0 ,0, -2), scene);
camera.mode = Camera.ORTHOGRAPHIC_CAMERA;
scene.activeCamera = camera;

updateLayout(engine, camera);

new HemisphericLight("light", new Vector3(0, 5, -5), scene);

createBall(scene, constants.rowLayout.pos1);
createBall(scene, constants.rowLayout.pos2);
createBall(scene, constants.rowLayout.pos3);

engine.runRenderLoop(() => scene.render());

window.addEventListener("resize", () => updateLayout(engine, camera));