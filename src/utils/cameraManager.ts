import { UniversalCamera, Scene, Viewport, Engine, Vector3 } from '@babylonjs/core';

class CameraManager {
    private cameras: UniversalCamera[] = [];
    private engine: Engine;
    private scene: Scene;

    constructor(engine: Engine, scene: Scene) {
        this.engine = engine;
        this.scene = scene;
    }

    createCamera(name: string, position: Vector3, target: Vector3, viewport: Viewport): UniversalCamera {
        const camera = new UniversalCamera(name, position, this.scene);
        camera.setTarget(target);
        camera.viewport = viewport;
        this.adjustCameraFov(camera);
        this.cameras.push(camera);
        return camera;
    }

    private adjustCameraFov(camera: UniversalCamera) {
        const aspectRatio = this.engine.getAspectRatio(camera);
        camera.fov = 1 / (aspectRatio * 4);
    }

    adjustAllCamerasFov() {
        this.cameras.forEach(camera => this.adjustCameraFov(camera));
    }

    setActiveCameras() {
        this.scene.activeCameras = this.cameras;
    }
}

export default CameraManager;
