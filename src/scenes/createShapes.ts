import * as constants from '../utils/constants';
import { Scene, MeshBuilder, Mesh, Vector3 } from '@babylonjs/core';

export function createSphere(scene: Scene): Mesh {
    const sphere = MeshBuilder.CreateSphere("sphere", { diameter: 2, segments: 16 }, scene);
    return sphere;
}

export function createCube(scene: Scene): Mesh {
    const cube = MeshBuilder.CreateBox("cube", { size: 2 }, scene);
    return cube;
}

export function createTorus(scene: Scene): Mesh {
    const torus = MeshBuilder.CreateTorus("torus", { diameter: 1.75, thickness: .25 }, scene);
    torus.rotation = new Vector3(constants.ninetyDegrees, 0, 0);
    return torus;
}
