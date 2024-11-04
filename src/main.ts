import './style.css';
import {Engine} from '@babylonjs/core';
import {Scene} from '@babylonjs/core';

const canvas = document.getElementById('app') as HTMLCanvasElement;
const engine = new Engine(canvas);

const createScene = function() {
    const scene = new Scene(engine);

    return scene;
}

const scene = createScene();

engine.runRenderLoop(function() {
    scene.render();
});