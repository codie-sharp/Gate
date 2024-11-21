import { Constants } from "./index";
import { CreateShapes } from "../scenes"
import { Mesh, MeshBuilder, Scene } from "@babylonjs/core";

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

    createShapes() {
        this.objects.forEach(object => {
            object.mesh = MeshBuilder.CreateSphere(object.name, { diameter: 2, segments: 16 }, this.scene);
            object.mesh.position = object.position;
        })
    }
}

export default ObjectManager;