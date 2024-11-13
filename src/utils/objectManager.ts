import { BoundingBox, Camera, Engine, Mesh, Scene, Vector3 } from "@babylonjs/core";
import * as constants from './constants';

export class ObjectManager {
    engine: Engine;
    scene: Scene;
    camera: Camera;
    objects: Array<Mesh>;

    constructor(engine: Engine, camera: Camera, scene: Scene, obj1: Mesh, obj2: Mesh, obj3: Mesh) {
        this.engine = engine;
        this.scene = scene;
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

        const boundingBox = new BoundingBox(new Vector3(), new Vector3());

        this.objects.forEach(obj => {
            const objBoundingBox = obj.getHierarchyBoundingVectors();
            boundingBox.minimum.x = Math.min(boundingBox.minimum.x, objBoundingBox.min.x);
            boundingBox.maximum.x = Math.max(boundingBox.maximum.x, objBoundingBox.max.x);

            boundingBox.minimum.y = Math.min(boundingBox.minimum.y, objBoundingBox.min.y);
            boundingBox.maximum.y = Math.max(boundingBox.maximum.y, objBoundingBox.max.y);

            boundingBox.minimum.z = Math.min(boundingBox.minimum.z, objBoundingBox.min.z);
            boundingBox.maximum.z = Math.max(boundingBox.maximum.z, objBoundingBox.max.z);
        });

        const boundingBoxSize = new Vector3(
            boundingBox.maximum.x - boundingBox.minimum.x,
            boundingBox.maximum.y - boundingBox.minimum.y,
            boundingBox.maximum.z - boundingBox.minimum.z
        );

        // const orthoSize = 2;
        // if (aspectRatio > 1) {
        //     this.camera.orthoLeft = -orthoSize * aspectRatio;
        //     this.camera.orthoRight = orthoSize * aspectRatio;
        //     this.camera.orthoTop = orthoSize;
        //     this.camera.orthoBottom = -orthoSize;
        // } else {
        //     this.camera.orthoLeft = -orthoSize;
        //     this.camera.orthoRight = orthoSize;
        //     this.camera.orthoTop = orthoSize * aspectRatio;
        //     this.camera.orthoBottom = -orthoSize * aspectRatio;
        // }
        if (aspectRatio > 1) {
            this.camera.orthoTop = (boundingBoxSize.y / 2)  * aspectRatio;
            this.camera.orthoBottom = (-boundingBoxSize.y / 2)  * aspectRatio;
            this.camera.orthoRight = (boundingBoxSize.x / 2) * aspectRatio;
            this.camera.orthoLeft = (-boundingBoxSize.x / 2) * aspectRatio;
        } else {
            this.camera.orthoTop = boundingBoxSize.y / 2;
            this.camera.orthoBottom = -boundingBoxSize.y / 2;
            this.camera.orthoRight = boundingBoxSize.x / 2;
            this.camera.orthoLeft = - boundingBoxSize.x / 2;
        }
    }

    // setObjects(obj1: Mesh, obj2: Mesh, obj3: Mesh) {
    //     this.objects = [obj1, obj2, obj3];
    // }
}
