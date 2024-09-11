import { EntityIndex } from '../typedefs/entity-index'

export class EntityDamageEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(104))) {
		if (dataView.byteLength !== 104) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get victimIndex(): EntityIndex {
		return this.dataView.getInt32(0, true)
	}

	public get damagerIndex(): EntityIndex {
		return this.dataView.getInt32(8, true)
	}

	public get damage(): number {
		return this.dataView.getFloat32(16, true)
	}

	public get enduranceDamage(): number {
		return this.dataView.getFloat32(24, true)
	}

	public get victimIncapacitated(): boolean {
		return this.dataView.getInt8(32) === 1;
	}

	public get victimDestroyed(): boolean {
		return this.dataView.getInt8(40) === 1;
	}

	public get weaponUsed(): number {
		return this.dataView.getInt32(48, true)
	}

	public get victimSpeed(): number {
		return this.dataView.getFloat32(56, true)
	}

	public get damagerSpeed(): number {
		return this.dataView.getFloat32(64, true)
	}

	public get isResponsibleForCollision(): boolean {
		return this.dataView.getInt8(72) === 1;
	}

	public get isHeadShot(): boolean {
		return this.dataView.getInt8(80) === 1;
	}

	public get isWithMeleeWeapon(): boolean {
		return this.dataView.getInt8(88) === 1;
	}

	public get hitMaterial(): number {
		return this.dataView.getInt32(96, true)
	}
}