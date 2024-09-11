import { StringRef } from '../types/string-ref';

export class ShopWeaponComponentData {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(112))) {
		if (dataView.byteLength !== 112) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get modType(): number {
		return this.dataView.getInt32(0, true)
	}

	public get isDefault(): boolean {
		return this.dataView.getInt8(8) === 1;
	}

	public get lockHash(): number {
		return this.dataView.getInt32(16, true)
	}

	public get componentName(): number {
		return this.dataView.getInt32(24, true)
	}

	public get id(): number {
		return this.dataView.getInt32(32, true)
	}

	public get cost(): number {
		return this.dataView.getInt32(40, true)
	}

	public get label(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(48, 31))).value
	}

	public get componentDesc(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(80, 31))).value
	}
}