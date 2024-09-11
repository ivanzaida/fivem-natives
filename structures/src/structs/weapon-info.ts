import { EWeaponType } from '../enums/'

export class WeaponInfo {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(40))) {
		if (dataView.byteLength !== 40) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get eWeaponType(): EWeaponType {
		return this.dataView.getInt32(0, true) as EWeaponType
	}

	public get ammoCount(): number {
		return this.dataView.getInt32(8, true)
	}

	public get modsAsBitfield(): number {
		return this.dataView.getInt32(16, true)
	}

	public get tint(): number {
		return this.dataView.getInt32(24, true)
	}

	public get camo(): number {
		return this.dataView.getInt32(32, true)
	}
}