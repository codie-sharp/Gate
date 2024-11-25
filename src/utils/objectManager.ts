import { Constants } from "./index";
import { createShape } from "../scenes"
import { Mesh, Scene } from "@babylonjs/core";

class ObjectManager {
    private objects = [
        {name: "objLeft", position: Constants.objLeftPos, mesh: new Mesh("")},
        {name: "objCenter", position: Constants.objCenterPos, mesh: new Mesh("")},
        {name: "objRight", position: Constants.objRightPos, mesh: new Mesh("")}
    ];
    private scene: Scene;

    constructor(scene: Scene) {
        this.scene = scene;
    }

    clear() {
        while(this.scene.meshes.length) {
            const mesh = this.scene.meshes[0];
            mesh.dispose();
        }
    }

    createShapes() {
        this.objects.forEach(object => {
            object.mesh = createShape(this.scene, object.position)
        })
    }
}

export default ObjectManager;