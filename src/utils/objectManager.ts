import { Constants } from "./index";
import { Mesh, Scene, Vector3 } from "@babylonjs/core";

type Obj = { name: string, position: Vector3, mesh: Mesh };
type ObjArray = [Obj, Obj, Obj];

class ObjectManager {
    private objs: ObjArray;
    private scene: Scene;

    constructor(scene: Scene) {
        this.scene = scene;
        this.objs = [
            { name: "objLeft", position: Constants.objLeftPos, mesh: new Mesh("default", this.scene) },
            { name: "objCenter", position: Constants.objCenterPos, mesh: new Mesh("default", this.scene) },
            { name: "objRight", position: Constants.objRightPos, mesh: new Mesh("default", this.scene) }
        ];
    }

    clear() {
        while(this.scene.meshes.length) {
            console.log(this.scene.meshes[0].name);
            this.scene.meshes[0].dispose();
        };
    };

    renderObjects(sceneSelection: ((scene: Scene) => Mesh)[]) {

    };

    // Shapes() {
    //     this.clear();
        
    //     this.objs.forEach(obj => {
    //         const shapeFunction = Scenes.Shapes[Math.floor(Math.random() * Scenes.Shapes.length)];
    //         const shape = shapeFunction(this.scene);
    //         shape.position = obj.position;
    //         obj.mesh = shape;
    //     })
    // }
}

export default ObjectManager;