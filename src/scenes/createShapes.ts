import * as constants from '../utils/constants';
import { Scene, MeshBuilder, Mesh, Vector3 } from '@babylonjs/core';

class CreateShapes {
    private scene: Scene;

    constructor(scene: Scene) {
        this.scene = scene;
    }

    createSphere(): Mesh {
        const sphere = MeshBuilder.CreateSphere("sphere", { diameter: 2, segments: 16 }, this.scene);
        return sphere;
    }
    
    createCube(): Mesh {
        const cube = MeshBuilder.CreateBox("cube", { size: 2 }, this.scene);
        return cube;
    }
    
    createTorus(): Mesh {
        const torus = MeshBuilder.CreateTorus("torus", { diameter: 1.75, thickness: .25 }, this.scene);
        torus.rotation = new Vector3(constants.ninetyDegrees, 0, 0);
        return torus;
    }
}

export default CreateShapes;
