import { Scene, MeshBuilder, Vector3 } from '@babylonjs/core';

export function createBall(scene: Scene, position: Vector3): void {
    const sphere = MeshBuilder.CreateSphere("sphere", { diameter: 2, segments: 16 }, scene);
    sphere.position = position;
}