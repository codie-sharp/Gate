// import earcut from "earcut";
import { MeshBuilder, Mesh, Vector3, Scene, VertexData } from '@babylonjs/core';

export const Shapes = [
    function createCircle(scene: Scene): Mesh {
        return MeshBuilder.CreateDisc("circle", { radius: 1}, scene);
    },

    function createSquare(scene: Scene): Mesh {
        return MeshBuilder.CreatePlane("square", { size: 2 }, scene);
    },

    // function createTriangle(scene: Scene): Mesh {
    //     const vertices = [new Vector3(0, 1, 0), new Vector3(-1, 0, 0), new Vector3(1, 0, 0)];
    //     const triangle = MeshBuilder.CreatePolygon("triangle", { shape: vertices, sideOrientation: Mesh.DOUBLESIDE }, earcut, scene);
    //     console.log(triangle);
    //     return triangle;
    // }

    // function createTriangle(scene: Scene): Mesh {
    //     const triangle = new Mesh("triangle", scene);
    
    //     const positions = [
    //         0, 1, 0,
    //         -1, -1, 0,
    //         1, -1, 0
    //     ];
    
    //     const indices = earcut([0, 1, -1, -1, 1, -1], undefined, 2);
    
    //     const vertexData = new VertexData();
    //     vertexData.positions = positions;
    //     vertexData.indices = indices;
    
    //     vertexData.applyToMesh(triangle);
    
    //     return triangle;
    // }
];

// export function createShape(scene: Scene, position: Vector3): Mesh {
//     const shapeFunction = shapes[Math.floor(Math.random() * shapes.length)];
//     const shape = shapeFunction(scene);
//     shape.position = position;
//     return shape;
// }
