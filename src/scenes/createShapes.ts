import earcut from "earcut";
import { Constants } from "../utils";
import { MeshBuilder, Mesh, Vector3, Scene, StandardMaterial, Color3, Color4, VertexData } from '@babylonjs/core';

const shapes = [
    function createCircle(scene: Scene): Mesh {
        return MeshBuilder.CreateDisc("circle", { radius: 1}, scene);
    },

    function createSquare(scene: Scene): Mesh {
        return MeshBuilder.CreatePlane("square", { size: 2 }, scene);
    },

    function createTriangle(scene: Scene): Mesh {
        const triangle = new Mesh("triangle", scene);
    
        const positions = [
            0, 1, 0,
            -1, -1, 0,
            1, -1, 0
        ];
    
        const indices = earcut([0, 1, -1, -1, 1, -1], undefined, 2);
    
        const vertexData = new VertexData();
        vertexData.positions = positions;
        vertexData.indices = indices;
    
        vertexData.applyToMesh(triangle);
    
        return triangle;
    }
];

export function createShape(scene: Scene, position: Vector3): Mesh {
    const shapeFunction = shapes[Math.floor(Math.random() * shapes.length)];
    const shape = shapeFunction(scene);
    shape.position = position;
    return shape;
}
