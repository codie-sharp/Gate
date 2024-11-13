import { Camera, Engine, Mesh } from "@babylonjs/core";
import * as constants from './constants';

export class ObjectManager {
    engine: Engine;
    camera: Camera;
    objects: Array<Mesh>;

    constructor(engine: Engine, camera: Camera, obj1: Mesh, obj2: Mesh, obj3: Mesh) {
        this.engine = engine;
        this.camera = camera;
        this.objects = [obj1, obj2, obj3];
    }

    updateLayout() {
        this.engine.resize(true);
        const aspectRatio = this.engine.getAspectRatio(this.camera);
    
        const layout = aspectRatio > 1 ? constants.rowLayout : constants.columnLayout;
        this.objects[0].position = layout.pos1;
        this.objects[1].position = layout.pos2;
        this.objects[2].position = layout.pos3;

        const orthoSize = aspectRatio > 1 ? 3 : 3;
        this.camera.orthoLeft = -orthoSize * aspectRatio;
        this.camera.orthoRight = orthoSize * aspectRatio;
        this.camera.orthoTop = orthoSize;
        this.camera.orthoBottom = -orthoSize;
    }

    // setObjects(obj1: Mesh, obj2: Mesh, obj3: Mesh) {
    //     this.objects = [obj1, obj2, obj3];
    // }
}
