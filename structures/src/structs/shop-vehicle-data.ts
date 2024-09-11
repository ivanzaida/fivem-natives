import { StringRef } from '../types/string-ref';

export class ShopVehicleData {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(56))) {
		if (dataView.byteLength !== 56) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get lockHash(): number {
		return this.dataView.getInt32(0, true)
	}

	public get nameHash(): number {
		return this.dataView.getInt32(8, true)
	}

	public get cost(): number {
		return this.dataView.getInt32(16, true)
	}

	public get textLabel(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(24, 31))).value
	}
}