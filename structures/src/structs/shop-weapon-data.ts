import { StringRef } from '../types/string-ref';

export class ShopWeaponData {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(184))) {
		if (dataView.byteLength !== 184) {
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

	public get id(): number {
		return this.dataView.getInt32(16, true)
	}

	public get cost(): number {
		return this.dataView.getInt32(24, true)
	}

	public get ammoCost(): number {
		return this.dataView.getInt32(32, true)
	}

	public get ammoType(): number {
		return this.dataView.getInt32(40, true)
	}

	public get defaultClipSize(): number {
		return this.dataView.getInt32(48, true)
	}

	public get label(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(56, 31))).value
	}

	public get weaponDesc(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(88, 31))).value
	}

	public get weaponTt(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(120, 31))).value
	}

	public get weaponUppercase(): string {
		return new StringRef(new DataView(this.dataView.buffer.slice(152, 31))).value
	}
}