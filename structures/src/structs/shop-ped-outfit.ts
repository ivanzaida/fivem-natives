import { StringRef } from '../types/string-ref';

export class ShopPedOutfit {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(88))) {
		if (dataView.byteLength !== 88) {
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

	public get numberOfProps(): number {
		return this.dataView.getInt32(24, true)
	}

	public get numberOfComponents(): number {
		return this.dataView.getInt32(32, true)
	}

	public get shopEnum(): number {
		return this.dataView.getInt32(40, true)
	}

	public get character(): number {
		return this.dataView.getInt32(48, true)
	}

	public get textLabel(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(56, 31))).value
	}
}