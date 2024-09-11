import { StringRef } from '../types/string-ref';

export class TattooShopItemValues {
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

	public get id(): number {
		return this.dataView.getInt32(8, true)
	}

	public get collection(): number {
		return this.dataView.getInt32(16, true)
	}

	public get preset(): number {
		return this.dataView.getInt32(24, true)
	}

	public get cost(): number {
		return this.dataView.getInt32(32, true)
	}

	public get facing(): number {
		return this.dataView.getInt32(40, true)
	}

	public get updateGroup(): number {
		return this.dataView.getInt32(48, true)
	}

	public get label(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(56, 31))).value
	}
}