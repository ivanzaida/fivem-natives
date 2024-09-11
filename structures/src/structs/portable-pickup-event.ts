import { ObjectIndex } from '../typedefs/object-index'
import { NetworkIndex } from '../typedefs/network-index'
import { PlayerIndex } from '../typedefs/player-index'
import { ModelNames } from '../typedefs/model-names'

export class PortablePickupEvent {
	public readonly dataView: DataView;

	constructor(dataView: DataView = new DataView(new ArrayBuffer(32))) {
		if (dataView.byteLength !== 32) {
			throw new Error('Invalid buffer size');
		}

		this.dataView = dataView;
	}

	public get pickupID(): ObjectIndex {
		return this.dataView.getInt32(0, true)
	}

	public get pickupNetID(): NetworkIndex {
		return this.dataView.getInt32(8, true)
	}

	public get playerIndex(): PlayerIndex {
		return this.dataView.getInt32(16, true)
	}

	public get pickupModel(): ModelNames {
		return this.dataView.getInt32(24, true)
	}
}