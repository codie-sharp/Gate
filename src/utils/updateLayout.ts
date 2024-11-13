import { Camera, Engine } from "@babylonjs/core";

export function updateLayout(engine: Engine, camera: Camera) {
    const aspectRatio = engine.getAspectRatio(camera);
    const orthoSize = 2;
    camera.orthoLeft = -orthoSize * aspectRatio;
    camera.orthoRight = orthoSize * aspectRatio;
    camera.orthoTop = orthoSize;
    camera.orthoBottom = -orthoSize;
}