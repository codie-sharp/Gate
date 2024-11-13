import './style.css';
// import * as constants from './utils/constants';
import * as shapes from './scenes/createShapes';
import { ObjectManager } from './utils/objectManager'; 
import { Engine, Scene, Camera, Vector3, HemisphericLight, Mesh, TargetCamera } from '@babylonjs/core';

const canvas = document.getElementById('app') as HTMLCanvasElement;
const engine = new Engine(canvas);
const scene = new Scene(engine);

const camera = new TargetCamera("camera", new Vector3(0 ,0, -2), scene);
camera.mode = Camera.ORTHOGRAPHIC_CAMERA;
scene.activeCamera = camera;

let obj1: Mesh = shapes.createCube(scene);
let obj2: Mesh = shapes.createSphere(scene);
let obj3: Mesh = shapes.createTorus(scene);

const objectManager = new ObjectManager(engine, camera, scene, obj1, obj2, obj3)
objectManager.updateLayout();

new HemisphericLight("light", new Vector3(0, 5, -5), scene);

engine.runRenderLoop(() => scene.render());

window.addEventListener("resize", () => objectManager.updateLayout());
