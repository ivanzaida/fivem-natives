import { PedIndex } from '../typedefs/ped-index'
import { EntityIndex } from '../typedefs/entity-index'

export class NetworkFiredDummyProjectileEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(24))) {
		if (dataView.byteLength !== 24) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get firingPedIndex(): PedIndex {
		return this.dataView.getInt32(0, true)
	}

	public get firedProjectileIndex(): EntityIndex {
		return this.dataView.getInt32(8, true)
	}

	public get weaponType(): number {
		return this.dataView.getInt32(16, true)
	}
}