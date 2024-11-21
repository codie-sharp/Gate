import * as constants from '../utils/constants';
import { Scene, MeshBuilder, Mesh, Vector3 } from '@babylonjs/core';

class CreateShapes {
    private scene: Scene;

    constructor(scene: Scene) {
        this.scene = scene;
    }

    createSphere(position: Vector3): Mesh {
        const sphere = MeshBuilder.CreateSphere("sphere", { diameter: 2, segments: 16 }, this.scene);
        sphere.position = position;
        return sphere;
    }
    
    createCube(position: Vector3): Mesh {
        const cube = MeshBuilder.CreateBox("cube", { size: 2 }, this.scene);
        cube.position = position;
        return cube;
    }
    
    createTorus(position: Vector3): Mesh {
        const torus = MeshBuilder.CreateTorus("torus", { diameter: 1.75, thickness: .25 }, this.scene);
        torus.position = position;
        torus.rotation = new Vector3(constants.ninetyDegrees, 0, 0);
        return torus;
    }
}

export default CreateShapes;
