import { Vector3 } from '../types/vector3'

export class InteriorLayoutNode {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(72))) {
		if (dataView.byteLength !== 72) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get nameHash(): number {
		return this.dataView.getInt32(0, true)
	}

	public get translation(): Vector3 {
		return new Vector3(this.dataView.getFloat32(8, true), this.dataView.getFloat32(16, true), this.dataView.getFloat32(24, true))
	}

	public get rotation(): Vector3 {
		return new Vector3(this.dataView.getFloat32(32, true), this.dataView.getFloat32(40, true), this.dataView.getFloat32(48, true))
	}

	public get purchasable(): boolean {
		return this.dataView.getInt8(56) === 1;
	}

	public get numberOfGroupNodes(): number {
		return this.dataView.getInt32(64, true)
	}
}