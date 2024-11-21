import { Vector3 } from '@babylonjs/core';

class Constants {
    // objects
    static objLeftPos = new Vector3(-5, 0, 0);
    static objCenterPos = new Vector3(0, 0, 0);
    static objRightPos = new Vector3(5, 0, 0);
    
    // cameras
    static camLeftPos = new Vector3(-5, 0, -10);
    static camCenterPos = new Vector3(0, 0, -10);
    static camRightPos = new Vector3(5, 0, -10);
    
    // math
    static ninetyDegrees = Math.PI / 2;
    static oneEightyDegrees = Math.PI;
}

export default Constants;