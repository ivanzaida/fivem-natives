import { Vector3 } from "./vector3";

export class Vector3Ref {
    public readonly dataView = new DataView(new ArrayBuffer(24));

    public copyToVector(vector: Vector3): void {
        vector.x = this.dataView.getFloat32(0, true);
        vector.y = this.dataView.getFloat32(8, true);
        vector.z = this.dataView.getFloat32(16, true);
    }

    public static fromVector(vector: Vector3): Vector3Ref {
        const ptr = new Vector3Ref();
        ptr.dataView.setFloat32(0, vector.x, true);
        ptr.dataView.setFloat32(8, vector.y, true);
        ptr.dataView.setFloat32(16, vector.z, true);
        return ptr;
    }
}