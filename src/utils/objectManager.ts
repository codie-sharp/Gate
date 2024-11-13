import { Mesh, Vector3 } from "@babylonjs/core";
import * as constants from './constants';

export class ObjectManager {
    private objects: Array<Mesh>;

    constructor(obj1: Mesh, obj2: Mesh, obj3: Mesh) {
        this.objects = [obj1, obj2, obj3];
    }

    updateLayout(aspectRatio: number) {
        const layout = aspectRatio > 1 ? constants.rowLayout : constants.columnLayout;
        this.objects[0].position = layout.pos1;
        this.objects[1].position = layout.pos2;
        this.objects[2].position = layout.pos3;
    }

    setObjects(obj1: Mesh, obj2: Mesh, obj3: Mesh) {
        this.objects = [obj1, obj2, obj3];
    }
}
